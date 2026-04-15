/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Cpu, 
  Lightbulb,
  BrainCircuit,
  Info,
  Home,
  Settings2,
  BookOpen,
  ArrowLeft,
  HelpCircle,
  Share,
  Download,
  Upload,
  Settings,
  ExternalLink,
  Copy,
  Ghost,
  PartyPopper,
  Laugh,
  Wrench,
  Smile,
  Volume2,
  VolumeX,
  Mic2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Toaster, toast } from "sonner";
import { questions, Question } from './data/questions';
import { GoogleGenAI } from "@google/genai";

const getAiClient = (customKey?: string) => {
  const key = customKey || import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!key) return null;
  return new GoogleGenAI({ apiKey: key });
};

type QuizState = 'intro' | 'quiz' | 'result' | 'bank' | 'review';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface QuestionHistory {
  [id: number]: {
    asked: boolean;
    correct: boolean;
  };
}

const GLOSSARY: { [key: string]: string } = {
  'CMOS': 'Complementary Metal-Oxide-Semiconductor: A technology for constructing integrated circuits.',
  'MOSFET': 'Metal-Oxide-Semiconductor Field-Effect Transistor: The fundamental building block of modern digital and analog circuits.',
  'Vth': 'Threshold Voltage: The minimum gate-to-source voltage required to create a conduction path between the source and drain.',
  'gm': 'Transconductance: A measure of the electrical sensitivity of a device, defined as the change in output current divided by the change in input voltage.',
  'Vds': 'Drain-Source Voltage: The voltage between the drain and source terminals of a transistor.',
  'Vgs': 'Gate-Source Voltage: The voltage between the gate and source terminals of a transistor.',
  'CMRR': 'Common-Mode Rejection Ratio: The ability of a differential amplifier to reject signals common to both inputs.',
  'PSRR': 'Power Supply Rejection Ratio: The ability of an amplifier to maintain its output voltage as its DC power supply voltage varies.',
  'GBW': 'Gain-Bandwidth Product: The product of the open-loop voltage gain and the frequency at which it is measured.',
  'DIBL': 'Drain-Induced Barrier Lowering: A short-channel effect where the threshold voltage decreases as the drain voltage increases.',
  'CLM': 'Channel Length Modulation: The shortening of the inversion layer as the drain voltage increases.',
  'ICMR': 'Input Common-Mode Range: The range of input voltages for which an amplifier operates correctly.',
  'LNA': 'Low-Noise Amplifier: An electronic amplifier that amplifies a very low-power signal without significantly degrading its signal-to-noise ratio.',
  'CMP': 'Chemical Mechanical Polishing: A process used in semiconductor fabrication to flatten the surface of the wafer.',
  'STI': 'Shallow Trench Isolation: An integrated circuit feature which prevents electric current leakage between adjacent semiconductor device components.',
  'HCI': 'Hot Carrier Injection: A phenomenon where high-energy carriers are injected into the gate dielectric, damaging it over time.',
  'GIDL': 'Gate-Induced Drain Leakage: A leakage current that occurs in the gate-drain overlap region at high drain-to-gate voltages.',
  'CDS': 'Correlated Double Sampling: A method to measure electrical values that allows removal of an undesired offset.',
  'PTAT': 'Proportional To Absolute Temperature: A circuit whose output is linearly proportional to the absolute temperature.',
  'CTAT': 'Complementary To Absolute Temperature: A circuit whose output is inversely proportional to the absolute temperature.',
};

const ANALOG_JOKES = [
  "Why did the transistor go to therapy? It had too many issues with its base.",
  "What's an analog designer's favorite type of music? Anything with a lot of gain.",
  "Why was the op-amp so good at its job? It always stayed positive, even when its inputs were negative.",
  "How do you know if someone is an analog designer? Don't worry, they'll tell you... eventually, after they've finished their simulation.",
  "Why did the capacitor break up with the resistor? There was just too much resistance in the relationship.",
  "What did the NMOS say to the PMOS? You're so negative!",
  "Why do analog designers hate digital? Because it's too discrete.",
  "What's a circuit's favorite snack? Micro-chips.",
  "Why did the current mirror fail? It couldn't see its own reflection.",
  "Why was the differential pair so popular? They were always seen together.",
  "Why did the signal cross the road? To get to the other side of the bridge rectifier.",
  "What do you call a transistor that's a good storyteller? A MOSFET-teller.",
  "Why was the inductor so stressed? It was under a lot of pressure from the magnetic field.",
  "Why did the voltage source get arrested? For assault and battery.",
  "Why was the circuit board so sad? It had too many shorts."
];

const PRAISE_MESSAGES = [
  "Excellent work! Your understanding of analog design is quite impressive.",
  "Correct! You're operating at peak efficiency today.",
  "Spot on! That's the kind of precision we like to see.",
  "Well done! You've clearly spent some quality time with Razavi's textbooks.",
  "Brilliant! Your mental models are perfectly calibrated."
];

const DISS_MESSAGES = [
  "Interesting choice. Are you sure you weren't thinking of a digital circuit?",
  "A bold attempt, but it seems your logic has some parasitic oscillations.",
  "That answer is about as stable as an op-amp with 180 degrees of phase shift.",
  "I see. Perhaps we should revisit the fundamentals of MOSFET physics?",
  "Close, but in the world of analog, close is just another word for 'it doesn't work'.",
  "It's okay, even the best designers occasionally forget their KCL.",
  "Your intuition seems to be suffering from some severe channel length modulation."
];

const TextWithGlossary = ({ text }: { text: string }) => {
  // Simple regex to find glossary terms. This is a basic implementation.
  // We sort terms by length descending to avoid partial matches (e.g., MOSFET vs MOS)
  const sortedTerms = useMemo(() => Object.keys(GLOSSARY).sort((a, b) => b.length - a.length), []);
  
  const parts = useMemo(() => {
    let result: (string | React.ReactNode)[] = [text];
    
    sortedTerms.forEach(term => {
      const newResult: (string | React.ReactNode)[] = [];
      result.forEach(part => {
        if (typeof part !== 'string') {
          newResult.push(part);
          return;
        }
        
        const regex = new RegExp(`(\\b${term}\\b)`, 'g');
        const split = part.split(regex);
        
        split.forEach((s, i) => {
          if (s === term) {
            newResult.push(
              <React.Fragment key={`${term}-${i}`}>
                <Tooltip>
                  <TooltipTrigger render={<span className="cursor-help border-b border-dotted border-indigo-400 text-indigo-700 font-medium px-0.5 hover:bg-indigo-50 transition-colors" />}>
                    {s}
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs bg-slate-900 text-white border-none p-3 shadow-xl">
                    <p className="text-xs leading-relaxed">{GLOSSARY[term]}</p>
                  </TooltipContent>
                </Tooltip>
              </React.Fragment>
            );
          } else if (s !== '') {
            newResult.push(s);
          }
        });
      });
      result = newResult;
    });
    
    return result;
  }, [text, sortedTerms]);

  return <TooltipProvider delay={300}>{parts}</TooltipProvider>;
};

export default function App() {
  const [state, setState] = useState<QuizState>('intro');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; isCorrect: boolean; selected: number }[]>([]);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isGeneratingExplanation, setIsGeneratingExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [questionCount, setQuestionCount] = useState(5);
  const [isOffline, setIsOffline] = useState(false);
  const [userApiKey, setUserApiKey] = useState("");
  const [currentDifficulty, setCurrentDifficulty] = useState<Difficulty>('Medium');
  const [history, setHistory] = useState<QuestionHistory>({});
  const [reviewIndex, setReviewIndex] = useState(0);
  const [deepReviewExplanation, setDeepReviewExplanation] = useState<string | null>(null);
  const [selectedBankQuestion, setSelectedBankQuestion] = useState<Question | null>(null);
  const [isJokingEnabled, setIsJokingEnabled] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [shuffledCorrectIndex, setShuffledCorrectIndex] = useState<number>(0);

  // Load settings from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('cmos_quiz_history');
    if (savedHistory) {
      try { setHistory(JSON.parse(savedHistory)); } catch (e) { console.error(e); }
    }
    
    const savedKey = localStorage.getItem('cmos_quiz_api_key');
    if (savedKey) setUserApiKey(savedKey);
    
    const savedOffline = localStorage.getItem('cmos_quiz_offline');
    if (savedOffline) setIsOffline(savedOffline === 'true');

    const savedJoking = localStorage.getItem('cmos_quiz_joking');
    if (savedJoking) setIsJokingEnabled(savedJoking === 'true');
  }, []);

  const toggleJoking = (val: boolean) => {
    setIsJokingEnabled(val);
    localStorage.setItem('cmos_quiz_joking', String(val));
    if (val) {
      toast.success("Joking AI Assistant activated! 🎙️");
      tellJoke();
    } else {
      toast.info("Joking AI Assistant deactivated.");
      window.speechSynthesis.cancel();
    }
  };

  const tellJoke = useCallback(() => {
    if (!isJokingEnabled) return;
    const joke = ANALOG_JOKES[Math.floor(Math.random() * ANALOG_JOKES.length)];
    const utterance = new SpeechSynthesisUtterance(joke);
    
    // Try to find a fluent English voice
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && !v.name.includes('Google')) || 
                    voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;
    
    utterance.lang = 'en-US';
    utterance.pitch = 1.0; 
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }, [isJokingEnabled]);

  const praiseUser = useCallback(() => {
    if (!isJokingEnabled) return;
    const msg = PRAISE_MESSAGES[Math.floor(Math.random() * PRAISE_MESSAGES.length)];
    const utterance = new SpeechSynthesisUtterance(msg);
    
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && !v.name.includes('Google')) || 
                    voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;
    
    utterance.lang = 'en-US';
    utterance.pitch = 1.0;
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }, [isJokingEnabled]);

  const dissUser = useCallback(() => {
    if (!isJokingEnabled) return;
    const msg = DISS_MESSAGES[Math.floor(Math.random() * DISS_MESSAGES.length)];
    const utterance = new SpeechSynthesisUtterance(msg);
    
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && !v.name.includes('Google')) || 
                    voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;
    
    utterance.lang = 'en-US';
    utterance.pitch = 1.0;
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }, [isJokingEnabled]);

  const shuffleQuestion = useCallback((q: Question) => {
    const optionsWithIndex = q.options.map((opt, i) => ({ opt, i }));
    for (let i = optionsWithIndex.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
    }
    setShuffledOptions(optionsWithIndex.map(x => x.opt));
    setShuffledCorrectIndex(optionsWithIndex.findIndex(x => x.i === q.correctAnswer));
  }, []);

  const saveApiKey = (key: string) => {
    setUserApiKey(key);
    localStorage.setItem('cmos_quiz_api_key', key);
    toast.success("API Key saved locally.");
  };

  const toggleOffline = (val: boolean) => {
    setIsOffline(val);
    localStorage.setItem('cmos_quiz_offline', String(val));
    toast.info(val ? "Offline Mode enabled." : "Online Mode enabled.");
  };

  const exportHistory = () => {
    const data = JSON.stringify(history, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cmos-mastery-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    toast.success("Progress exported successfully.");
  };

  const importHistory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        setHistory(imported);
        localStorage.setItem('cmos_quiz_history', JSON.stringify(imported));
        toast.success("Progress imported successfully.");
      } catch (err) {
        toast.error("Invalid export file.");
      }
    };
    reader.readAsText(file);
  };

  const shareResults = () => {
    const accuracy = Math.round((score / questionCount) * 100);
    const text = `I just scored ${score}/${questionCount} (${accuracy}%) on the CMOS Interview Master!\n\nCan you beat my Analog IC Design knowledge?\nTry it here: ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'CMOS Interview Master Results',
        text: text,
        url: window.location.origin,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Results copied to clipboard!");
    }
  };

  // Save history to localStorage
  const updateHistory = useCallback((questionId: number, isCorrect: boolean) => {
    setHistory(prev => {
      const newHistory = {
        ...prev,
        [questionId]: {
          asked: true,
          correct: prev[questionId]?.correct || isCorrect
        }
      };
      localStorage.setItem('cmos_quiz_history', JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = quizQuestions.length > 0 ? ((currentQuestionIndex) / quizQuestions.length) * 100 : 0;

  const getNextQuestion = useCallback((prevDifficulty: Difficulty, wasCorrect: boolean, usedIds: number[]) => {
    let nextDifficulty: Difficulty = prevDifficulty;
    if (wasCorrect) {
      if (prevDifficulty === 'Easy') nextDifficulty = 'Medium';
      else if (prevDifficulty === 'Medium') nextDifficulty = 'Hard';
    } else {
      if (prevDifficulty === 'Hard') nextDifficulty = 'Medium';
      else if (prevDifficulty === 'Medium') nextDifficulty = 'Easy';
    }

    const available = questions.filter(q => q.difficulty === nextDifficulty && !usedIds.includes(q.id));
    
    if (available.length === 0) {
      const anyAvailable = questions.filter(q => !usedIds.includes(q.id));
      if (anyAvailable.length === 0) return null;
      return anyAvailable[Math.floor(Math.random() * anyAvailable.length)];
    }

    return available[Math.floor(Math.random() * available.length)];
  }, []);

  const handleStart = () => {
    const initialAvailable = questions.filter(q => q.difficulty === 'Medium');
    const firstQ = initialAvailable[Math.floor(Math.random() * initialAvailable.length)];
    
    shuffleQuestion(firstQ);
    setQuizQuestions([firstQ]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setIsAnswered(false);
    setSelectedOption(null);
    setShowHint(false);
    setCurrentDifficulty('Medium');
    setState('quiz');
    if (isJokingEnabled) tellJoke();
  };

  const handleSubmit = () => {
    if (selectedOption === null || !currentQuestion) return;
    
    const isCorrect = selectedOption === shuffledCorrectIndex;
    if (isCorrect) {
      setScore(s => s + 1);
      praiseUser();
      toast.success("Correct! " + PRAISE_MESSAGES[Math.floor(Math.random() * PRAISE_MESSAGES.length)], {
        icon: "🎯",
        className: "bg-green-50 border-green-200 text-green-800"
      });
    } else {
      dissUser();
      toast.error("Not quite... " + DISS_MESSAGES[Math.floor(Math.random() * DISS_MESSAGES.length)], {
        icon: "🤔",
        className: "bg-rose-50 border-rose-200 text-rose-800"
      });
    }
    
    updateHistory(currentQuestion.id, isCorrect);
    
    setAnswers([...answers, { 
      questionId: currentQuestion.id, 
      isCorrect, 
      selected: selectedOption 
    }]);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (answers.length < questionCount) {
      const usedIds = quizQuestions.map(q => q.id);
      const lastAnswer = answers[answers.length - 1];
      const nextQ = getNextQuestion(currentDifficulty, lastAnswer.isCorrect, usedIds);
      
      if (nextQ) {
        shuffleQuestion(nextQ);
        setQuizQuestions([...quizQuestions, nextQ]);
        setCurrentQuestionIndex(i => i + 1);
        setCurrentDifficulty(nextQ.difficulty);
        setSelectedOption(null);
        setIsAnswered(false);
        setAiExplanation(null);
        setShowHint(false);
      } else {
        setState('result');
      }
    } else {
      setState('result');
    }
  };

  const getAiExplanation = async () => {
    if (isGeneratingExplanation || !currentQuestion) return;
    if (isOffline) {
      setAiExplanation("AI insights are disabled in Offline Mode. Use the Engineering Insight above for technical details.");
      return;
    }
    
    const client = getAiClient(userApiKey);
    if (!client) {
      setAiExplanation("No Gemini API Key found. Please configure it in Settings or enable Offline Mode.");
      return;
    }

    setIsGeneratingExplanation(true);
    try {
      const response = await client.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Explain this CMOS design concept simply: ${currentQuestion.text}. The correct answer is "${currentQuestion.options[currentQuestion.correctAnswer]}". Provide a deep technical insight for an engineer.`,
      });
      setAiExplanation(response.text || "Could not generate explanation.");
    } catch (error) {
      console.error("AI Error:", error);
      setAiExplanation("Failed to connect to the AI brain. Please check your connection.");
    } finally {
      setIsGeneratingExplanation(false);
    }
  };

  const getDeepReviewExplanation = async (q: Question, selectedIdx: number) => {
    if (isOffline) {
      setDeepReviewExplanation(`[OFFLINE MODE]
Technical Analysis:
The correct answer is "${q.options[q.correctAnswer]}". 
${q.explanation}

Your selection "${q.options[selectedIdx]}" was incorrect based on the principles described above.`);
      return;
    }

    const client = getAiClient(userApiKey);
    if (!client) {
      setDeepReviewExplanation("No Gemini API Key found. Please configure it in Settings or enable Offline Mode.");
      return;
    }

    setIsGeneratingExplanation(true);
    setDeepReviewExplanation(null);
    try {
      const response = await client.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Question: ${q.text}
Correct Answer: ${q.options[q.correctAnswer]}
User's Wrong Answer: ${q.options[selectedIdx]}

Explain specifically why the user's chosen answer is incorrect in this context and why the correct one is better. Be concise but technically accurate.`,
      });
      setDeepReviewExplanation(response.text || "Could not generate explanation.");
    } catch (error) {
      console.error("AI Error:", error);
      setDeepReviewExplanation("Failed to generate deep review.");
    } finally {
      setIsGeneratingExplanation(false);
    }
  };

  const mistakes = useMemo(() => answers.filter(a => !a.isCorrect), [answers]);

  const startDeepReview = () => {
    if (mistakes.length === 0) return;
    setReviewIndex(0);
    const firstMistake = mistakes[0];
    const q = questions.find(q => q.id === firstMistake.questionId);
    if (q) {
      getDeepReviewExplanation(q, firstMistake.selected);
      setState('review');
    }
  };

  const nextReview = () => {
    if (reviewIndex < mistakes.length - 1) {
      const nextIdx = reviewIndex + 1;
      setReviewIndex(nextIdx);
      const nextMistake = mistakes[nextIdx];
      const q = questions.find(q => q.id === nextMistake.questionId);
      if (q) getDeepReviewExplanation(q, nextMistake.selected);
    } else {
      setState('result');
    }
  };

  return (
    <div className="min-h-screen circuit-grid flex flex-col items-center justify-center p-4 md:p-8">
      <Toaster position="top-center" richColors />
      <AnimatePresence mode="wait">
        {state === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl w-full"
          >
            <Card className="glass-card border-t-4 border-t-indigo-600 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto bg-indigo-100 p-4 rounded-full w-fit shadow-inner">
                  <Ghost className="w-12 h-12 text-indigo-600 animate-bounce" />
                </div>
                <CardTitle className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  CMOS Interview Master
                </CardTitle>
                <CardDescription className="text-lg font-medium text-slate-600">
                  Professional-grade interview preparation for Analog IC Design roles. Now with more puns!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white border border-slate-100 shadow-sm rounded-lg text-center hover:shadow-md transition-shadow">
                    <Cpu className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
                    <p className="text-sm font-semibold text-slate-700">200 Pool</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-100 shadow-sm rounded-lg text-center hover:shadow-md transition-shadow">
                    <PartyPopper className="w-6 h-6 mx-auto mb-2 text-pink-500" />
                    <p className="text-sm font-semibold text-slate-700">Adaptive</p>
                  </div>
                  <Dialog>
                    <DialogTrigger render={<button className="p-4 bg-white border border-slate-100 shadow-sm hover:bg-slate-50 rounded-lg text-center transition-all hover:shadow-md" />}>
                      <Wrench className="w-6 h-6 mx-auto mb-2 text-amber-500" />
                      <p className="text-sm font-semibold text-slate-700">Settings</p>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Application Settings</DialogTitle>
                        <DialogDescription>
                          Configure your experience for standalone or offline use.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Offline Mode</Label>
                            <p className="text-xs text-slate-500">Disable AI features and use local data only.</p>
                          </div>
                          <Switch 
                            checked={isOffline} 
                            onCheckedChange={toggleOffline} 
                          />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="flex items-center gap-2">
                              <Mic2 className="w-4 h-4 text-indigo-600" /> Joking AI Assistant
                            </Label>
                            <p className="text-xs text-slate-500">Enable background voice that tells analog jokes.</p>
                          </div>
                          <Switch 
                            checked={isJokingEnabled} 
                            onCheckedChange={toggleJoking} 
                          />
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <Label htmlFor="api-key">Custom Gemini API Key</Label>
                          <Input 
                            id="api-key" 
                            type="password" 
                            placeholder="Paste your key here..." 
                            value={userApiKey}
                            onChange={(e) => saveApiKey(e.target.value)}
                          />
                          <p className="text-[10px] text-slate-400">
                            Required for AI insights if running outside AI Studio. Keys are stored only in your browser's local storage.
                          </p>
                        </div>
                        <Separator />
                        <div className="space-y-3">
                          <Label>Data Management</Label>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1" onClick={exportHistory}>
                              <Download className="w-3 h-3 mr-2" /> Export Progress
                            </Button>
                            <div className="flex-1 relative">
                              <Button variant="outline" size="sm" className="w-full">
                                <Upload className="w-3 h-3 mr-2" /> Import Progress
                              </Button>
                              <input 
                                type="file" 
                                accept=".json" 
                                onChange={importHistory}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="sm:justify-start">
                        <p className="text-[10px] text-slate-400">
                          CMOS Interview Master v2.0 • Standalone Ready
                        </p>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <button 
                    onClick={() => setState('bank')}
                    className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors border border-blue-100"
                  >
                    <BookOpen className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm font-semibold text-blue-700">Question Bank</p>
                  </button>
                </div>

                  <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Settings2 className="w-4 h-4 text-slate-500" />
                        <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500">Session Configuration</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-500">Offline Mode</span>
                        <button 
                          onClick={() => setIsOffline(!isOffline)}
                          className={`w-10 h-5 rounded-full transition-colors relative ${isOffline ? 'bg-indigo-600' : 'bg-slate-300'}`}
                        >
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isOffline ? 'left-6' : 'left-1'}`} />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-700">Number of Questions (2-20):</p>
                        <input 
                          type="number" 
                          min="2" 
                          max="20" 
                          value={questionCount}
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            if (!isNaN(val)) setQuestionCount(Math.min(20, Math.max(2, val)));
                          }}
                          className="w-16 px-2 py-1 border rounded-md text-center font-bold text-indigo-600 focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                      </div>
                      <div className="flex gap-2">
                        {[5, 10, 15, 20].map(count => (
                          <Button 
                            key={count}
                            variant={questionCount === count ? "default" : "outline"}
                            size="sm"
                            onClick={() => setQuestionCount(count)}
                            className="flex-1"
                          >
                            {count}
                          </Button>
                        ))}
                      </div>
                      <p className="text-[10px] text-slate-400 italic mt-2">
                        * Difficulty will adapt based on your performance. {isOffline && "AI features are disabled."}
                      </p>
                    </div>
                  </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-500">Core Competencies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {['MOSFET Physics', 'Current Mirrors', 'Differential Pairs', 'Amplifiers', 'Layout', 'Noise'].map(topic => (
                      <Badge key={topic} variant="secondary" className="px-3 py-1">{topic}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleStart} className="w-full h-12 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700">
                  Initialize Test Sequence <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {state === 'quiz' && currentQuestion && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="max-w-3xl w-full space-y-6"
          >
            <div className="flex justify-between items-end mb-2">
              <div className="space-y-1">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Question {currentQuestionIndex + 1} of {questionCount}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-mono">{currentQuestion.category}</Badge>
                  <Badge className={
                    currentQuestion.difficulty === 'Easy' ? 'bg-green-100 text-green-700 border-green-200' :
                    currentQuestion.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700 border-amber-200' :
                    'bg-red-100 text-red-700 border-red-200'
                  }>
                    {currentQuestion.difficulty}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Accuracy</p>
                <p className="text-xl font-bold text-indigo-600 font-mono">{answers.length > 0 ? Math.round((score / answers.length) * 100) : 0}%</p>
              </div>
            </div>
            
            <Progress value={progress} className="h-2 bg-slate-200" />

            <Card className="glass-card overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-2xl leading-tight font-medium">
                    <TextWithGlossary text={currentQuestion.text} />
                  </CardTitle>
                  {!isAnswered && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowHint(true)}
                      className="text-indigo-600 shrink-0"
                      disabled={showHint}
                    >
                      <Lightbulb className="w-4 h-4 mr-1" /> Hint
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <AnimatePresence>
                  {showHint && !isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-amber-50 border border-amber-100 rounded-lg text-sm text-amber-800 flex gap-2 items-start"
                    >
                      <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{currentQuestion.hint}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <RadioGroup 
                  value={selectedOption !== null ? selectedOption.toString() : ""} 
                  onValueChange={(v) => !isAnswered && setSelectedOption(parseInt(v))}
                  className="space-y-3"
                >
                  {shuffledOptions.map((option, idx) => {
                    const isCorrect = idx === shuffledCorrectIndex;
                    const isSelected = idx === selectedOption;
                    
                    let variant = "border-slate-200 hover:border-indigo-300 bg-white";
                    if (isAnswered) {
                      if (isCorrect) variant = "border-green-500 bg-green-50 ring-2 ring-green-500/20";
                      else if (isSelected) variant = "border-rose-500 bg-rose-50 ring-2 ring-rose-500/20";
                      else variant = "opacity-50 border-slate-200 bg-slate-50";
                    } else if (isSelected) {
                      variant = "border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600/20";
                    }

                    return (
                      <label
                        key={idx}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all shadow-sm ${variant}`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={idx.toString()} id={`option-${idx}`} className="sr-only" />
                          <span className={`font-mono font-bold mr-2 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`}>
                            {String.fromCharCode(64 + (idx + 1))}.
                          </span>
                          <span className="font-medium text-slate-700">
                            <TextWithGlossary text={option} />
                          </span>
                        </div>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600" />}
                      </label>
                    );
                  })}
                </RadioGroup>

                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4 pt-4"
                    >
                      <Separator />
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-2 mb-2 text-slate-700">
                          <Info className="w-4 h-4" />
                          <span className="text-sm font-bold uppercase tracking-wider">Engineering Insight</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {currentQuestion.explanation}
                        </p>
                        
                        {aiExplanation ? (
                          <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 rounded-md text-sm text-indigo-800 italic">
                            <div className="flex items-center gap-2 mb-1 font-semibold not-italic">
                              <Zap className="w-3 h-3" /> AI Brain Expansion:
                            </div>
                            {aiExplanation}
                          </div>
                        ) : (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={getAiExplanation}
                            disabled={isGeneratingExplanation}
                            className="mt-4 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 h-auto"
                          >
                            {isGeneratingExplanation ? "Consulting AI..." : "Ask AI for deeper technical explanation"}
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
              <CardFooter className="bg-slate-50/50 border-t border-slate-100 p-6 flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setState('intro')}
                  className="shrink-0"
                >
                  <Home className="w-4 h-4" />
                </Button>
                {!isAnswered ? (
                  <Button 
                    onClick={handleSubmit} 
                    disabled={selectedOption === null}
                    className="flex-1 h-12 bg-slate-900 hover:bg-slate-800"
                  >
                    Verify Signal
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNext} 
                    className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700"
                  >
                    {answers.length === questionCount ? "Finalize Analysis" : "Next Module"} 
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {state === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full"
          >
            <Card className="glass-card border-t-4 border-t-green-600">
              <CardHeader className="text-center">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-fit mb-4">
                  <Laugh className="w-12 h-12 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold">Analysis Complete</CardTitle>
                <CardDescription>
                  Your performance has been benchmarked against industry standards.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex flex-col items-center justify-center p-8 bg-slate-900 text-white rounded-2xl shadow-inner">
                  <p className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-2">Final Score</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold font-mono">{score}</span>
                    <span className="text-2xl text-slate-500 font-mono">/ {questionCount}</span>
                  </div>
                  <p className="mt-4 text-lg font-medium text-green-400">
                    {score === questionCount ? "Perfect Signal Integrity!" : 
                     score >= questionCount * 0.7 ? "High Gain Performance" : 
                     "Signal Needs Amplification"}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500">Module Breakdown</h3>
                  <ScrollArea className="h-48 rounded-md border p-4">
                    <div className="space-y-3">
                      {answers.map((answer, idx) => {
                        const q = questions.find(q => q.id === answer.questionId);
                        return (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 truncate mr-4">Q{idx + 1}: {q?.text}</span>
                            {answer.isCorrect ? (
                              <Badge className="bg-green-100 text-green-700 border-green-200">PASS</Badge>
                            ) : (
                              <Badge variant="destructive">FAIL</Badge>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="flex gap-2 w-full">
                  <Button variant="outline" onClick={handleStart} className="flex-1 h-12">
                    <RotateCcw className="mr-2 w-4 h-4" /> Recalibrate
                  </Button>
                  <Button variant="secondary" onClick={shareResults} className="flex-1 h-12 border border-slate-200">
                    <Share className="mr-2 w-4 h-4" /> Share
                  </Button>
                </div>
                <div className="flex gap-2 w-full">
                  {mistakes.length > 0 && (
                    <Button variant="secondary" onClick={startDeepReview} className="flex-1 h-12 border border-indigo-200 text-indigo-700">
                      <BrainCircuit className="mr-2 w-4 h-4" /> Deep Review
                    </Button>
                  )}
                  <Button onClick={() => setState('intro')} className="flex-1 h-12 bg-slate-900 hover:bg-slate-800">
                    Return to Base
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {state === 'review' && mistakes.length > 0 && (
          <motion.div
            key="review"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl w-full"
          >
            <Card className="glass-card border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm" onClick={() => setState('result')}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                  <Badge variant="outline">Mistake {reviewIndex + 1} of {mistakes.length}</Badge>
                </div>
                <CardTitle className="text-xl mt-4">
                  <TextWithGlossary text={questions.find(q => q.id === mistakes[reviewIndex].questionId)?.text || ""} />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {mistakes.map((m, idx) => (
                    <Button
                      key={idx}
                      variant={reviewIndex === idx ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setReviewIndex(idx);
                        const q = questions.find(q => q.id === m.questionId);
                        if (q) getDeepReviewExplanation(q, m.selected);
                      }}
                      className="w-8 h-8 rounded-full p-0 text-xs"
                    >
                      {idx + 1}
                    </Button>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Selection:</p>
                  <div className="p-4 rounded-xl border-2 border-red-500 bg-red-50 flex items-center justify-between">
                    <span className="font-medium text-red-700">
                      {questions.find(q => q.id === mistakes[reviewIndex].questionId)?.options[mistakes[reviewIndex].selected]}
                    </span>
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Correct Answer:</p>
                  <div className="p-4 rounded-xl border-2 border-green-500 bg-green-50 flex items-center justify-between">
                    <span className="font-medium text-green-700">
                      {questions.find(q => q.id === mistakes[reviewIndex].questionId)?.options[questions.find(q => q.id === mistakes[reviewIndex].questionId)?.correctAnswer || 0]}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                </div>

                <Separator />

                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Zap className="w-12 h-12 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4" /> Why was this wrong?
                  </h4>
                  {isGeneratingExplanation ? (
                    <div className="flex items-center gap-3 text-indigo-600 animate-pulse">
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span className="text-sm font-medium">Analyzing mistake dynamics...</span>
                    </div>
                  ) : (
                    <p className="text-indigo-900 text-sm leading-relaxed whitespace-pre-wrap">
                      {deepReviewExplanation}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={nextReview} className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-100">
                  {reviewIndex === mistakes.length - 1 ? "Finish Review" : "Next Mistake"} <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {state === 'bank' && (
          <motion.div
            key="bank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl w-full"
          >
            <Card className="glass-card border-t-4 border-t-indigo-600 bg-white/90">
              <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100">
                <div>
                  <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Question Bank</CardTitle>
                  <CardDescription className="font-medium text-slate-500">Mastery tracking for all {questions.length} interview questions.</CardDescription>
                </div>
                <Button variant="ghost" className="hover:bg-indigo-50 text-indigo-600" onClick={() => {
                  setState('intro');
                  setSelectedBankQuestion(null);
                }}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
                </Button>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <TooltipProvider delay={200}>
                    <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-2">
                      {questions.map((q) => {
                        const h = history[q.id];
                        const isAsked = h?.asked;
                        const isCorrect = h?.correct;
                        const isSelected = selectedBankQuestion?.id === q.id;
                        
                        return (
                          <React.Fragment key={q.id}>
                            <Tooltip>
                              <TooltipTrigger render={
                                <div 
                                  onClick={() => isAsked && setSelectedBankQuestion(q)}
                                  className={`
                                    aspect-square rounded-md flex flex-col items-center justify-center border-2 transition-all 
                                    ${!isAsked ? 'border-slate-200 bg-white text-slate-400 cursor-not-allowed opacity-50' : 
                                      isCorrect ? 'border-green-500 bg-green-50 text-green-700 cursor-pointer hover:scale-105' : 
                                      'border-amber-500 bg-amber-50 text-amber-700 cursor-pointer hover:scale-105'}
                                    ${isSelected ? 'ring-2 ring-indigo-600 ring-offset-2 scale-110 z-10' : ''}
                                  `}
                                />
                              }>
                                <span className="text-[10px] font-bold">#{q.id}</span>
                                {isAsked && (isCorrect ? <CheckCircle2 className="w-3 h-3 mt-1" /> : <HelpCircle className="w-3 h-3 mt-1" />)}
                              </TooltipTrigger>
                              <TooltipContent className="bg-slate-900 text-white p-3">
                              <div className="space-y-1">
                                <p className="font-bold text-xs">{q.category}</p>
                                <p className="text-[10px] opacity-70">{q.difficulty} Difficulty</p>
                                <Separator className="bg-white/20 my-1" />
                                <p className="text-[10px]">
                                  Status: {!isAsked ? 'Locked (Not Asked)' : isCorrect ? 'Mastered' : 'Attempted'}
                                </p>
                                {isAsked && <p className="text-[8px] text-indigo-300 mt-1">Click to view details</p>}
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </React.Fragment>
                      );
                    })}
                    </div>
                  </TooltipProvider>
                </div>

                <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 min-h-[400px]">
                  {selectedBankQuestion ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{selectedBankQuestion.category}</Badge>
                        <Badge className={
                          selectedBankQuestion.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                          selectedBankQuestion.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }>
                          {selectedBankQuestion.difficulty}
                        </Badge>
                      </div>
                      <h4 className="font-bold text-slate-900 leading-tight">
                        <TextWithGlossary text={selectedBankQuestion.text} />
                      </h4>
                      <div className="space-y-2">
                        {selectedBankQuestion.options.map((opt, i) => (
                          <div 
                            key={i} 
                            className={`p-2 text-xs rounded border ${i === selectedBankQuestion.correctAnswer ? 'bg-green-50 border-green-200 text-green-800 font-bold' : 'bg-white border-slate-200 text-slate-600'}`}
                          >
                            {String.fromCharCode(65 + i)}. {opt}
                          </div>
                        ))}
                      </div>
                      <Separator />
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Engineering Insight</p>
                        <p className="text-xs text-slate-600 leading-relaxed italic">
                          {selectedBankQuestion.explanation}
                        </p>
                        <div className="flex gap-2 pt-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1"
                            onClick={() => {
                              const text = `Question: ${selectedBankQuestion.text}\nCorrect Answer: ${selectedBankQuestion.options[selectedBankQuestion.correctAnswer]}\n\nEngineering Insight: ${selectedBankQuestion.explanation}`;
                              navigator.clipboard.writeText(text);
                              toast.success("Question details copied!");
                            }}
                          >
                            <Copy className="w-3 h-3 mr-2" /> Copy
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1"
                            onClick={() => {
                              const query = encodeURIComponent(`CMOS ${selectedBankQuestion.category} ${selectedBankQuestion.text}`);
                              window.open(`https://www.google.com/search?q=${query}`, '_blank');
                            }}
                          >
                            <ExternalLink className="w-3 h-3 mr-2" /> Research
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                      <div className="bg-white p-4 rounded-full shadow-sm">
                        <Smile className="w-8 h-8 text-slate-300" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-500">Question Detail View</p>
                        <p className="text-xs text-slate-400 mt-1">Select an unlocked question from the grid to review its content and correct answer.</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
