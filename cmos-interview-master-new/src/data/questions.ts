export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'MOSFET Physics' | 'Current Mirrors' | 'Differential Pairs' | 'Amplifiers' | 'Layout' | 'Frequency Response' | 'Noise' | 'Stability' | 'Biasing';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  hint: string;
}

export const questions: Question[] = [
  // --- MOSFET Physics ---
  {
    id: 1,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'In a 65nm CMOS process, which effect is primarily responsible for the reduction of the effective mobility as the vertical electric field increases?',
    options: [
      'Velocity Saturation Effect which limits the carrier speed at high electric fields',
      'Surface Scattering Mechanism at the Si-SiO2 interface which reduces carrier mobility',
      'Impact Ionization Process which creates additional electron-hole pairs in the channel',
      'Drain-Induced Barrier Lowering (DIBL) which reduces the threshold voltage at high Vds'
    ],
    correctAnswer: 1,
    hint: 'Consider the interaction of carriers with the Si-SiO2 interface.',
    explanation: 'As the gate voltage increases, the vertical electric field pulls carriers closer to the Si-SiO2 interface, increasing surface scattering and reducing effective mobility.'
  },
  {
    id: 2,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the physical cause of the "Reverse Short Channel Effect" (RSCE) observed in some modern processes?',
    options: [
      'Channel length modulation effect which reduces the output resistance of the device',
      'Halo (pocket) implantation near junctions which increases local doping concentration',
      'Gate oxide leakage current through oxide which increases the static power consumption',
      'Sub-threshold swing degradation in device which affects the turn-off characteristics'
    ],
    correctAnswer: 1,
    hint: 'Think about the non-uniform doping introduced to prevent punch-through.',
    explanation: 'Halo or pocket implants increase the local doping concentration near the source and drain junctions. As the channel length decreases, these regions overlap more, effectively increasing the average channel doping and thus the threshold voltage.'
  },
  {
    id: 3,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'Which parameter determines the "Subthreshold Swing" (S) of a MOSFET?',
    options: [
      'Transistor channel width dimension which determines the total current carrying capacity',
      'The ratio of gate-to-channel capacitance and depletion region capacitance in the substrate',
      'Drain current level in saturation which determines the transconductance of the device',
      'Supply voltage range of circuit which determines the maximum signal swing available'
    ],
    correctAnswer: 1,
    hint: 'S = 60 * (1 + Cd/Cox) mV/decade at room temperature.',
    explanation: 'The subthreshold swing is determined by the capacitive divider between the gate oxide capacitance (Cox) and the depletion region capacitance (Cd).'
  },
  {
    id: 4,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What happens to the threshold voltage (Vth) of an NMOS transistor as the source-to-body voltage (Vsb) increases?',
    options: [
      'Vth decreases due to the reduction of the depletion region charge in the substrate bulk',
      'Vth increases due to the increased depletion charge in the substrate bulk',
      'Vth remains constant regardless of the source-to-body voltage applied to the device',
      'Vth becomes negative allowing the transistor to operate in the depletion mode regime'
    ],
    correctAnswer: 1,
    hint: 'This is known as the Body Effect.',
    explanation: 'Increasing Vsb increases the depletion charge in the substrate, which requires a larger gate-source voltage to invert the channel, thus increasing Vth.'
  },
  {
    id: 5,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'Which MOSFET parameter is most affected by "Velocity Saturation"?',
    options: [
      'Threshold voltage (Vth) level which determines the turn-on point of the transistor',
      'Transconductance (gm) at high Vgs where the carrier velocity reaches its saturation limit',
      'Gate oxide capacitance value which determines the gate control over the channel charge',
      'Subthreshold swing (S) slope which determines the leakage current in the off state'
    ],
    correctAnswer: 1,
    hint: 'Carriers reach a maximum speed regardless of the electric field.',
    explanation: 'In short-channel devices, carriers reach their saturation velocity at relatively low Vds. This causes the drain current to become linearly dependent on Vgs (instead of quadratic), limiting gm.'
  },

  // --- Current Mirrors ---
  {
    id: 6,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'In a simple NMOS current mirror, how does the mismatch in threshold voltage (ΔVth) affect the current matching (ΔI/I)?',
    options: [
      'ΔI/I is proportional to ΔVth / (Vgs - Vth) which shows the inverse dependence on overdrive voltage',
      'ΔI/I is proportional to ΔVth * (Vgs - Vth) which shows a linear dependence on overdrive voltage',
      'ΔI/I is independent of Vgs and depends only on the physical dimensions of the transistors',
      'ΔI/I is proportional to ΔVth^2 which shows a quadratic dependence on the threshold mismatch'
    ],
    correctAnswer: 0,
    hint: 'Differentiate the saturation current equation with respect to Vth.',
    explanation: 'Current mismatch due to Vth variation is inversely proportional to the overdrive voltage (Vgs - Vth). Increasing overdrive improves matching.'
  },
  {
    id: 7,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is the main advantage of a "Low-Voltage Cascode" (Wide-Swing) current mirror over a standard cascode mirror?',
    options: [
      'Higher output impedance level which improves the current matching and reduces the error',
      'Lower minimum output voltage (headroom) allowing for larger signal swings in low voltage designs',
      'Better matching performance level between the reference and the output current branches',
      'Lower thermal noise power level which improves the signal-to-noise ratio of the circuit'
    ],
    correctAnswer: 1,
    hint: 'Think about the biasing of the cascode device gate.',
    explanation: 'By biasing the cascode device gate at Vov + Vgs instead of Vgs + Vgs, the output can swing down to 2*Vov while keeping both devices in saturation.'
  },
  {
    id: 8,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the primary advantage of a Cascode Current Mirror over a simple Current Mirror?',
    options: [
      'Lower minimum output voltage (headroom) which is critical for low voltage operation',
      'Higher output impedance level which improves current matching and reduces sensitivity to Vds',
      'Lower power consumption level which is important for battery operated portable devices',
      'Simpler layout design pattern which reduces the parasitic effects and the silicon area'
    ],
    correctAnswer: 1,
    hint: 'Consider the small-signal resistance looking into the drain of the output transistor.',
    explanation: 'A cascode current mirror significantly increases the output impedance (by a factor of approximately gm*ro), which improves current matching and reduces sensitivity to output voltage variations.'
  },
  {
    id: 9,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the main drawback of using a Wilson Current Mirror in a low-voltage CMOS process?',
    options: [
      'Poor matching performance level due to the asymmetry in the current mirror branches',
      'Low output impedance level which makes the current sensitive to the output voltage',
      'High voltage headroom requirement due to the multiple Vgs drops in the feedback path',
      'High thermal noise power level which degrades the performance of sensitive analog blocks'
    ],
    correctAnswer: 2,
    hint: 'Count the number of Vgs drops required at the output node.',
    explanation: 'The Wilson current mirror requires a higher output voltage (typically 2*Vgs or Vgs + Vov) to keep all transistors in saturation, which is problematic in modern low-voltage processes.'
  },

  // --- Differential Pairs ---
  {
    id: 10,
    category: 'Differential Pairs',
    difficulty: 'Medium',
    text: 'For a CMOS differential pair with a resistive load, what is the effect of increasing the tail current on the differential-mode gain (Ad)?',
    options: [
      'Ad increases significantly due to the transconductance gm being proportional to the square root of the tail current',
      'Ad decreases significantly due to the reduction in the output resistance of the input transistors at higher currents',
      'Ad remains constant level because the increase in transconductance is balanced by the decrease in output resistance',
      'Ad becomes exactly zero because the differential signals cancel each other out at the output of the amplifier stage'
    ],
    correctAnswer: 0,
    hint: 'Ad = gm * Rd. How does gm change with Id?',
    explanation: 'Since gm is proportional to sqrt(Id) in saturation, increasing the tail current increases the transconductance of the input pair, thus increasing the gain.'
  },
  {
    id: 11,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'Which factor is the dominant contributor to the input offset voltage of a CMOS differential pair with an active load?',
    options: [
      'Gate-source voltage mismatch of the input pair which creates a direct input-referred offset voltage',
      'Threshold voltage mismatch of the active load which is referred back to the input by the gm ratio',
      'W/L mismatch of the input pair which causes current imbalance and thus an input-referred offset',
      'All of the above factors including Vth and W/L mismatches in both input and load devices'
    ],
    correctAnswer: 3,
    hint: 'Offset is a combination of mismatch in both the input devices and the load.',
    explanation: 'The total input-referred offset includes contributions from the input transistors (Vth and W/L mismatch) and the load transistors (referred back to the input by the ratio of transconductances).'
  },
  {
    id: 12,
    category: 'Differential Pairs',
    difficulty: 'Medium',
    text: 'In a CMOS differential pair with a tail current source, what happens to the common-mode gain if the tail current source impedance is increased?',
    options: [
      'Increases due to the higher impedance path for the common-mode signals at the tail node of the pair',
      'Decreases which improves the common-mode rejection ratio (CMRR) of the amplifier',
      'Stays the same regardless of the impedance of the tail current source in the differential pair',
      'Becomes infinite because the tail current source acts as an open circuit for all common-mode signals'
    ],
    correctAnswer: 1,
    hint: 'Common-mode rejection ratio (CMRR) is the ratio of differential gain to common-mode gain.',
    explanation: 'Increasing the tail current source impedance reduces the common-mode gain, thereby improving the Common-Mode Rejection Ratio (CMRR).'
  },

  // --- Amplifiers ---
  {
    id: 13,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'In a Common-Source amplifier with source degeneration, what is the primary benefit of the degeneration resistor?',
    options: [
      'Increased voltage gain due to the higher effective load resistance seen by the input transistor',
      'Improved circuit linearity by providing local negative feedback to the transconductance stage',
      'Reduced output impedance which allows the amplifier to drive heavier loads more effectively',
      'Increased thermal noise power level due to the addition of the physical degeneration resistor'
    ],
    correctAnswer: 1,
    hint: 'Feedback reduces the dependence of gain on the non-linear gm.',
    explanation: 'Source degeneration provides local negative feedback, which linearizes the transconductance at the cost of reduced gain.'
  },
  {
    id: 14,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'What is the "Gain-Bandwidth Product" (GBW) of a single-pole Op-Amp with transconductance gm and compensation capacitor Cc?',
    options: [
      'gm / Cc which represents the ratio of transconductance to the compensation capacitance value',
      'gm * Cc which represents the product of transconductance and the compensation capacitance value',
      '1 / (gm * Cc) which represents the inverse of the product of transconductance and capacitance',
      'gm / (2 * pi * Cc) which represents the unity-gain frequency in Hertz for a single-pole system'
    ],
    correctAnswer: 3,
    hint: 'GBW = unity-gain frequency in Hz.',
    explanation: 'The unity-gain frequency (f_u) is given by gm / (2 * pi * Cc). This is a fundamental metric for Op-Amp speed.'
  },
  {
    id: 15,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a folded-cascode Op-Amp, what is the primary reason for "folding" the signal path?',
    options: [
      'To increase the gain by stacking more transistors in the signal path of the amplifier stage',
      'To allow the input common-mode range to include one of the supply rails by using opposite type transistors',
      'To reduce power consumption by sharing the bias current between the input and the cascode stages',
      'To improve the slew rate by providing more current to charge and discharge the compensation capacitor'
    ],
    correctAnswer: 1,
    hint: 'Compare the input stage of a standard cascode vs. a folded cascode.',
    explanation: 'Folding the signal path using transistors of the opposite type (e.g., PMOS input to NMOS cascode) allows the input common-mode range to extend to (and even beyond) one of the power supply rails.'
  },

  // --- Frequency Response ---
  {
    id: 16,
    category: 'Frequency Response',
    difficulty: 'Medium',
    text: 'In a two-stage Op-Amp, where is the "Dominant Pole" typically located?',
    options: [
      'At the input of the first stage where the source resistance and input capacitance form a pole',
      'At the output of the first stage (Miller) where the effective capacitance is significantly multiplied',
      'At the output of the second stage where the load capacitance and output resistance form a pole',
      'At the power supply rail node where the decoupling capacitors and parasitic inductances form a pole'
    ],
    correctAnswer: 1,
    hint: 'Miller compensation multiplies the capacitance at this node.',
    explanation: 'Miller compensation creates a very large effective capacitance at the output of the first stage, pushing its pole to a very low frequency.'
  },
  {
    id: 17,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'A Right-Half-Plane (RHP) zero in a Miller-compensated Op-Amp is caused by:',
    options: [
      'The feedforward path through the compensation capacitor which bypasses the inverting second stage',
      'The feedback path through the compensation capacitor which provides the necessary frequency compensation',
      'The load capacitance which interacts with the output resistance of the second stage to form a pole',
      'The input capacitance which interacts with the source resistance to form a pole at the input node'
    ],
    correctAnswer: 0,
    hint: 'Signal can travel from input to output directly through the capacitor.',
    explanation: 'At high frequencies, the signal passes directly through Cc to the output. Since the second stage is inverting, this feedforward signal has the opposite phase of the amplified signal, creating a RHP zero.'
  },

  // --- Stability ---
  {
    id: 18,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is the minimum Phase Margin required for a system to be considered "critically damped" (no ringing in step response)?',
    options: [
      '45 degrees of phase margin which provides a good balance between speed and stability in most cases',
      '60 degrees of phase margin which is often targeted for a well-behaved transient response with no overshoot',
      '76 degrees of phase margin which corresponds to a damping factor of exactly one for a second order system',
      '90 degrees of phase margin which ensures a perfectly stable system with a very slow transient response'
    ],
    correctAnswer: 2,
    hint: 'Think about the relationship between phase margin and damping factor zeta.',
    explanation: 'A phase margin of approximately 76 degrees corresponds to a damping factor of 1 (critically damped). 60 degrees is often the practical target for a good balance of speed and stability.'
  },
  {
    id: 19,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'In a feedback system, if the loop gain magnitude is 1 and the phase is -180 degrees, the system will:',
    options: [
      'Be stable because the loop gain is not high enough to sustain oscillations at that frequency',
      'Oscillate according to the Barkhausen stability criterion for feedback systems in the frequency domain',
      'Have infinite gain because the feedback becomes positive and reinforces the input signal indefinitely',
      'Be over-damped in its transient response because the phase margin is large enough to prevent ringing'
    ],
    correctAnswer: 1,
    hint: 'This is the Barkhausen criterion for oscillation.',
    explanation: 'If the loop gain is 1 at a phase of -180 degrees, the feedback becomes positive and the system will oscillate at that frequency.'
  },

  // --- Noise ---
  {
    id: 20,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'The thermal noise power spectral density of a resistor R is given by:',
    options: [
      '4kT noise density which represents the thermal noise power spectral density in terms of temperature',
      '4kTR noise density which represents the voltage noise power spectral density for a resistor of value R',
      '4kT/R noise density which represents the current noise power spectral density for a resistor of value R',
      'sqrt(4kTR) noise density which represents the root-mean-square noise voltage in a one Hertz bandwidth'
    ],
    correctAnswer: 1,
    hint: 'Units are V^2/Hz.',
    explanation: 'The voltage noise density is 4kTR. The current noise density is 4kT/R.'
  },
  {
    id: 21,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'To minimize the input-referred noise of a CMOS differential pair, should you increase or decrease the transconductance (gm) of the input transistors?',
    options: [
      'Increase gm which reduces the input-referred thermal noise voltage by a factor of 1/gm',
      'Decrease gm which increases the input-referred thermal noise voltage by a factor of 1/gm',
      'gm has no effect on noise performance because the noise is determined by the load resistors',
      'Set gm to zero which effectively eliminates all noise but also eliminates the signal gain'
    ],
    correctAnswer: 0,
    hint: 'Input-referred noise voltage squared is proportional to 1/gm.',
    explanation: 'The input-referred noise voltage is v_n^2 = 4kT * (2/3) / gm (for thermal noise). Increasing gm reduces the input-referred noise.'
  },

  // --- Layout ---
  {
    id: 22,
    category: 'Layout',
    difficulty: 'Easy',
    text: 'What is the purpose of a "Guard Ring" in CMOS layout?',
    options: [
      'To increase transistor speed by reducing the parasitic capacitance of the source and drain',
      'To reduce substrate coupling and prevent latch-up by providing a low-impedance path for substrate currents',
      'To act as a heat sink that dissipates the thermal energy generated by high power transistors',
      'To provide a low-resistance gate path that reduces the RC delay of the input signal'
    ],
    correctAnswer: 1,
    hint: 'Think about isolating sensitive analog blocks from noisy digital blocks.',
    explanation: 'Guard rings provide a low-impedance path to ground or Vdd for substrate currents, reducing noise coupling and preventing the parasitic thyristor action that causes latch-up.'
  },
  {
    id: 23,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'In a "Common-Centroid" layout, why are the devices cross-coupled (e.g., ABBA)?',
    options: [
      'To save area by packing the transistors more tightly together in the layout floorplan',
      'To cancel out linear gradients in process parameters by arranging devices symmetrically around a central point',
      'To reduce parasitic capacitance by minimizing the overlap area between the gate and the diffusion',
      'To increase the breakdown voltage by distributing the electric field more uniformly across the device'
    ],
    correctAnswer: 1,
    hint: 'Imagine a doping gradient across the wafer.',
    explanation: 'By arranging devices symmetrically around a central point, any linear variation in parameters (like oxide thickness) is averaged out between the two matched devices.'
  },

  // --- Biasing ---
  {
    id: 24,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is the primary characteristic of a "Proportional to Absolute Temperature" (PTAT) current source?',
    options: [
      'Its current is constant over temperature which is achieved by using a zero-TC reference circuit',
      'Its current increases linearly with temperature which is used to cancel the negative temperature coefficient of Vbe',
      'Its current decreases linearly with temperature which is known as a CTAT characteristic in biasing',
      'Its current is zero at room temperature and only starts to flow at extremely high temperatures'
    ],
    correctAnswer: 1,
    hint: 'PTAT = Proportional to Absolute Temperature.',
    explanation: 'A PTAT current is generated by the difference in Vbe of two bipolar transistors (or Vgs of MOSFETs in subthreshold) and is used in bandgap references to cancel the negative temperature coefficient of Vbe.'
  },
  {
    id: 25,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A Bandgap Reference circuit typically targets an output voltage of approximately:',
    options: [
      '0.7 V which is the typical forward voltage drop of a silicon diode at room temperature',
      '1.2 V which corresponds to the bandgap of silicon extrapolated to zero Kelvin',
      '2.5 V which is a common supply voltage for many industrial and automotive CMOS processes',
      'Vdd / 2 which represents the mid-rail voltage for maximum signal swing in differential circuits'
    ],
    correctAnswer: 1,
    hint: 'This corresponds to the bandgap of silicon extrapolated to 0 K.',
    explanation: 'A standard bandgap reference combines a PTAT voltage and a CTAT voltage (Vbe) to produce a temperature-independent voltage of ~1.2V, which is the bandgap of silicon.'
  },

  // --- More Questions ---
  {
    id: 26,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the main advantage of a "Source Follower" (Common-Drain) amplifier?',
    options: [
      'High voltage gain which is necessary for amplifying small signals in the first stage',
      'High input impedance and low output impedance which makes it an ideal voltage buffer stage',
      'High output swing which allows the signal to reach close to the supply rails without clipping',
      'Low power consumption which is achieved by operating the transistor in the subthreshold region'
    ],
    correctAnswer: 1,
    hint: 'It acts as a voltage buffer.',
    explanation: 'The source follower has a voltage gain of slightly less than 1, but its high input impedance and low output impedance make it an excellent buffer.'
  },
  {
    id: 27,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is "Channel Length Modulation" (CLM) analogous to in a BJT?',
    options: [
      'Early Effect which describes the base-width modulation in bipolar junction transistors',
      'Miller Effect which describes the multiplication of the feedback capacitance by the gain',
      'Kirk Effect which describes the base push-out at high current densities in bipolar transistors',
      'Webster Effect which describes the reduction of the current gain at high injection levels'
    ],
    correctAnswer: 0,
    hint: 'Both involve the shortening of the effective control region as output voltage increases.',
    explanation: 'CLM in MOSFETs is the shortening of the inversion layer as Vds increases, similar to the Early Effect in BJTs where the base width narrows as Vce increases.'
  },
  {
    id: 28,
    category: 'Frequency Response',
    difficulty: 'Medium',
    text: 'What is the "Unity-Gain Frequency" (f_T) of a MOSFET?',
    options: [
      'The frequency where voltage gain is 1 and the amplifier can no longer provide amplification',
      'The frequency where current gain is 1 and the transistor reaches its intrinsic speed limit',
      'The frequency where power gain is 1 and the device can no longer deliver power to the load',
      'The maximum frequency of oscillation where the device can still sustain a periodic signal'
    ],
    correctAnswer: 1,
    hint: 'f_T = gm / (2 * pi * (Cgs + Cgd)).',
    explanation: 'f_T is the frequency at which the small-signal current gain of the transistor drops to unity. It is a measure of the intrinsic speed of the device.'
  },
  {
    id: 29,
    category: 'Noise',
    difficulty: 'Easy',
    text: 'Which type of noise is caused by the discrete nature of electric charge?',
    options: [
      'Thermal noise which is caused by the random thermal motion of carriers in a conductor',
      'Shot noise which arises from the random crossing of carriers over a potential barrier',
      'Flicker noise which is caused by the trapping and de-trapping of carriers at the interface',
      'Burst noise which is caused by the presence of heavy metal ion contaminants in the lattice'
    ],
    correctAnswer: 1,
    hint: 'It is dominant in junctions with a potential barrier.',
    explanation: 'Shot noise arises from the fact that current is composed of individual electrons crossing a barrier at random times.'
  },
  {
    id: 30,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Antenna Effect" in CMOS fabrication?',
    options: [
      'The ability of the chip to receive radio signals from external sources through the package',
      'Charge accumulation on metal wires during plasma etching that can damage gate oxides through electrostatic discharge',
      'The radiation of heat from the chip through the metal interconnects to the surrounding environment',
      'The coupling between adjacent metal layers which can cause crosstalk and signal integrity issues'
    ],
    correctAnswer: 1,
    hint: 'It occurs during the manufacturing process, not during operation.',
    explanation: 'During plasma etching, long metal wires can act as antennas, collecting ions. If connected to a gate, this charge can build up and break down the thin gate oxide.'
  },
  {
    id: 31,
    category: 'Biasing',
    difficulty: 'Easy',
    text: 'A "Start-up Circuit" is required in a self-biasing reference because:',
    options: [
      'The circuit is too slow and cannot respond to fast changes in the supply voltage',
      'The circuit has a stable "zero-current" state that it might get stuck in without an external kick',
      'To protect against overvoltage conditions that could damage the sensitive analog components',
      'To reduce noise by filtering out high-frequency components from the bias current source'
    ],
    correctAnswer: 1,
    hint: 'The circuit needs a "kick" to start conducting.',
    explanation: 'Many self-biased circuits have two stable operating points: the desired one and one where all currents are zero. A start-up circuit ensures it reaches the desired state.'
  },
  {
    id: 32,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'Which amplifier topology has the highest output impedance?',
    options: [
      'Common-Source which provides a moderate output impedance determined by the drain resistance',
      'Common-Drain which has a very low output impedance making it suitable for driving loads',
      'Cascode which increases the output resistance by a factor of approximately gm times ro',
      'Differential Pair which has an output impedance similar to the common-source configuration'
    ],
    correctAnswer: 2,
    hint: 'Cascode "shields" the output from the input.',
    explanation: 'The cascode topology increases the output impedance by a factor of approximately (gm * ro) of the cascode device.'
  },
  {
    id: 33,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the "Gate-Induced Drain Leakage" (GIDL)?',
    options: [
      'Leakage through the gate oxide layer due to the high electric field across the thin insulator',
      'Leakage from drain to substrate due to high field under the gate overlap region in the device',
      'Leakage from source to drain in subthreshold region when the gate voltage is below threshold',
      'Leakage due to cosmic rays striking the silicon lattice and creating electron-hole pairs'
    ],
    correctAnswer: 1,
    hint: 'It occurs when Vg is low and Vd is high.',
    explanation: 'GIDL is a leakage current that occurs in the gate-drain overlap region when a high field causes band-to-band tunneling in the substrate.'
  },
  {
    id: 34,
    category: 'Frequency Response',
    difficulty: 'Medium',
    text: 'The "Bode Plot" of a first-order system shows a phase shift of ____ at the corner frequency.',
    options: [
      '0 degrees of phase shift which means the output is perfectly in phase with the input signal',
      '-45 degrees of phase shift which occurs at the frequency where the gain drops by three decibels',
      '-90 degrees of phase shift which is the asymptotic phase shift for a single-pole system at high freq',
      '-180 degrees of phase shift which would represent a complete inversion of the input signal phase'
    ],
    correctAnswer: 1,
    hint: 'Phase = -arctan(f/fc).',
    explanation: 'At the corner frequency (f = fc), the phase shift of a single-pole system is -45 degrees.'
  },
  {
    id: 35,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'Why does a "Zero" in the transfer function increase the phase?',
    options: [
      'It adds +90 degrees of phase shift (for a LHP zero) which can improve the stability margin',
      'It subtracts 90 degrees of phase shift (for a RHP zero) which can degrade the stability margin',
      'It has no effect on phase and only affects the magnitude of the transfer function at high freq',
      'It makes the system oscillate by providing positive feedback at the frequency of the zero'
    ],
    correctAnswer: 0,
    hint: 'Zeros "lead" the phase, poles "lag" the phase.',
    explanation: 'A Left-Half-Plane (LHP) zero increases the phase by 90 degrees over a decade, which can be used to compensate for the phase lag of poles.'
  },
  {
    id: 36,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'To improve the "Compliance Voltage" of a current mirror, should you use a standard cascode or a low-voltage cascode?',
    options: [
      'Standard cascode which provides the highest output impedance but requires more voltage headroom',
      'Low-voltage cascode which allows for a wider output swing while maintaining high impedance',
      'Neither because the compliance voltage is determined solely by the supply voltage of the circuit',
      'A simple mirror which has the lowest headroom requirement but also the lowest output impedance'
    ],
    correctAnswer: 1,
    hint: 'Compliance voltage is the range over which the mirror works.',
    explanation: 'A low-voltage (wide-swing) cascode allows the output to go lower (closer to ground) while staying in saturation, thus increasing the compliance range.'
  },
  {
    id: 37,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'The "Body Effect" coefficient (gamma) depends on:',
    options: [
      'Substrate doping concentration which determines the depletion region width and the charge',
      'Channel length which affects the short-channel effects but not the intrinsic body coefficient',
      'Drain voltage which affects the channel length modulation but not the body effect coefficient',
      'Gate width which determines the total current but has no impact on the threshold voltage shift'
    ],
    correctAnswer: 0,
    hint: 'Gamma = sqrt(2 * q * epsilon_si * Nsub) / Cox.',
    explanation: 'The body effect is directly related to the doping level of the substrate (Nsub). Higher doping leads to a stronger body effect.'
  },
  {
    id: 38,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Class AB" output stage, the purpose of the biasing diodes (or Vbe multiplier) is to:',
    options: [
      'Increase gain by providing additional transconductance to the output stage of the amplifier',
      'Eliminate crossover distortion by keeping the output transistors slightly conducting at all times',
      'Reduce power consumption by minimizing the quiescent current flowing through the output stage',
      'Increase bandwidth by reducing the parasitic capacitances at the output node of the circuit'
    ],
    correctAnswer: 1,
    hint: 'It keeps the output transistors slightly "on" even with no signal.',
    explanation: 'By providing a small quiescent current, the biasing network ensures that one transistor starts conducting before the other turns off, eliminating the "dead zone" known as crossover distortion.'
  },
  {
    id: 39,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'Which MOSFET noise source can be reduced by increasing the gate area (W * L)?',
    options: [
      'Thermal noise which is caused by the random thermal motion of carriers in the channel resistance',
      'Flicker noise (1/f) which is caused by the trapping and de-trapping of carriers at the interface',
      'Shot noise which arises from the discrete nature of the carriers crossing the potential barrier',
      'White noise which has a constant power spectral density across the entire frequency spectrum'
    ],
    correctAnswer: 1,
    hint: 'Flicker noise is inversely proportional to Area.',
    explanation: 'Flicker noise is caused by surface traps. Increasing the area averages out the effect of these traps, reducing the noise power.'
  },
  {
    id: 40,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "STI Stress" in sub-micron CMOS layout?',
    options: [
      'The stress of meeting a deadline which is a common psychological factor in integrated circuit design',
      'Mechanical stress from Shallow Trench Isolation that changes carrier mobility and threshold voltage',
      'Electrical stress from high voltage that can lead to gate oxide breakdown and device failure',
      'Thermal stress from the package that can cause mechanical deformation of the silicon die'
    ],
    correctAnswer: 1,
    hint: 'It depends on the distance from the transistor to the isolation edge.',
    explanation: 'The mechanical stress exerted by the STI oxide on the silicon channel changes the mobility and Vth of the transistor, a phenomenon known as the Well Proximity Effect or LOD (Length of Diffusion) effect.'
  },
  {
    id: 41,
    category: 'Differential Pairs',
    difficulty: 'Medium',
    text: 'What is the "Common-Mode Input Range" (ICMR) of a differential pair?',
    options: [
      'The range of input voltages where the gain is maximum and the distortion is minimized',
      'The range of input voltages where all transistors remain in saturation and operate correctly',
      'The range of output voltages that the amplifier can swing without clipping the signal',
      'The supply voltage range over which the circuit can operate without exceeding the ratings'
    ],
    correctAnswer: 1,
    hint: 'Inputs must not push the tail source or the input pair into triode/cutoff.',
    explanation: 'ICMR is the range of common-mode input voltages for which the amplifier operates correctly (i.e., all devices are in saturation).'
  },
  {
    id: 42,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Velocity Overshoot"?',
    options: [
      'Carriers moving faster than light which is physically impossible according to relativity',
      'Carriers temporarily exceeding their steady-state saturation velocity in very short channels',
      'The gate voltage exceeding Vdd which can happen during transient switching events in digital',
      'The drain current exceeding its limit which can lead to thermal runaway and device destruction'
    ],
    correctAnswer: 1,
    hint: 'It occurs when the channel is shorter than the mean free path.',
    explanation: 'In extremely short channels, carriers can travel ballistically for a short distance, exceeding the saturation velocity before they undergo scattering.'
  },
  {
    id: 43,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Power Supply Rejection Ratio" (PSRR)?',
    options: [
      'The ratio of output power to input power which represents the efficiency of the amplifier',
      'The ability of the amplifier to reject noise from the power supply and keep the output clean',
      'The maximum supply voltage that the circuit can tolerate before the transistors break down',
      'The power consumption of the circuit which is an important metric for portable applications'
    ],
    correctAnswer: 1,
    hint: 'PSRR = Gain_signal / Gain_supply_noise.',
    explanation: 'PSRR measures how much of the power supply ripple or noise appears at the output. High PSRR is critical for analog circuits in noisy environments.'
  },
  {
    id: 44,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Chopper Stabilization"?',
    options: [
      'A way to cool the chip by using high-speed fans or liquid cooling systems in the package',
      'A technique to remove DC offset and 1/f noise by modulating the signal to a higher frequency',
      'A method to increase power by combining multiple amplifier stages in a parallel configuration',
      'A type of layout that uses interdigitated fingers to improve matching between transistors'
    ],
    correctAnswer: 1,
    hint: 'It involves "chopping" the input signal.',
    explanation: 'Chopping modulates the signal to a high frequency, amplifies it, and then demodulates it. This pushes the DC offset and low-frequency noise (1/f) out of the signal band.'
  },
  {
    id: 45,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is the "Well Proximity Effect" (WPE)?',
    options: [
      'The effect of the supply voltage on the well potential and the resulting threshold shift',
      'The shift in Vth due to ions scattering off the photoresist edge during well implantation',
      'The coupling between two adjacent wells which can lead to crosstalk and latch-up issues',
      'The breakdown of the well-substrate junction due to high electric fields at the well edge'
    ],
    correctAnswer: 1,
    hint: 'It depends on how close the transistor is to the edge of the N-well or P-well.',
    explanation: 'WPE causes transistors near the well edge to have different threshold voltages than those in the center, requiring careful layout for matched pairs.'
  },
  {
    id: 46,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'In a "Widlar Current Source", the resistor is placed in the ____ of the output transistor.',
    options: [
      'Gate node where it can be used to provide a DC bias voltage to the input transistor',
      'Source node where it creates a voltage drop that reduces the effective Vgs of the device',
      'Drain node where it acts as a resistive load for the current source in the amplifier stage',
      'Body node where it can be used to adjust the threshold voltage through the body effect'
    ],
    correctAnswer: 1,
    hint: 'It uses local feedback to reduce the output current.',
    explanation: 'The Widlar source uses a resistor in the source of the output transistor to create a Vgs difference, allowing for very small output currents with reasonable resistor values.'
  },
  {
    id: 47,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'In a "Cascode" amplifier, the input transistor is usually a ____ and the cascode transistor is a ____.',
    options: [
      'Common-Source, Common-Gate which is the standard configuration for a cascode amplifier stage',
      'Common-Gate, Common-Source which is a less common configuration that has different properties',
      'Common-Source, Common-Drain which combines a gain stage with a voltage buffer output stage',
      'Common-Drain, Common-Source which combines a buffer input with a gain stage at the output'
    ],
    correctAnswer: 0,
    hint: 'CS-CG stack.',
    explanation: 'The standard cascode is a Common-Source stage followed by a Common-Gate stage. The CG stage provides a low-impedance load to the CS stage, minimizing Miller effect.'
  },
  {
    id: 48,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the "Output Compliance" of a current mirror?',
    options: [
      'The accuracy of the current ratio between the reference and the output branches of the mirror',
      'The range of output voltage over which the mirror maintains high impedance and stays in saturation',
      'The temperature stability of the output current over a wide range of operating conditions in the field',
      'The power consumption of the current mirror circuit which is important for low power applications'
    ],
    correctAnswer: 1,
    hint: 'It defines the "flat" region of the I-V curve.',
    explanation: 'Compliance voltage is the minimum voltage required at the output node to keep the mirror transistors in the saturation region.'
  },
  {
    id: 49,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'How does a "Slew Rate" limitation manifest in a differential amplifier?',
    options: [
      'As a frequency-dependent gain that reduces the amplification of high frequency input signals',
      'As a maximum rate of change of the output voltage when a large step is applied to the input',
      'As an increase in noise power spectral density at high frequencies due to the tail current source',
      'As a decrease in CMRR because the tail current source cannot respond quickly to common-mode steps'
    ],
    correctAnswer: 1,
    hint: 'It is limited by the tail current charging the compensation capacitor.',
    explanation: 'When a large input step is applied, the entire tail current is diverted to one side, charging the internal capacitors at a constant maximum rate (I_tail / C).'
  },
  {
    id: 50,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Early Voltage" (V_A) in a MOSFET?',
    options: [
      'The voltage at which the device turns on and starts to conduct current in the inversion region',
      'The extrapolated intercept of the I-V curves on the Vds axis which represents the CLM effect',
      'The breakdown voltage of the drain-substrate junction which limits the maximum operating voltage',
      'The supply voltage of the circuit which determines the maximum signal swing and the power consumption'
    ],
    correctAnswer: 1,
    hint: 'It is a measure of channel length modulation.',
    explanation: 'V_A = 1 / lambda. It represents how much the drain current increases with Vds due to channel length modulation.'
  },
  {
    id: 51,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'What is "Neutralization" in high-frequency amplifier design?',
    options: [
      'Turning off the circuit to save power when the amplifier is not actively processing a signal',
      'Using a feedback path to cancel out the effect of Cgd and improve the stability of the stage',
      'Grounding the substrate to reduce the noise coupling between the digital and analog blocks',
      'Reducing the supply voltage to minimize the power consumption and the heat generation of the chip'
    ],
    correctAnswer: 1,
    hint: 'It is used to improve stability and reverse isolation.',
    explanation: 'Neutralization involves adding a feedback path (often with a capacitor) that provides a signal of equal magnitude but opposite phase to the Cgd feedforward, canceling its effect.'
  },
  {
    id: 52,
    category: 'Stability',
    difficulty: 'Easy',
    text: 'A "Unity-Gain Buffer" is an amplifier with a gain of:',
    options: [
      'Zero which means the output voltage is always zero regardless of the input signal level applied',
      'One which means the output voltage follows the input voltage with a gain of exactly unity',
      'Infinite which means the output voltage saturates to the supply rails for any non-zero input',
      'Minus one which means the output voltage is an inverted version of the input voltage signal'
    ],
    correctAnswer: 1,
    hint: 'Unity = 1.',
    explanation: 'A unity-gain buffer (like a source follower) replicates the input voltage at the output with high current drive.'
  },
  {
    id: 53,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is the "Noise Figure" (NF) of an amplifier?',
    options: [
      'The total noise at the output of the amplifier in a specified frequency bandwidth of interest',
      'The ratio of input SNR to output SNR which measures the noise degradation of the amplifier',
      'The gain of the noise as it passes through the amplifier from the input to the output node',
      'The temperature of the noise source which is related to the thermal energy of the carriers'
    ],
    correctAnswer: 1,
    hint: 'It measures how much the amplifier degrades the signal quality.',
    explanation: 'Noise Figure is a measure of the degradation in signal-to-noise ratio as a signal passes through a system.'
  },
  {
    id: 54,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is the "Latch-up" phenomenon in CMOS?',
    options: [
      'The chip getting stuck in a loop due to a software error or a logic race condition in the design',
      'The formation of a low-impedance path between Vdd and Gnd due to parasitic bipolar transistors',
      'The gate oxide breaking down due to an electrostatic discharge event during the handling of the chip',
      'The metal wires melting due to excessive current density and the resulting joule heating effect'
    ],
    correctAnswer: 1,
    hint: 'It involves parasitic PNPN structures.',
    explanation: 'Latch-up is a parasitic thyristor effect in CMOS where a PNPN structure is triggered, creating a short circuit between power rails.'
  },
  {
    id: 55,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "Cascode Current Source" provides higher output impedance by a factor of approximately:',
    options: [
      'gm which is the transconductance of the cascode transistor in the current source circuit',
      'ro which is the output resistance of the cascode transistor in the current source circuit',
      'gm * ro which is the intrinsic gain of the cascode transistor that boosts the impedance',
      '1 / gm which is the transconductance of the cascode transistor in the current source circuit'
    ],
    correctAnswer: 2,
    hint: 'It is the product of the transconductance and the output resistance.',
    explanation: 'The cascode transistor "boosts" the output impedance of the bottom transistor by its intrinsic gain (gm * ro).'
  },
  {
    id: 56,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Two-Stage" Op-Amp, the first stage usually provides ____ and the second stage provides ____.',
    options: [
      'High gain, high swing which allows the Op-Amp to achieve high precision and large output signals',
      'High swing, high gain which is a less common configuration that has different design trade-offs',
      'Low gain, low swing which would result in a very poor performance for a general purpose Op-Amp',
      'High noise, low noise which would be a very undesirable characteristic for any analog circuit'
    ],
    correctAnswer: 0,
    hint: 'The first stage is usually a differential pair.',
    explanation: 'The first stage (diff-pair) provides most of the voltage gain, while the second stage (common-source) provides the output voltage swing.'
  },
  {
    id: 57,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Sub-threshold Swing" (S) limit at room temperature?',
    options: [
      '20 mV/dec which is much lower than the theoretical limit for a MOSFET at room temperature',
      '60 mV/dec which is the theoretical limit at room temperature for an ideal MOSFET device',
      '100 mV/dec which is a typical value for a real MOSFET with non-zero depletion capacitance',
      '0 mV/dec which would mean the transistor turns on and off instantly with no gate voltage change'
    ],
    correctAnswer: 1,
    hint: 'It is determined by the Boltzmann constant.',
    explanation: 'The theoretical limit for subthreshold swing is ~60 mV/decade at room temperature (300K).'
  },
  {
    id: 58,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'What is the "Gain Margin" in a feedback system?',
    options: [
      'The amount of gain at 0 degrees phase which is not a standard metric for stability analysis',
      'The amount of gain reduction needed to reach instability when the phase is -180 degrees',
      'The maximum gain of the amplifier which is limited by the supply voltage and the bias current',
      'The gain at DC which determines the steady-state error of the feedback system in operation'
    ],
    correctAnswer: 1,
    hint: 'It measures how far the system is from oscillation in terms of gain.',
    explanation: 'Gain margin is the reciprocal of the loop gain magnitude at the frequency where the phase is -180 degrees.'
  },
  {
    id: 59,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'A "Lead Compensator" adds a ____ and a ____ to the loop gain.',
    options: [
      'Pole, Zero which would create a phase lag instead of a phase lead in the frequency response',
      'Zero, Pole which provides a phase boost by placing the zero at a lower frequency than the pole',
      'Two Poles which would significantly degrade the phase margin and the stability of the system',
      'Two Zeros which would provide a very large phase boost but would also increase the high freq gain'
    ],
    correctAnswer: 1,
    hint: 'The zero comes before the pole in frequency.',
    explanation: 'A lead compensator adds a zero at a lower frequency and a pole at a higher frequency to provide a phase "boost" in the signal band.'
  },
  {
    id: 60,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Correlated Double Sampling" (CDS)?',
    options: [
      'Sampling twice to increase speed which is a common technique in high-speed data converters',
      'A technique to remove offset and 1/f noise by subtracting two samples taken at different times',
      'A type of ADC architecture that uses multiple stages to achieve high resolution and low power',
      'A layout technique that uses interdigitated fingers to improve matching between matched pairs'
    ],
    correctAnswer: 1,
    hint: 'It is commonly used in image sensors and switched-capacitor circuits.',
    explanation: 'CDS samples the noise/offset first, then the signal+noise/offset, and subtracts them to cancel out the low-frequency noise components.'
  },
  {
    id: 61,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Common-Mode Rejection Ratio" (CMRR) of an ideal differential amplifier?',
    options: [
      'Zero which means the amplifier does not reject any common-mode signal at the input nodes',
      'One which means the differential gain is exactly equal to the common-mode gain of the stage',
      'Infinite which means the amplifier perfectly rejects any signal that is common to both inputs',
      '100 which is a typical value for a real differential amplifier with non-zero common-mode gain'
    ],
    correctAnswer: 2,
    hint: 'Ideal amplifiers reject all common-mode signals.',
    explanation: 'An ideal differential amplifier has infinite CMRR, meaning it perfectly rejects any signal that is common to both inputs.'
  },
  {
    id: 62,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the "Drain-Induced Barrier Lowering" (DIBL) coefficient?',
    options: [
      'Delta Vth / Delta Vds which measures the sensitivity of the threshold voltage to the drain bias',
      'Delta Id / Delta Vds which represents the output conductance of the transistor in saturation',
      'Delta Vgs / Delta Vds which represents the feedback from the drain to the gate node of the device',
      'Delta Vth / Delta Vgs which is not a standard parameter used to characterize the DIBL effect'
    ],
    correctAnswer: 0,
    hint: 'It measures the sensitivity of Vth to Vds.',
    explanation: 'DIBL is quantified as the change in threshold voltage per unit change in drain-source voltage.'
  },
  {
    id: 63,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'In a current mirror, why is it better to use a larger L for the transistors?',
    options: [
      'To increase speed by reducing the parasitic capacitances associated with the gate and drain',
      'To increase output impedance and improve matching by reducing the channel length modulation',
      'To reduce area by making the transistors as small as possible while still meeting the specs',
      'To increase power by allowing more current to flow through the transistor for a given Vgs'
    ],
    correctAnswer: 1,
    hint: 'Higher L reduces channel length modulation.',
    explanation: 'Increasing the channel length L reduces the lambda parameter, which increases the output impedance and improves the accuracy of the current mirror.'
  },
  {
    id: 64,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'What is the effect of "Tail Capacitance" on the CMRR at high frequencies?',
    options: [
      'It increases CMRR by providing a high-impedance path for the common-mode signals at high freq',
      'It decreases CMRR by providing a low-impedance path for the common-mode signals at high freq',
      'It has no effect on the CMRR because the common-mode gain is determined only by the resistors',
      'It makes CMRR zero at DC which would mean the amplifier has no common-mode rejection at all'
    ],
    correctAnswer: 1,
    hint: 'Capacitance provides a low-impedance path at high frequencies.',
    explanation: 'At high frequencies, the parasitic capacitance at the tail node provides a low-impedance path for common-mode signals, reducing the effective tail impedance and thus the CMRR.'
  },
  {
    id: 65,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'Which amplifier stage is typically used as the output stage of an Op-Amp to drive low-impedance loads?',
    options: [
      'Common-Source which provides high voltage gain but has a relatively high output impedance',
      'Common-Gate which has a low input impedance and is often used as a current buffer stage',
      'Source Follower (Common-Drain) which provides low output impedance and high current drive',
      'Cascode which provides very high output impedance and is used to increase the voltage gain'
    ],
    correctAnswer: 2,
    hint: 'It has very low output impedance.',
    explanation: 'The source follower acts as a voltage buffer, providing the necessary current drive for low-impedance loads without significantly loading the preceding high-gain stage.'
  },
  {
    id: 66,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'What is the "Miller Multiplication" factor for a capacitor Cgd in a CS amplifier with gain -A?',
    options: [
      '1 + A which represents the multiplication of the feedback capacitance by the Miller effect',
      '1 - A which would mean the effective capacitance is reduced instead of being increased',
      'A which is the magnitude of the voltage gain of the inverting amplifier stage in the circuit',
      '1 / A which would mean the effective capacitance is divided by the gain of the amplifier'
    ],
    correctAnswer: 0,
    hint: 'The effective input capacitance is Cgd * (1 - Av).',
    explanation: 'For an inverting amplifier with gain -A, the effective input capacitance due to Cgd is Cgd * (1 - (-A)) = Cgd * (1 + A).'
  },
  {
    id: 67,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'A "Lag Compensator" is used to:',
    options: [
      'Increase the bandwidth by pushing the dominant pole to a higher frequency in the response',
      'Improve the steady-state error by increasing low-frequency gain of the feedback system',
      'Add phase lead to improve the phase margin and the stability of the closed-loop system',
      'Eliminate all poles from the transfer function to achieve a perfectly flat frequency response'
    ],
    correctAnswer: 1,
    hint: 'It adds a pole at a very low frequency.',
    explanation: 'A lag compensator increases the low-frequency gain of the system, which improves accuracy (reduces steady-state error), but it typically reduces the bandwidth.'
  },
  {
    id: 68,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is the "Noise Temperature" of a system?',
    options: [
      'The physical temperature of the chip which is measured by an on-chip thermal sensor',
      'An equivalent temperature that would produce the same noise power spectral density',
      'The temperature at which the chip melts and the silicon lattice structure is destroyed',
      'The temperature of the cooling fan that is used to dissipate the heat from the package'
    ],
    correctAnswer: 1,
    hint: 'It is related to the Noise Figure.',
    explanation: 'Noise temperature is a way of expressing the noise of a system in terms of the temperature of a resistor that would produce the same noise power spectral density.'
  },
  {
    id: 69,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'Why are "Interdigitated" layouts used for matched transistors?',
    options: [
      'To save area by packing the transistors more tightly together in the layout floorplan',
      'To improve matching by interleaving the fingers of two transistors in the layout area',
      'To increase speed by reducing the parasitic capacitances of the gate and drain nodes',
      'To reduce power by allowing the transistors to operate at a lower bias current level'
    ],
    correctAnswer: 1,
    hint: 'It averages out local process variations.',
    explanation: 'Interdigitation interleaves the fingers of two transistors (e.g., ABAB), ensuring that both devices experience a similar average environment across their layout area.'
  },
  {
    id: 70,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is the "Curvature Correction" in a bandgap reference?',
    options: [
      'Correcting the layout shape to ensure that the transistors are perfectly rectangular',
      'Compensating for the non-linear temperature dependence of Vbe in the bandgap circuit',
      'Straightening the wires to minimize the parasitic inductance and the signal delay',
      'Reducing the supply voltage to minimize the power consumption and the heat generation'
    ],
    correctAnswer: 1,
    hint: 'Vbe is not perfectly linear with temperature.',
    explanation: 'The Vbe of a BJT has a T*ln(T) term that causes a non-linear "curvature" in the bandgap output. Curvature correction circuits add a non-linear term to cancel this effect.'
  },
  {
    id: 71,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Saturation Velocity" of electrons in Silicon?',
    options: [
      '10^5 cm/s which is the typical drift velocity of carriers in a low electric field',
      '10^7 cm/s which is the maximum speed limit for electrons in silicon at high fields',
      '10^9 cm/s which would mean the carriers are moving faster than the speed of light',
      'Speed of light which is the absolute speed limit for any particle in the universe'
    ],
    correctAnswer: 1,
    hint: 'It is the speed limit for carriers.',
    explanation: 'At high electric fields, the velocity of electrons in silicon saturates at approximately 10^7 cm/s due to increased scattering with the lattice.'
  },
  {
    id: 72,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Telescopic" Op-Amp, the input common-mode range is ____ compared to a folded-cascode.',
    options: [
      'Larger because the telescopic design has fewer transistors stacked in the signal path',
      'Smaller because the telescopic design has more transistors stacked in a single branch',
      'The same regardless of the amplifier topology used for the input stage of the Op-Amp',
      'Infinite which would mean the input common-mode range is not limited by the supply'
    ],
    correctAnswer: 1,
    hint: 'Telescopic designs have more transistors stacked in a single branch.',
    explanation: 'Telescopic Op-Amps have a very restricted input common-mode range because all transistors (input pair and cascodes) must remain in saturation within the available supply voltage.'
  },
  {
    id: 73,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the "Current Transfer Ratio" of a current mirror?',
    options: [
      'The ratio of output current to input current which is determined by the aspect ratios',
      'The speed of the mirror which is limited by the parasitic capacitances at the nodes',
      'The noise of the mirror which is dominated by the thermal noise of the transistors',
      'The area of the mirror which is determined by the total width and length of devices'
    ],
    correctAnswer: 0,
    hint: 'It is usually determined by the (W/L) ratios.',
    explanation: 'The current transfer ratio is the ratio of the output current to the reference input current, ideally equal to the ratio of the aspect ratios (W/L) of the two transistors.'
  },
  {
    id: 74,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'What is "Common-Mode Feedback" (CMFB) used for?',
    options: [
      'To increase differential gain by providing additional transconductance to the input pair',
      'To stabilize the output common-mode voltage in fully differential amplifiers in operation',
      'To reduce noise by filtering out the high-frequency components from the bias current source',
      'To increase bandwidth by reducing the parasitic capacitances at the output node of stage'
    ],
    correctAnswer: 1,
    hint: 'Fully differential amplifiers have high-impedance nodes that can drift.',
    explanation: 'In fully differential amplifiers, the output common-mode voltage is not well-defined by the differential feedback loop and requires a separate CMFB circuit to keep it at a desired level.'
  },
  {
    id: 75,
    category: 'Frequency Response',
    difficulty: 'Medium',
    text: 'The "Phase Margin" is measured at the frequency where the loop gain magnitude is:',
    options: [
      '0 dB (Unity) which is the frequency where the loop gain magnitude is exactly equal to one',
      'Infinite which would mean the loop gain never drops below unity regardless of frequency',
      '-180 dB which would mean the loop gain is extremely small and the system is very stable',
      '10 dB which is a common value for the loop gain in many practical feedback amplifier designs'
    ],
    correctAnswer: 0,
    hint: 'Unity gain frequency.',
    explanation: 'Phase margin is defined as 180 degrees plus the phase of the loop gain at the unity-gain frequency (where |T| = 1 or 0 dB).'
  },
  {
    id: 76,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is "Feedforward Compensation"?',
    options: [
      'Adding a path that bypasses a slow stage to improve high-frequency response of the circuit',
      'Increasing the supply voltage to provide more headroom for the signal swing in the amplifier',
      'Adding more gain by stacking more transistors in the signal path of the amplifier stage',
      'Reducing the load capacitance to increase the pole frequency and the bandwidth of the stage'
    ],
    correctAnswer: 0,
    hint: 'It creates a high-frequency path around a dominant pole.',
    explanation: 'Feedforward compensation provides a parallel path for high-frequency signals, bypassing the slow stages of the amplifier to improve speed and stability.'
  },
  {
    id: 77,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is the "Noise Floor"?',
    options: [
      'The floor of the lab which is usually made of anti-static material to protect the chips',
      'The minimum level of noise present in a system that limits the smallest detectable signal',
      'The maximum signal level that the system can handle before the output starts to clip',
      'The gain of the noise as it passes through the system from the input to the output node'
    ],
    correctAnswer: 1,
    hint: 'It limits the smallest detectable signal.',
    explanation: 'The noise floor is the level of background noise in a system, below which signals cannot be reliably detected.'
  },
  {
    id: 78,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "Electro-Migration" (EM)?',
    options: [
      'Electrons moving too fast which is a common misconception about the nature of current flow',
      'Gradual movement of ions in a conductor due to high current density which can lead to failure',
      'The chip moving on the board due to mechanical vibrations or thermal expansion of the die',
      'Magnetic interference in wires which can cause crosstalk and signal integrity issues in layout'
    ],
    correctAnswer: 1,
    hint: 'It can cause metal wires to break over time.',
    explanation: 'Electro-migration is a reliability concern where high current densities cause metal atoms to move, leading to voids (opens) or hillocks (shorts) in the interconnects.'
  },
  {
    id: 79,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "Supply-Independent" bias circuit is designed to:',
    options: [
      'Work without a battery source by using energy harvesting techniques from the environment',
      'Maintain constant output current regardless of variations in Vdd by using self-biasing loops',
      'Increase total power consumption by allowing more current to flow through the bias network',
      'Reduce total circuit area by using smaller transistors and fewer resistors in the design'
    ],
    correctAnswer: 1,
    hint: 'It uses self-biasing techniques.',
    explanation: 'Supply-independent biasing ensures that the performance of the analog blocks remains stable even if the power supply voltage fluctuates.'
  },
  {
    id: 80,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Hot Carrier Injection" (HCI)?',
    options: [
      'Injecting hot coffee into chip which is a humorous but physically impossible scenario in lab',
      'High-energy carriers damaging the gate oxide near the drain by being injected into dielectric',
      'The chip getting too warm due to excessive power dissipation and the lack of proper cooling',
      'A type of device packaging that uses high-temperature materials to improve the reliability'
    ],
    correctAnswer: 1,
    hint: 'It is a long-term reliability issue.',
    explanation: 'HCI occurs when carriers gain enough energy from the high electric field near the drain to be injected into the gate oxide, causing a shift in Vth over time.'
  },
  {
    id: 81,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Slew Rate" of an Op-Amp?',
    options: [
      'The maximum output voltage level that the Op-Amp can reach before the output stage clips',
      'The maximum rate of change of the output voltage which is often limited by internal bias',
      'The total gain of the amplifier stage which determines the precision of the feedback loop',
      'The total bandwidth of the circuit which determines the speed of the signal processing'
    ],
    correctAnswer: 1,
    hint: 'Units are V/us.',
    explanation: 'Slew rate is the maximum speed at which the output of an Op-Amp can change, usually limited by the internal charging of capacitors.'
  },
  {
    id: 82,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'In a "High-Swing" cascode mirror, the bias voltage for the cascode gate is typically set to:',
    options: [
      'Vgs + Vov which allows the output to swing down to two overdrive voltages in saturation',
      '2 * Vgs which is a common bias voltage for standard cascode mirrors in many CMOS designs',
      'Vdd which is the positive supply voltage of the circuit and provides the maximum headroom',
      'Vgs which is the gate-source voltage of the bottom transistor in the current mirror stack'
    ],
    correctAnswer: 0,
    hint: 'It allows the output to swing down to 2 * Vov.',
    explanation: 'By setting the cascode gate to Vgs + Vov, the bottom transistor is kept at the edge of saturation (Vds = Vov), maximizing the output swing.'
  },
  {
    id: 83,
    category: 'Differential Pairs',
    difficulty: 'Medium',
    text: 'What is the "Differential-Mode Input Range"?',
    options: [
      'The range of common-mode levels at the input nodes for which the amplifier works correctly',
      'The range of differential input voltages for which the amplifier remains linear in operation',
      'The total supply voltage range that the circuit can tolerate before the transistors fail',
      'The total output voltage range that the amplifier can provide without clipping the signal'
    ],
    correctAnswer: 1,
    hint: 'It is limited by the tail current and the input pair transconductance.',
    explanation: 'The differential input range is the maximum difference between the two inputs before one side of the differential pair turns off.'
  },
  {
    id: 84,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'What is the "Group Delay" of a filter?',
    options: [
      'Time to design the circuit which is an important factor in the project management phase',
      'The negative derivative of the phase with respect to frequency which represents the delay',
      'The total gain of the filter as a function of the frequency of the input signal applied',
      'The total bandwidth of the filter which determines the range of frequencies that pass'
    ],
    correctAnswer: 1,
    hint: 'It represents the time delay of the signal envelope.',
    explanation: 'Group delay is a measure of the time delay of the amplitude envelope of a signal as it passes through a system, important for phase-sensitive applications.'
  },
  {
    id: 85,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'A "Dominant Pole" is a pole that is:',
    options: [
      'The strongest pole in the circuit which has the largest influence on the transient response',
      'At a much lower frequency than all other poles such that it determines the system bandwidth',
      'At the highest frequency point in the response which is often related to parasitic nodes',
      'At the DC frequency point which would mean the amplifier has an infinite gain at zero freq'
    ],
    correctAnswer: 1,
    hint: 'It determines the primary bandwidth of the system.',
    explanation: 'A dominant pole is one that is significantly lower in frequency than others, such that it alone determines the roll-off and stability of the system.'
  },
  {
    id: 86,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Noise Matching" in LNA design?',
    options: [
      'Matching the noise of two devices in the layout to ensure that the offset is minimized',
      'Selecting the input source impedance to minimize the noise figure of the amplifier stage',
      'Making the total noise zero which is physically impossible due to the thermal energy',
      'Matching the gain to noise which is a trade-off that is often made in low-power designs'
    ],
    correctAnswer: 1,
    hint: 'It is different from power matching.',
    explanation: 'Noise matching involves choosing an optimum source impedance (Zopt) that results in the minimum possible noise figure for the amplifier.'
  },
  {
    id: 87,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Dummy Fill" in CMOS layout?',
    options: [
      'Filling the chip with extra devices to increase the functionality and the performance',
      'Adding non-functional metal patterns to ensure uniform metal density for CMP processing',
      'Filling the chip with extra glue to improve the mechanical stability of the package',
      'Adding extra ground pins to the chip to reduce the inductance and the ground bounce'
    ],
    correctAnswer: 1,
    hint: 'CMP = Chemical Mechanical Polishing.',
    explanation: 'Dummy fill is added to empty areas of the layout to maintain a uniform metal density, which is required for the CMP process to achieve a flat surface.'
  },
  {
    id: 88,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is the "Power-Down" mode in a bias circuit?',
    options: [
      'When the power goes out entirely due to a failure in the external power grid system',
      'A state where all currents are reduced to zero to save power when the block is inactive',
      'Reducing the supply voltage level to minimize the power consumption of the circuit',
      'Turning off the lights in the lab to save energy during the night or on the weekends'
    ],
    correctAnswer: 1,
    hint: 'It is used in mobile devices to extend battery life.',
    explanation: 'Power-down mode uses switches to cut off the bias currents, ensuring the circuit consumes near-zero power when not in use.'
  },
  {
    id: 89,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Gate Leakage" current?',
    options: [
      'Current leaking from source to drain when the transistor is in the off-state region',
      'Current tunneling through the thin gate dielectric which becomes significant in deep sub-micron',
      'Current leaking to the substrate node due to the reverse bias of the source-body junction',
      'Current leaking from the package pins to the external environment due to poor insulation'
    ],
    correctAnswer: 1,
    hint: 'It becomes significant as the gate oxide gets thinner.',
    explanation: 'In very advanced processes, the gate oxide is so thin that electrons can tunnel through it, creating a parasitic gate current.'
  },
  {
    id: 90,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Rail-to-Rail" input stage, what is the main challenge?',
    options: [
      'Keeping the gain constant as the common-mode voltage changes across the entire supply range',
      'Increasing the speed of the amplifier by reducing the parasitic capacitances at the nodes',
      'Reducing the area of the circuit by using smaller transistors and fewer resistors in design',
      'Increasing the supply voltage level to provide more headroom for the signal swing in stage'
    ],
    correctAnswer: 0,
    hint: 'It usually uses both NMOS and PMOS input pairs.',
    explanation: 'A rail-to-rail input stage must transition between NMOS and PMOS pairs (or use both), which can cause the transconductance (and thus gain) to vary across the input range.'
  },
  {
    id: 91,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the "Minimum Voltage" (Vmin) for a cascode current mirror?',
    options: [
      'Vgs which is the gate-source voltage of the bottom transistor in the current mirror stack',
      'Vov which is the overdrive voltage of the transistors in the current mirror circuit branch',
      'Vgs + Vov which is the minimum voltage required to keep both transistors in saturation',
      '2 * Vov which is a common target for the minimum output voltage in high-swing mirrors'
    ],
    correctAnswer: 2,
    hint: 'It must keep both transistors in saturation.',
    explanation: 'For a standard cascode mirror, the output must be at least Vgs + Vov to keep both the bottom and top transistors saturated.'
  },
  {
    id: 92,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'What is the "Dynamic Range" of an amplifier?',
    options: [
      'The range of frequencies in the circuit for which the gain is above a certain threshold',
      'The ratio of the maximum undistorted signal to the noise floor of the system in operation',
      'The supply voltage range of the circuit which determines the maximum signal swing possible',
      'The gain range of the amplifier which is limited by the supply voltage and the bias current'
    ],
    correctAnswer: 1,
    hint: 'It is usually expressed in dB.',
    explanation: 'Dynamic range is the ratio between the largest signal the circuit can handle without excessive distortion and the smallest signal it can detect (the noise floor).'
  },
  {
    id: 93,
    category: 'Frequency Response',
    difficulty: 'Medium',
    text: 'A "High-Pass Filter" has a gain that ____ as frequency increases.',
    options: [
      'Decreases as frequency increases which is the characteristic of a low-pass filter stage',
      'Increases (up to a limit) as frequency increases until it reaches the passband region',
      'Stays constant as frequency increases which is the characteristic of an all-pass filter',
      'Oscillates as frequency increases which is a very undesirable behavior for any filter'
    ],
    correctAnswer: 1,
    hint: 'It passes high frequencies.',
    explanation: 'A high-pass filter attenuates low frequencies and allows high frequencies to pass with minimal attenuation.'
  },
  {
    id: 94,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is the "Nyquist Criterion" for stability?',
    options: [
      'A way to count poles in the circuit to determine the order of the transfer function',
      'A graphical method to determine stability by looking at the loop gain plot in complex plane',
      'A type of filter for noise that uses a specific mathematical transform to remove interference',
      'A rule for sampling the signal to ensure that no aliasing occurs in the data conversion'
    ],
    correctAnswer: 1,
    hint: 'It involves the number of encirclements of the -1 point.',
    explanation: 'The Nyquist criterion relates the stability of a closed-loop system to the number of encirclements of the (-1, 0) point by the Nyquist plot of the open-loop transfer function.'
  },
  {
    id: 95,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is "White Noise"?',
    options: [
      'Noise that looks white in color when viewed on a high-resolution spectrum analyzer screen',
      'Noise with a constant power spectral density across all frequencies similar to white light',
      'Noise that only exists at high frequencies and is filtered out by the low-pass stages',
      'Noise from the power supply lines that couples into the analog signal path through PSRR'
    ],
    correctAnswer: 1,
    hint: 'Like white light, it contains all frequencies equally.',
    explanation: 'White noise is a random signal with a flat power spectral density, meaning it has equal power in any band of a given width.'
  },
  {
    id: 96,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "Metal Slotting"?',
    options: [
      'Cutting holes in metal wires to reduce stress and improve reliability in wide metal lines',
      'Using metal to make a slot machine game which is a fun way to test the chip performance',
      'Reducing the total width of metal wires to save area and reduce the parasitic capacitance',
      'Adding extra metal layers to the chip to improve the routing and the power distribution'
    ],
    correctAnswer: 0,
    hint: 'It is used for very wide metal lines.',
    explanation: 'Wide metal lines can experience significant mechanical stress. Slotting (adding long holes) relieves this stress and prevents delamination or cracking.'
  },
  {
    id: 97,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "Current Reference" should ideally have ____ output impedance.',
    options: ['Zero output impedance level', 'Infinite output impedance level which ensures the current is independent of the output voltage', 'Exactly 1 Ohm of impedance', 'The same impedance as the load'],
    correctAnswer: 1,
    hint: 'Ideal current sources do not change current with voltage.',
    explanation: 'An ideal current source has infinite output impedance, meaning the current it provides is completely independent of the voltage across it.'
  },
  {
    id: 98,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the "Sub-threshold Slope" (S) related to?',
    options: ['The total speed of the transistor', 'The efficiency of the gate in controlling the channel current below the threshold voltage Vth', 'The total breakdown voltage level', 'The total area of the transistor'],
    correctAnswer: 1,
    hint: 'It is measured in mV/decade.',
    explanation: 'Subthreshold slope indicates how much the gate voltage must change to change the drain current by one order of magnitude in the subthreshold region.'
  },
  {
    id: 99,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Input Impedance" of an ideal Op-Amp?',
    options: ['Exactly 0 Ohms of impedance', 'Infinite input impedance level which means the amplifier draws zero current from the source', 'Exactly 50 Ohms of impedance', 'Exactly 1 kOhm of impedance'],
    correctAnswer: 1,
    hint: 'Ideal Op-Amps draw no input current.',
    explanation: 'An ideal Op-Amp has infinite input impedance, meaning it does not load the preceding stage at all.'
  },
  {
    id: 100,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is the "Systematic Mismatch" in a current mirror?',
    options: [
      'Mismatch due to random variations in the process parameters like Vth and mobility of carriers',
      'Mismatch due to design choices like different Vds or non-uniform layout environments in chip',
      'Mismatch due to temperature changes across the die which can lead to thermal gradients',
      'Mismatch due to thermal noise sources which are inherent in any resistive or active device'
    ],
    correctAnswer: 1,
    hint: 'It can be predicted and minimized by design.',
    explanation: 'Systematic mismatch arises from predictable differences, such as Vds differences between the reference and output transistors or non-uniform layout environments.'
  },
  // --- New Questions 101-200 ---
  {
    id: 101,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a Miller-compensated two-stage Op-Amp, what is the effect of the "Nulling Resistor" placed in series with the compensation capacitor?',
    options: [
      'It increases the total gain of the amplifier by reducing the output resistance of stage',
      'It moves the RHP zero to the LHP or to infinity to improve the phase margin of system',
      'It reduces the power consumption by minimizing the quiescent current in the output stage',
      'It increases the output swing range by allowing the signal to reach closer to the rails'
    ],
    correctAnswer: 1,
    hint: 'It targets the feedforward path.',
    explanation: 'The nulling resistor (Rz) is used to cancel the Right-Half-Plane (RHP) zero or move it to the Left-Half-Plane (LHP) to improve phase margin. Ideally, Rz = 1/gm2.'
  },
  {
    id: 102,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'Which short-channel effect causes the threshold voltage to decrease as the channel length is reduced?',
    options: [
      'The body effect on the substrate which increases the threshold voltage with source bias',
      'Vth Roll-off due to short channel effects which reduces the gate control over channel',
      'Reverse Short Channel Effect (RSCE) which causes the threshold voltage to increase',
      'Narrow Channel Effect on the width which increases the threshold voltage for small W'
    ],
    correctAnswer: 1,
    hint: 'It is the opposite of RSCE.',
    explanation: 'Vth roll-off occurs because the source and drain depletion regions occupy a significant portion of the channel, reducing the gate voltage required to reach inversion.'
  },
  {
    id: 103,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'In a switched-capacitor circuit, what is the total integrated thermal noise (kT/C noise) at the output of a sampling capacitor C?',
    options: [
      'kT/C noise power in Watts which represents the total thermal noise power on capacitor',
      'sqrt(kT/C) RMS noise in Volts which is the total integrated thermal noise on capacitor',
      '4kTR thermal noise in Volts which is the noise voltage spectral density of a resistor',
      'kT thermal energy in Joules which is the average thermal energy per degree of freedom'
    ],
    correctAnswer: 1,
    hint: 'The units should be Volts.',
    explanation: 'The noise power is kT/C (V^2). The root-mean-square (RMS) noise voltage is sqrt(kT/C).'
  },
  {
    id: 104,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is the "Pelgrom Law" used for in analog layout?',
    options: [
      'Calculating the total chip area based on the number of transistors and the routing area',
      'Predicting the standard deviation of mismatch between two identical devices in layout',
      'Determining the maximum current density that a metal wire can handle without failure',
      'Calculating the total gate delay of a logic gate based on the load capacitance and gm'
    ],
    correctAnswer: 1,
    hint: 'Sigma(delta_P) = A_P / sqrt(W*L).',
    explanation: 'Pelgrom\'s Law states that the mismatch between two identical transistors is inversely proportional to the square root of their area (W*L).'
  },
  {
    id: 105,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is the "Phase Reversal" phenomenon in some Op-Amps?',
    options: [
      'The total gain of the amplifier which is limited by the supply voltage and bias current',
      'The output voltage jumping to the opposite rail when the input exceeds the CM range',
      'The gain becoming a negative value which would mean the feedback becomes positive',
      'The system oscillating at DC frequency which would mean the amplifier is unstable'
    ],
    correctAnswer: 1,
    hint: 'It happens when the input stage transistors enter triode or cutoff.',
    explanation: 'Phase reversal occurs when the input common-mode voltage exceeds the allowed range, causing the input stage to malfunction and the output to flip to the opposite power rail.'
  },
  {
    id: 106,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is the purpose of a "Beta-Multiplier" reference circuit?',
    options: [
      'To multiply current gain of BJT which is an important parameter for bipolar circuits',
      'To generate a supply-independent current by using a self-biasing loop with a resistor',
      'To increase the total bandwidth of the amplifier by reducing the parasitic capacitance',
      'To reduce the total noise level by filtering out the high-frequency noise components'
    ],
    correctAnswer: 1,
    hint: 'It uses a resistor and a ratio of transistor sizes.',
    explanation: 'A Beta-Multiplier (or Constant-gm) circuit generates a current that is relatively independent of the supply voltage by using a self-biasing loop.'
  },
  {
    id: 107,
    category: 'Differential Pairs',
    difficulty: 'Medium',
    text: 'In a fully differential amplifier, what is the primary function of the "Common-Mode Feedback" (CMFB) circuit?',
    options: [
      'The total voltage gain of the circuit which determines the precision of the feedback',
      'To set and stabilize the output common-mode voltage level to prevent it from drifting',
      'The total differential noise power which is dominated by the thermal noise of devices',
      'The total input impedance level which determines the loading effect on the source'
    ],
    correctAnswer: 1,
    hint: 'High-gain nodes in fully differential circuits are floating in common-mode.',
    explanation: 'CMFB is essential in fully differential amplifiers to prevent the output common-mode voltage from drifting to the supply rails due to mismatches.'
  },
  {
    id: 108,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Gate-Induced Drain Leakage" (GIDL) caused by?',
    options: [
      'Impact ionization in the channel which occurs at high electric fields near the drain',
      'Band-to-band tunneling in the gate-drain overlap region at high drain-to-gate voltage',
      'Thermal generation in the depletion region which is a common source of leakage current',
      'Subthreshold conduction in the channel which occurs when the gate voltage is below Vth'
    ],
    correctAnswer: 1,
    hint: 'It occurs at high Vds and low Vgs.',
    explanation: 'GIDL is caused by high electric fields in the gate-drain overlap region, leading to band-to-band tunneling and a significant leakage current.'
  },
  {
    id: 109,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Miller Effect" in a Common-Source amplifier?',
    options: [
      'The reduction of gain at high frequencies due to the parasitic capacitances of nodes',
      'The multiplication of the gate-drain capacitance (Cgd) by the gain of the inverting',
      'The increase in output impedance which allows the amplifier to drive heavier loads',
      'The reduction of total noise power by filtering out the high-frequency components'
    ],
    correctAnswer: 1,
    hint: 'Cin = Cgs + Cgd(1 + |Av|).',
    explanation: 'The Miller Effect causes the feedback capacitance Cgd to appear much larger at the input, significantly reducing the bandwidth of high-gain stages.'
  },
  {
    id: 110,
    category: 'Layout',
    difficulty: 'Easy',
    text: 'Why are "Dummies" used at the ends of a transistor array?',
    options: [
      'To increase the total current flow through the transistor array in the layout design',
      'To ensure all functional transistors have the same environment and etching during fab',
      'To act as parasitic capacitors that can be used for frequency compensation in circuit',
      'To provide extra ground connections to the substrate to reduce the noise coupling'
    ],
    correctAnswer: 1,
    hint: 'Edge effects during fabrication.',
    explanation: 'Dummy transistors ensure that the functional devices in the center of an array experience uniform processing, improving matching.'
  },
  {
    id: 111,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'Which noise source is characterized by a 1/f frequency dependence?',
    options: [
      'Thermal Noise from resistors which is constant over the entire frequency range of use',
      'Shot Noise from PN junctions which is proportional to the DC current flowing through',
      'Flicker Noise from interfaces which is dominant at low frequencies due to trapping',
      'Burst Noise from defects in the silicon lattice which causes random telegraph signals'
    ],
    correctAnswer: 2,
    hint: 'It is also known as Pink Noise.',
    explanation: 'Flicker noise (1/f noise) is dominant at low frequencies and is primarily caused by carrier trapping and de-trapping at the Si-SiO2 interface.'
  },
  {
    id: 112,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'A system with a Phase Margin of 0 degrees is:',
    options: [
      'System is perfectly stable and will not oscillate under any operating conditions',
      'System is critically stable (oscillatory) because the phase shift is exactly 180 deg',
      'System is completely unstable and the output will saturate to the supply rails fast',
      'System is over-damped in response and will have a very slow and sluggish behavior'
    ],
    correctAnswer: 1,
    hint: 'It is right on the edge of the Barkhausen criterion.',
    explanation: 'A phase margin of 0 degrees means the system has a phase shift of -180 degrees at the unity-gain frequency, leading to sustained oscillations.'
  },
  {
    id: 113,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is the "Curvature" in a bandgap reference voltage?',
    options: [
      'The physical shape of the circuit layout which can affect the parasitic components',
      'The non-linear temperature dependence of the Vbe voltage which causes a second-order',
      'The variation of the Vdd supply voltage which can affect the output reference level',
      'The noise floor of the circuit which determines the minimum detectable signal level'
    ],
    correctAnswer: 1,
    hint: 'Vbe = Vg0 - (Vg0 - Vbe0)(T/T0) - ...',
    explanation: 'The Vbe voltage has a non-linear temperature dependence (T*lnT), which causes the bandgap output to "curve" rather than being perfectly flat over temperature.'
  },
  {
    id: 114,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'In a Cascode Current Mirror, the "shielding" effect refers to:',
    options: [
      'Protecting the circuit from EMI by using a metal shield over the sensitive analog blocks',
      'Reducing variation of bottom transistor\'s Vds as output changes by keeping Vd constant',
      'Reducing the total noise power by filtering out the high-frequency noise from the source',
      'Increasing the total speed level by reducing the parasitic capacitances at the drain node'
    ],
    correctAnswer: 1,
    hint: 'The cascode device keeps the bottom device\'s drain voltage constant.',
    explanation: 'The cascode transistor keeps the drain voltage of the mirror transistor nearly constant, minimizing current variations due to channel length modulation.'
  },
  {
    id: 115,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the "Subthreshold Swing" (S) of an ideal MOSFET at 300K?',
    options: [
      'Exactly 26 mV/decade slope which is the thermal voltage at room temperature of 300K',
      'Exactly 60 mV/decade slope which is the theoretical limit at room temperature for MOSFET',
      'Exactly 120 mV/decade slope which is a typical value for a real MOSFET with non-zero Cd',
      'Exactly 0 mV/decade slope which would mean the transistor turns on and off instantly'
    ],
    correctAnswer: 1,
    hint: 'S = (ln 10) * (kT/q) * (1 + Cd/Cox).',
    explanation: 'At room temperature (300K), the thermal voltage (kT/q) is ~26mV. (ln 10) * 26mV is approximately 60mV/decade, the theoretical limit for a MOSFET.'
  },
  {
    id: 116,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the main advantage of a "Folded Cascode" Op-Amp over a "Telescopic" Op-Amp?',
    options: [
      'Higher total voltage gain which is necessary for high precision in feedback systems',
      'Higher output swing and wider input common-mode range due to the folding of signal',
      'Lower total power consumption which is achieved by using fewer transistors in stage',
      'Lower total noise power level which is achieved by minimizing the number of devices'
    ],
    correctAnswer: 1,
    hint: 'Think about the stacking of transistors.',
    explanation: 'Folded cascode Op-Amps allow the input and output to be at different DC levels, providing better swing and common-mode range than the telescopic version.'
  },
  {
    id: 117,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is the "LOD" (Length of Diffusion) effect?',
    options: [
      'The length of the transistor which determines the channel resistance and the speed',
      'The dependence of Vth and mobility on distance from gate to STI edge due to stress',
      'The resistance of diffusion which can lead to a voltage drop and a loss of signal',
      'The capacitance of diffusion which interacts with the resistance to form a pole'
    ],
    correctAnswer: 1,
    hint: 'It is a mechanical stress effect.',
    explanation: 'Mechanical stress from the Shallow Trench Isolation (STI) affects the silicon lattice, changing the electrical properties of transistors based on their proximity to the STI edge.'
  },
  {
    id: 118,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Noise Folding" in a sampled-data system?',
    options: [
      'The noise becoming smaller due to the averaging effect of the sampling process',
      'High-frequency noise being aliased into the signal band due to sampling in time',
      'The noise being cancelled by using a differential sampling technique in the circuit',
      'The noise becoming white which means it has a constant power spectral density'
    ],
    correctAnswer: 1,
    hint: 'Think about the Nyquist theorem.',
    explanation: 'When a signal is sampled, noise from frequencies higher than half the sampling rate is "folded" or aliased back into the baseband, increasing the total noise power.'
  },
  {
    id: 119,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is the "Right-Half-Plane" (RHP) zero in a Miller-compensated amplifier?',
    options: [
      'A zero that improves stability by providing a phase lead in the frequency response',
      'A zero that adds phase lag and increases gain, potentially causing instability',
      'A pole at high frequency which is caused by the parasitic capacitance at the node',
      'A zero at DC which would mean the amplifier has no gain at zero frequency level'
    ],
    correctAnswer: 1,
    hint: 'It comes from the feedforward path through Cc.',
    explanation: 'The RHP zero adds 90 degrees of phase lag (like a pole) but increases gain (like a zero), which is a "worst of both worlds" scenario for stability.'
  },
  {
    id: 120,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "PTAT" current source has a temperature coefficient that is:',
    options: [
      'Negative which means the current decreases as the absolute temperature rises up',
      'Positive meaning the current increases linearly as the absolute temperature rises',
      'Zero which means the current is perfectly stable over the entire temperature range',
      'Infinite which would mean the current is extremely sensitive to temperature changes'
    ],
    correctAnswer: 1,
    hint: 'PTAT = Proportional to Absolute Temperature.',
    explanation: 'A PTAT current increases linearly with absolute temperature (T).'
  },
  {
    id: 121,
    category: 'Current Mirrors',
    difficulty: 'Easy',
    text: 'To mirror a current accurately, the two transistors should ideally have the same:',
    options: [
      'Width only which is the most important parameter for matching the current density',
      'Length only which determines the output impedance and the channel length modulation',
      'Vgs, Temperature, and Process parameters to ensure identical operating conditions',
      'Drain voltage only which ensures that both transistors are in the same region'
    ],
    correctAnswer: 2,
    hint: 'Matching requires identical conditions.',
    explanation: 'Accurate current mirroring requires the transistors to be identical in process, have the same Vgs, and be at the same temperature.'
  },
  {
    id: 122,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Body Effect"?',
    options: [
      'The effect of the transistor\'s size on its speed and the parasitic capacitances',
      'The change in threshold voltage due to a voltage difference between source and bulk',
      'The heating of the transistor body due to the power dissipation in the channel',
      'The leakage through the substrate which can lead to crosstalk and latch-up issues'
    ],
    correctAnswer: 1,
    hint: 'Vth = Vth0 + gamma * (sqrt(2phi + Vsb) - sqrt(2phi)).',
    explanation: 'The body effect describes how the threshold voltage increases as the source-to-bulk voltage (Vsb) increases.'
  },
  {
    id: 123,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Class AB" amplifier, what is the purpose of the quiescent current?',
    options: [
      'To maximize gain by ensuring that both output transistors are in the saturation',
      'To eliminate crossover distortion by keeping the output transistors slightly on',
      'To reduce power consumption by minimizing the quiescent current in the output stage',
      'To increase input impedance by using a buffer stage before the output power stage'
    ],
    correctAnswer: 1,
    hint: 'It keeps the output transistors slightly "on".',
    explanation: 'A small quiescent current ensures that the output transistors are not completely off during the signal zero-crossing, preventing crossover distortion.'
  },
  {
    id: 124,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Electromigration"?',
    options: [
      'The movement of electrons in a wire which is the basis of electrical current flow',
      'The physical movement of metal atoms due to high current density leading to failure',
      'The migration of ions in the substrate which can lead to threshold voltage shifts',
      'The movement of the chip in the package due to mechanical stress or vibrations'
    ],
    correctAnswer: 1,
    hint: 'It is a reliability concern for power lines.',
    explanation: 'High current density can "push" metal atoms, eventually creating voids (breaks) or hillocks (shorts) in the interconnects.'
  },
  {
    id: 125,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'How can you reduce the "Flicker Noise" of a MOSFET?',
    options: [
      'Increase the drain current which reduces the thermal noise but increases power',
      'Increase the gate area (W * L) to average out the effects of traps at interface',
      'Decrease the gate oxide thickness which increases the transconductance of device',
      'Increase the temperature which increases the thermal energy of the charge carriers'
    ],
    correctAnswer: 1,
    hint: 'Noise power is inversely proportional to Area.',
    explanation: 'Increasing the gate area (W*L) reduces flicker noise because it averages out the effects of individual traps at the oxide interface.'
  },
  {
    id: 126,
    category: 'Stability',
    difficulty: 'Easy',
    text: 'What is the "Unity-Gain Bandwidth" (UGBW)?',
    options: [
      'The frequency where the gain is 0 dB or unity magnitude in the open-loop response',
      'The maximum frequency the amplifier can handle before the output starts to clip',
      'The gain at DC which determines the steady-state error of the feedback system',
      'The frequency where the phase is -180 degrees and the system starts to oscillate'
    ],
    correctAnswer: 0,
    hint: 'Gain = 1.',
    explanation: 'UGBW is the frequency at which the open-loop gain of the amplifier drops to unity (1 or 0 dB).'
  },
  {
    id: 127,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is the "Start-up" problem in self-biased circuits?',
    options: [
      'The circuit takes too long to turn on due to the large parasitic capacitances',
      'The circuit has a stable "zero-current" state and may never start conducting',
      'The circuit consumes too much power at start-up which can damage the devices',
      'The circuit oscillates at start-up due to the lack of proper frequency compensation'
    ],
    correctAnswer: 1,
    hint: 'It needs a "kick" to reach the desired operating point.',
    explanation: 'Self-biased circuits often have two stable states: the intended one and one where all currents are zero. A start-up circuit is needed to "push" the circuit out of the zero-current state.'
  },
  {
    id: 128,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is the "Wilson Current Mirror" primarily known for?',
    options: [
      'Low voltage headroom which is a major drawback of this current mirror topology',
      'High output impedance and reduced sensitivity to CLM by using a feedback loop',
      'Low noise which is achieved by minimizing the number of active devices in stage',
      'High speed which is achieved by reducing the parasitic capacitances at the nodes'
    ],
    correctAnswer: 1,
    hint: 'It uses a feedback loop to stabilize the current.',
    explanation: 'The Wilson current mirror uses feedback to significantly increase the output impedance, though it requires more voltage headroom than a simple mirror.'
  },
  {
    id: 129,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is "Velocity Saturation"?',
    options: [
      'The maximum speed of the chip which is limited by the critical path delay in logic',
      'The phenomenon where carrier velocity stops increasing linearly with electric field',
      'The speed of light in silicon which is the absolute limit for signal propagation',
      'The saturation of the drain current which occurs when the transistor is in saturation'
    ],
    correctAnswer: 1,
    hint: 'It limits the current in short-channel devices.',
    explanation: 'At high electric fields, carriers collide so frequently with the lattice that their average velocity reaches a maximum limit (saturation velocity).'
  },
  {
    id: 130,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Slew Rate" (SR) of an Op-Amp?',
    options: [
      'The maximum output voltage that the Op-Amp can reach before the output stage clips',
      'The maximum rate of change of the output voltage which is limited by bias current',
      'The gain-bandwidth product which is a constant for a single-pole amplifier system',
      'The input offset voltage which is caused by the mismatches in the input pair stage'
    ],
    correctAnswer: 1,
    hint: 'Units are V/microsecond.',
    explanation: 'Slew rate is the maximum speed at which the output can change, usually limited by the tail current charging the compensation capacitor.'
  },
  {
    id: 131,
    category: 'Layout',
    difficulty: 'Easy',
    text: 'What is a "Guard Ring"?',
    options: [
      'A decorative ring on the chip which is used to enhance the visual appeal of the layout',
      'A ring of substrate contacts used to isolate sensitive circuits and prevent latch-up',
      'A ring of metal for power distribution that provides a low-impedance path for current',
      'A ring of dummy transistors that are used to ensure uniform processing during fabrication'
    ],
    correctAnswer: 1,
    hint: 'It collects stray substrate carriers.',
    explanation: 'Guard rings provide a low-impedance path to ground or Vdd for substrate currents, reducing noise coupling and preventing latch-up.'
  },
  {
    id: 132,
    category: 'Noise',
    difficulty: 'Easy',
    text: 'What is "Thermal Noise"?',
    options: [
      'Noise caused by the temperature of the room which can affect the sensitive analog blocks',
      'Noise caused by the random motion of charge carriers in a conductor due to thermal energy',
      'Noise from the power supply which couples into the signal path through the PSRR of stage',
      'Noise from the clock signal which can cause jitter and timing errors in digital circuits'
    ],
    correctAnswer: 1,
    hint: 'It is also called Johnson-Nyquist noise.',
    explanation: 'Thermal noise is present in all resistive elements and is caused by the random thermal agitation of electrons.'
  },
  {
    id: 133,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is the "Bode Plot" used for?',
    options: [
      'Calculating power dissipation in the circuit based on the supply voltage and bias current',
      'Visualizing the frequency response (magnitude and phase) of a system in the signal band',
      'Designing the layout floorplan to ensure that the parasitic components are minimized',
      'Measuring noise power spectral density at the output of the amplifier stage in the lab'
    ],
    correctAnswer: 1,
    hint: 'It uses logarithmic scales.',
    explanation: 'Bode plots are used to analyze the gain and phase of a system over frequency, which is crucial for determining stability.'
  },
  {
    id: 134,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "Bandgap Reference" circuit produces a voltage that is approximately:',
    options: [
      '0.7 V which is the typical base-emitter voltage of a silicon bipolar junction transistor',
      '1.2 V which is the extrapolated bandgap voltage of silicon at zero degrees Kelvin',
      '2.5 V which is a common reference voltage for many older analog and mixed-signal chips',
      'Vdd which is the positive supply voltage of the circuit and varies with the battery'
    ],
    correctAnswer: 1,
    hint: 'It is related to the silicon bandgap energy.',
    explanation: 'A bandgap reference combines PTAT and CTAT components to produce a stable ~1.2V output, which is the extrapolated bandgap of silicon at 0K.'
  },
  {
    id: 135,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the "Compliance Voltage" of a current source?',
    options: [
      'The maximum voltage it can tolerate before the transistors break down and the chip fails',
      'The range of output voltage over which the current remains constant in the saturation',
      'The accuracy of the current ratio between the reference and the output branches of mirror',
      'The supply voltage of the circuit which determines the maximum signal swing and headroom'
    ],
    correctAnswer: 1,
    hint: 'It defines the "working" range of the source.',
    explanation: 'Compliance voltage is the range of output voltages for which the current source maintains its high output impedance and constant current.'
  },
  {
    id: 136,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Drain-Induced Barrier Lowering" (DIBL)?',
    options: [
      'The drain voltage increasing the threshold voltage due to the short channel effects',
      'The drain voltage lowering the potential barrier for carriers, effectively reducing Vth',
      'The breakdown of the drain junction due to high electric fields in the depletion region',
      'The leakage through the gate oxide due to the tunneling of carriers through the dielectric'
    ],
    correctAnswer: 1,
    hint: 'It is a short-channel effect.',
    explanation: 'In short-channel devices, the drain electric field can penetrate deep into the channel, lowering the barrier at the source and reducing the threshold voltage.'
  },
  {
    id: 137,
    category: 'Amplifiers',
    difficulty: 'Easy',
    text: 'What is the "Common-Mode Rejection Ratio" (CMRR)?',
    options: [
      'The ratio of differential gain to common-mode gain which measures the rejection ability',
      'The ratio of input to output signal levels which represents the gain of the amplifier stage',
      'The maximum input voltage that the amplifier can handle before the input stage saturates',
      'The noise figure of the amplifier which measures the degradation of the signal-to-noise'
    ],
    correctAnswer: 0,
    hint: 'It measures how well an amplifier rejects common signals.',
    explanation: 'CMRR is a measure of an amplifier\'s ability to reject signals that appear simultaneously and in-phase on both input terminals.'
  },
  {
    id: 138,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "Antenna Effect" during fabrication?',
    options: [
      'The chip acting as a radio antenna and picking up interference from the environment',
      'Charge accumulation on long metal wires during plasma etching that can damage gate oxide',
      'The coupling between metal layers which can lead to crosstalk and signal integrity issues',
      'The radiation of heat from the chip which can affect the performance of nearby components'
    ],
    correctAnswer: 1,
    hint: 'It is a manufacturing reliability issue.',
    explanation: 'Long metal lines can collect charge from the plasma during etching. If this charge has no path to ground except through a thin gate oxide, it can cause oxide breakdown.'
  },
  {
    id: 139,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Shot Noise"?',
    options: [
      'Noise from a gun which is a common but incorrect analogy for the nature of shot noise',
      'Noise due to the discrete nature of electric charge crossing a potential barrier in device',
      'Noise from the substrate which couples into the signal path through the body effect',
      'Noise from the package which is caused by the parasitic inductance and resistance of pins'
    ],
    correctAnswer: 1,
    hint: 'It is proportional to the DC current.',
    explanation: 'Shot noise arises from the fact that current is not a continuous flow but consists of individual electrons crossing a barrier at random times.'
  },
  {
    id: 140,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is "Compensation" in Op-Amp design?',
    options: [
      'Paying the designer for their hard work and dedication to the project success in the lab',
      'Modifying the open-loop frequency response to ensure closed-loop stability of the system',
      'Reducing the power consumption by minimizing the quiescent current in the amplifier stage',
      'Increasing the gain of the amplifier by adding more stages or using cascode transistors'
    ],
    correctAnswer: 1,
    hint: 'Miller compensation is a common type.',
    explanation: 'Compensation involves adding poles or zeros (usually via capacitors) to ensure the phase margin is sufficient for stability when feedback is applied.'
  },
  {
    id: 141,
    category: 'Biasing',
    difficulty: 'Easy',
    text: 'What does "PTAT" stand for?',
    options: [
      'Power Towards All Terminals which is a non-standard acronym in the field of analog design',
      'Proportional To Absolute Temperature which means the value increases linearly with T',
      'Process Tolerant Analog Technology which refers to a specific design methodology in CMOS',
      'Passive Thermal Analog Terminal which is a component used for temperature sensing on chip'
    ],
    correctAnswer: 1,
    hint: 'It relates to temperature.',
    explanation: 'PTAT stands for Proportional To Absolute Temperature.'
  },
  {
    id: 142,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'Why is a "Common-Centroid" layout used for current mirrors?',
    options: [
      'To save area by packing the transistors more tightly together in the layout floorplan',
      'To cancel out the effects of linear gradients (like temperature or oxide thickness) on die',
      'To increase speed by reducing the parasitic capacitances of the gate and drain nodes',
      'To reduce parasitic capacitance by minimizing the total area of the metal interconnects'
    ],
    correctAnswer: 1,
    hint: 'It is a matching technique.',
    explanation: 'Common-centroid layout arranges the transistors of a pair symmetrically around a central point to average out spatial variations in process parameters.'
  },
  {
    id: 143,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Early Effect" in MOSFETs?',
    options: [
      'The transistor turning on too early due to a low threshold voltage or a high gate bias',
      'The dependence of drain current on Vds in the saturation region (Channel Length Modulation)',
      'The breakdown of the gate oxide due to an electrostatic discharge event during handling',
      'The increase in speed due to the reduction of the channel length in deep sub-micron'
    ],
    correctAnswer: 1,
    hint: 'It is named after the BJT effect.',
    explanation: 'Though strictly a BJT term, it is often used in MOSFETs to refer to Channel Length Modulation (CLM), where Id increases with Vds.'
  },
  {
    id: 144,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Input Offset Voltage"?',
    options: [
      'The voltage at the input when the output is zero which is not a standard definition',
      'The DC voltage required at the input to make the output zero (or common-mode level)',
      'The maximum input voltage that the amplifier can handle before the input stage clips',
      'The noise at the input of the amplifier which limits the minimum detectable signal level'
    ],
    correctAnswer: 1,
    hint: 'It is caused by mismatches.',
    explanation: 'Input offset voltage is the differential DC voltage that must be applied to the inputs to force the output to zero (or the common-mode level).'
  },
  {
    id: 145,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Latch-up"?',
    options: [
      'The chip getting stuck in a software loop or a logic race condition in the digital part',
      'A parasitic thyristor (SCR) effect that creates a short circuit between Vdd and Gnd',
      'The gate oxide breaking due to a high electric field or an electrostatic discharge event',
      'The metal melting due to excessive current density and the resulting joule heating effect'
    ],
    correctAnswer: 1,
    hint: 'It involves parasitic BJT structures.',
    explanation: 'Latch-up occurs when parasitic NPN and PNP transistors in a CMOS structure form a positive feedback loop, creating a high-current path between power rails.'
  },
  {
    id: 146,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is the "Noise Floor" of a system?',
    options: [
      'The physical floor of the lab where the measurements are taken and the equipment is kept',
      'The level of background noise below which signals cannot be detected or distinguished',
      'The maximum noise level that the system can tolerate before the signal quality degrades',
      'The gain of the noise which represents how much the noise is amplified by the system'
    ],
    correctAnswer: 1,
    hint: 'It limits sensitivity.',
    explanation: 'The noise floor is the measure of the signal created from the sum of all the noise sources and unwanted signals within a system.'
  },
  {
    id: 147,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is "Phase Margin" (PM)?',
    options: [
      'The difference between the phase and -180 degrees at the unity-gain frequency of loop',
      'The total phase shift of the system which is the sum of the phase shifts of all stages',
      'The gain at -180 degrees which determines the gain margin and the stability of system',
      'The frequency of oscillation which occurs when the phase margin of the system is zero'
    ],
    correctAnswer: 0,
    hint: 'It measures how stable a feedback system is.',
    explanation: 'Phase margin is the amount of additional phase lag at the unity-gain frequency required to bring the system to the verge of instability.'
  },
  {
    id: 148,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is a "Cascode" current source?',
    options: [
      'A source with two transistors in parallel to increase the total current driving ability',
      'A source with two transistors in series (stacked) to increase the output impedance',
      'A source with a capacitor for frequency compensation and to improve the phase margin',
      'A source with a resistor for current sensing and to provide a feedback signal to loop'
    ],
    correctAnswer: 1,
    hint: 'It "boosts" the impedance.',
    explanation: 'A cascode current source uses a second transistor stacked on top of the first to increase the output resistance by a factor of approximately gm*ro.'
  },
  {
    id: 149,
    category: 'Current Mirrors',
    difficulty: 'Easy',
    text: 'What is the "Mirror Ratio"?',
    options: [
      'The ratio of the widths of the two transistors in the mirror which sets the current',
      'The ratio of the output current to the reference current in the current mirror branch',
      'The ratio of the lengths of the two transistors which affects the output resistance',
      'The ratio of the voltages at the gates of the two transistors in the current mirror'
    ],
    correctAnswer: 1,
    hint: 'It is usually set by (W/L) ratios.',
    explanation: 'The mirror ratio is the factor by which the input reference current is scaled to produce the output current.'
  },
  {
    id: 150,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'What is the "Gate" of a MOSFET?',
    options: [
      'The terminal that controls the channel conductivity by applying an electric field',
      'The terminal where current enters the device from the external circuit or the source',
      'The terminal where current leaves the device to the external circuit or the drain',
      'The substrate connection which is used to bias the body of the transistor to a level'
    ],
    correctAnswer: 0,
    hint: 'It acts like a valve.',
    explanation: 'The gate is the control terminal of the MOSFET; the voltage applied to it determines the conductivity of the channel.'
  },
  {
    id: 151,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'What is "Chopper Stabilization"?',
    options: [
      'A way to cool the amplifier by using a fan or a heat sink to dissipate the thermal energy',
      'A technique to reduce DC offset and flicker noise by modulating signal to higher freq',
      'A method to increase gain by using multiple stages of amplification in the signal path',
      'A type of layout that uses a specific arrangement of transistors to improve matching'
    ],
    correctAnswer: 1,
    hint: 'It involves periodic switching.',
    explanation: 'Chopping modulates the input signal to a high frequency, amplifies it, and then demodulates it, effectively "pushing" low-frequency noise and offset out of the signal band.'
  },
  {
    id: 152,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "STI" (Shallow Trench Isolation)?',
    options: [
      'A type of transistor with a specific doping profile and gate structure for high speed',
      'A method for isolating transistors on a die by etching trenches and filling with oxide',
      'A metal layer that is used for routing signals between different blocks on the chip',
      'A testing procedure that is used to verify the functionality of the chip after fabrication'
    ],
    correctAnswer: 1,
    hint: 'It replaced LOCOS.',
    explanation: 'STI is the standard isolation technique in modern CMOS, preventing leakage between adjacent devices.'
  },
  {
    id: 153,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is "White Noise"?',
    options: [
      'Noise that is only at high frequencies and is filtered out by the bandwidth of system',
      'Noise with a constant power spectral density across all frequencies in the signal band',
      'Noise from the power supply which is caused by the switching of the digital circuits',
      'Noise that is visible on the oscilloscope screen as a random fluctuation of the signal'
    ],
    correctAnswer: 1,
    hint: 'Like white light, it contains all frequencies.',
    explanation: 'White noise has the same intensity at all frequencies, giving it a flat power spectrum.'
  },
  {
    id: 154,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is the "Nyquist Stability Criterion"?',
    options: [
      'A rule for sampling that states the minimum sampling rate required to avoid aliasing',
      'A graphical method for determining the stability of a feedback system in frequency',
      'A type of filter that is used to remove high-frequency noise from the signal path',
      'A power calculation that is used to determine the efficiency of the amplifier stage'
    ],
    correctAnswer: 1,
    hint: 'It uses the Nyquist plot.',
    explanation: 'The Nyquist criterion relates the stability of a closed-loop system to the frequency response of the open-loop system.'
  },
  {
    id: 155,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is a "Voltage Reference"?',
    options: [
      'A circuit that measures voltage and provides a digital representation of the value',
      'A circuit that provides a stable, temperature-independent DC voltage for the system',
      'A battery that provides a constant voltage until it is depleted of its stored energy',
      'A resistor divider that scales down the supply voltage to a lower reference level'
    ],
    correctAnswer: 1,
    hint: 'Bandgaps are a common type.',
    explanation: 'A voltage reference is a circuit that maintains a constant output voltage regardless of changes in temperature, supply voltage, or load.'
  },
  {
    id: 156,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is "Channel Length Modulation" (CLM) in a current mirror?',
    options: [
      'The length of the channel changing with temperature due to the thermal expansion',
      'The effective channel length changing with Vds, causing current variation in saturation',
      'The width of the channel changing due to the mechanical stress from the STI edges',
      'The noise of the channel which is caused by the random motion of the charge carriers'
    ],
    correctAnswer: 1,
    hint: 'It is the MOSFET equivalent of the Early Effect.',
    explanation: 'CLM causes the drain current to increase as Vds increases, even in the saturation region, which degrades the accuracy of current mirrors.'
  },
  {
    id: 157,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Triode" (or Linear) region of a MOSFET?',
    options: [
      'When the transistor is off and no current flows between the source and the drain',
      'When Vds is small and the current is proportional to Vds in the linear region of use',
      'When the current is constant and independent of the drain-to-source voltage level',
      'When the gate is broken due to a high voltage or an electrostatic discharge event'
    ],
    correctAnswer: 1,
    hint: 'Vds < Vgs - Vth.',
    explanation: 'In the triode region, the MOSFET acts like a voltage-controlled resistor.'
  },
  {
    id: 158,
    category: 'Amplifiers',
    difficulty: 'Easy',
    text: 'What is a "Differential Amplifier"?',
    options: [
      'An amplifier that amplifies the difference between two signals at its input terminals',
      'An amplifier with two stages of amplification to achieve a higher total voltage gain',
      'An amplifier that is different from others in terms of its topology or performance',
      'A digital amplifier that uses pulse-width modulation to drive the output load stage'
    ],
    correctAnswer: 0,
    hint: 'It has two inputs.',
    explanation: 'A differential amplifier amplifies the voltage difference between its two input terminals while rejecting signals common to both.'
  },
  {
    id: 159,
    category: 'Layout',
    difficulty: 'Easy',
    text: 'What is "Via" in a semiconductor layout?',
    options: [
      'A way to go somewhere in the layout which is a non-technical and incorrect definition',
      'A vertical electrical connection between different metal layers in the chip layout',
      'A horizontal wire that is used to route signals within a single metal layer of chip',
      'A type of transistor that is used for high-speed switching in digital logic circuits'
    ],
    correctAnswer: 1,
    hint: 'It connects Metal 1 to Metal 2, etc.',
    explanation: 'Vias are small holes filled with metal that provide electrical connectivity between different layers of interconnect.'
  },
  {
    id: 160,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Noise Figure" (NF)?',
    options: [
      'The total noise power which is the integral of the noise PSD over the entire bandwidth',
      'A measure of the degradation of the signal-to-noise ratio (SNR) caused by a system',
      'The gain of the noise which represents how much the noise is amplified by the stage',
      'The temperature of the noise which is a measure of the thermal noise power density'
    ],
    correctAnswer: 1,
    hint: 'NF = 10 * log10(SNR_in / SNR_out).',
    explanation: 'Noise figure quantifies how much noise a component adds to a signal, expressed in decibels.'
  },
  {
    id: 161,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is a "Pole" in a transfer function?',
    options: [
      'A vertical stick that is used to support the chip package during the assembly process',
      'A frequency where the gain goes to infinity in the open-loop transfer function of system',
      'A frequency where the gain goes to zero in the transfer function of the amplifier stage',
      'A DC offset that is caused by the mismatches in the input pair of the amplifier circuit'
    ],
    correctAnswer: 1,
    hint: 'It causes the gain to roll off.',
    explanation: 'A pole is a root of the denominator of the transfer function; it causes the gain to decrease and adds phase lag.'
  },
  {
    id: 162,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is "Supply Sensitivity" of a bias circuit?',
    options: [
      'How much the supply voltage changes over time due to the battery discharge or load',
      'The change in output current or voltage per unit change in the supply voltage level',
      'The noise on the supply which can couple into the signal path through the parasitic',
      'The power consumption of the bias circuit which determines the battery life of system'
    ],
    correctAnswer: 1,
    hint: 'dI_out / dVdd.',
    explanation: 'Supply sensitivity measures how well a bias circuit rejects variations in the power supply voltage.'
  },
  {
    id: 163,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is a "Wide-Swing" cascode current mirror?',
    options: [
      'A mirror that can handle large currents without overheating or damaging the devices',
      'A cascode mirror biased to allow a larger output voltage range (lower Vmin) in stage',
      'A mirror with a large area to improve the matching between the reference and output',
      'A mirror with high speed that can respond to fast changes in the input reference current'
    ],
    correctAnswer: 1,
    hint: 'It uses a special bias for the cascode gate.',
    explanation: 'Wide-swing cascode mirrors use a specific bias voltage to keep the bottom transistor at the edge of saturation, maximizing the output swing.'
  },
  {
    id: 164,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'What is "Saturation" in a MOSFET?',
    options: [
      'When the transistor is wet due to the humidity in the environment or a leak in package',
      'The region where the drain current is nearly independent of Vds in the saturation',
      'When the transistor is off and no current flows between the source and the drain nodes',
      'When the gate voltage is zero and the channel is not formed in the substrate region'
    ],
    correctAnswer: 1,
    hint: 'Vds > Vgs - Vth.',
    explanation: 'In saturation, the MOSFET acts like a voltage-controlled current source.'
  },
  {
    id: 165,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is "Gain-Bandwidth Product" (GBW)?',
    options: [
      'The product of the DC gain and the bandwidth of the amplifier in a single-pole system',
      'The frequency where the gain is 1 (or 0 dB) which is the unity-gain bandwidth of stage',
      'The total power consumption of the amplifier which is the product of Vdd and current',
      'The noise level of the amplifier which is the product of the noise density and bandwidth'
    ],
    correctAnswer: 0,
    hint: 'For a single-pole system, it is constant.',
    explanation: 'GBW is a constant for many amplifiers, representing the trade-off between gain and the frequency range over which that gain can be maintained.'
  },
  {
    id: 166,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "CMP" (Chemical Mechanical Polishing)?',
    options: [
      'A type of transistor with a specific doping profile for high-speed switching in logic',
      'A process for flattening the surface of a wafer during fabrication using a slurry',
      'A testing method that is used to verify the electrical properties of the transistors',
      'A type of metal that is used for the interconnects because of its low resistivity level'
    ],
    correctAnswer: 1,
    hint: 'It uses a slurry and a polishing pad.',
    explanation: 'CMP is used to planarize the wafer surface after depositing layers, which is essential for multi-layer interconnects and lithography.'
  },
  {
    id: 167,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is "1/f Noise"?',
    options: [
      'Noise that increases with frequency due to the parasitic inductances of the wires',
      'Noise whose power spectral density is inversely proportional to frequency in band',
      'Noise from the clock which is caused by the switching of the digital logic gates',
      'Thermal noise which is caused by the random motion of the charge carriers in device'
    ],
    correctAnswer: 1,
    hint: 'It is also called Flicker Noise.',
    explanation: '1/f noise is dominant at low frequencies and is a major concern for precision analog circuits.'
  },
  {
    id: 168,
    category: 'Stability',
    difficulty: 'Easy',
    text: 'What is a "Zero" in a transfer function?',
    options: [
      'A number that is used to represent the value of the signal in a digital system',
      'A frequency where the gain goes to zero in the transfer function of the amplifier',
      'A frequency where the gain goes to infinity in the transfer function of the stage',
      'A DC offset that is caused by the mismatches in the input pair of the amplifier circuit'
    ],
    correctAnswer: 1,
    hint: 'It causes the gain to increase.',
    explanation: 'A zero is a root of the numerator of the transfer function; it causes the gain to increase and adds phase lead (if in the LHP).'
  },
  {
    id: 169,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is "CTAT"?',
    options: [
      'Current Towards All Terminals which is a non-standard acronym in the field of design',
      'Complementary To Absolute Temperature which means the value decreases linearly with T',
      'Circuit Tolerant Analog Technology which refers to a specific design methodology in CMOS',
      'Constant Thermal Analog Terminal which is a component used for temperature sensing'
    ],
    correctAnswer: 1,
    hint: 'It is the opposite of PTAT.',
    explanation: 'CTAT stands for Complementary To Absolute Temperature; its value decreases as temperature increases (e.g., Vbe).'
  },
  {
    id: 170,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is the "Output Resistance" of a simple NMOS current mirror?',
    options: [
      'ro which is the small-signal output resistance of the transistor in the saturation',
      '1/gm which is the transconductance of the transistor and represents the input impedance',
      'Infinite which would mean the current mirror is an ideal current source in the circuit',
      'Zero which would mean the current mirror is an ideal voltage source in the circuit'
    ],
    correctAnswer: 0,
    hint: 'It is the small-signal resistance of the output transistor.',
    explanation: 'The output resistance of a simple current mirror is just the ro (drain-source resistance) of the output transistor.'
  },
  {
    id: 171,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Impact Ionization" in a MOSFET?',
    options: [
      'Ions hitting the chip from the environment and causing damage to the sensitive blocks',
      'High-energy carriers creating electron-hole pairs through collisions in the channel',
      'The gate oxide breaking due to a high electric field or an electrostatic discharge event',
      'The chip getting hot due to the power dissipation in the transistors and the resistors'
    ],
    correctAnswer: 1,
    hint: 'It occurs at high Vds.',
    explanation: 'Impact ionization happens when carriers are accelerated by high electric fields and collide with atoms, creating additional carriers and substrate current.'
  },
  {
    id: 172,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is "Power Supply Rejection Ratio" (PSRR)?',
    options: [
      'The ratio of output power to input power which represents the efficiency of the stage',
      'The ability of an amplifier to reject noise from the power supply in the signal band',
      'The maximum supply voltage that the amplifier can handle before the transistors fail',
      'The power consumption of the amplifier which determines the battery life of the system'
    ],
    correctAnswer: 1,
    hint: 'It is usually expressed in dB.',
    explanation: 'PSRR measures how much of the power supply ripple appears at the output of the amplifier.'
  },
  {
    id: 173,
    category: 'Layout',
    difficulty: 'Easy',
    text: 'What is "Metal 1", "Metal 2", etc.?',
    options: [
      'Different types of metal that are used for different purposes in the chip fabrication',
      'Sequential layers of metal interconnect on a chip that are used for routing signals',
      'Metal for different purposes like power distribution, signal routing, and shielding',
      'Metal for different chips that are used in a multi-chip module or a system-in-package'
    ],
    correctAnswer: 1,
    hint: 'They are stacked vertically.',
    explanation: 'Modern chips use multiple layers of metal (M1, M2, etc.) to route signals and power, connected by vias.'
  },
  {
    id: 174,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Integrated Noise"?',
    options: [
      'Noise in an integrated circuit which is caused by the proximity of the digital blocks',
      'The total noise power over a specific frequency range in the signal band of interest',
      'The noise of a capacitor which is caused by the random motion of the charge carriers',
      'The noise of a resistor which is caused by the thermal agitation of the electrons'
    ],
    correctAnswer: 1,
    hint: 'It is the area under the noise PSD curve.',
    explanation: 'Integrated noise is the total noise power obtained by integrating the noise power spectral density (PSD) over the bandwidth of interest.'
  },
  {
    id: 175,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is "Unity Gain"?',
    options: [
      'A gain of 0 which would mean the amplifier has no output signal for any input level',
      'A gain of 1 (or 0 dB) which means the output signal is identical to the input signal',
      'A gain of infinity which would mean the amplifier is an ideal voltage-controlled source',
      'A gain of -1 which would mean the amplifier is an ideal inverting stage in the circuit'
    ],
    correctAnswer: 1,
    hint: 'The output equals the input.',
    explanation: 'Unity gain means the output signal has the same magnitude as the input signal.'
  },
  {
    id: 176,
    category: 'Biasing',
    difficulty: 'Easy',
    text: 'What is a "Current Source"?',
    options: [
      'A battery that provides a constant voltage until it is depleted of its stored energy',
      'A circuit that provides a constant DC current regardless of the voltage across it',
      'A resistor that limits the current flow in a circuit based on the Ohm\'s law principle',
      'A capacitor that stores electrical energy in an electric field between two plates'
    ],
    correctAnswer: 1,
    hint: 'It is the dual of a voltage source.',
    explanation: 'An ideal current source delivers a constant current to a load, regardless of the load resistance or voltage.'
  },
  {
    id: 177,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is "Vth Mismatch"?',
    options: [
      'The threshold voltage changing with time due to the aging and the stress effects',
      'The difference in threshold voltage between two supposedly identical transistors',
      'The threshold voltage being too high which prevents the transistor from turning on',
      'The threshold voltage being zero which would mean the transistor is always on'
    ],
    correctAnswer: 1,
    hint: 'It is a major source of current mirror error.',
    explanation: 'Vth mismatch is caused by random variations in doping and oxide charges, leading to errors in current mirrors and differential pairs.'
  },
  {
    id: 178,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is "Gate Capacitance" (Cgg)?',
    options: [
      'The capacitance of the gate oxide which is determined by the oxide thickness level',
      'The total capacitance looking into the gate terminal of the MOSFET in operation',
      'The capacitance between gate and source which is a major part of the input load',
      'The capacitance between gate and drain which is multiplied by the Miller effect'
    ],
    correctAnswer: 1,
    hint: 'It includes Cgs, Cgd, and Cgb.',
    explanation: 'Gate capacitance is the total capacitance associated with the gate terminal, which affects the speed and input impedance of the transistor.'
  },
  {
    id: 179,
    category: 'Amplifiers',
    difficulty: 'Easy',
    text: 'What is "Voltage Gain"?',
    options: [
      'The ratio of output voltage to input voltage which represents the signal gain',
      'The total voltage of the circuit which is the sum of the DC and AC components',
      'The power of the voltage which is the square of the voltage divided by resistance',
      'The noise of the voltage which is the random fluctuation of the voltage level'
    ],
    correctAnswer: 0,
    hint: 'Av = Vout / Vin.',
    explanation: 'Voltage gain is the factor by which an amplifier increases the amplitude of an input voltage signal.'
  },
  {
    id: 180,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Poly" (Polysilicon)?',
    options: [
      'A type of plastic that is used for the packaging of the integrated circuit chip',
      'A material used to form the gate of a MOSFET in the standard CMOS fabrication',
      'A type of metal that is used for the interconnects because of its low resistivity',
      'A type of substrate that is used for the growth of the epitaxial silicon layer'
    ],
    correctAnswer: 1,
    hint: 'It is deposited on top of the gate oxide.',
    explanation: 'Polysilicon is a polycrystalline form of silicon used as the gate electrode in most CMOS processes.'
  },
  {
    id: 181,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is "SNR" (Signal-to-Noise Ratio)?',
    options: [
      'The ratio of signal power to noise power which measures the quality of signal',
      'The total power of the system which is the sum of the signal and noise powers',
      'The speed of the signal which is determined by the bandwidth of the signal path',
      'The gain of the signal which represents how much the signal is amplified by stage'
    ],
    correctAnswer: 0,
    hint: 'It measures signal quality.',
    explanation: 'SNR is a measure used to compare the level of a desired signal to the level of background noise.'
  },
  {
    id: 182,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is a "Dominant Pole"?',
    options: [
      'The pole at the highest frequency which has the least effect on the stability',
      'The pole at the lowest frequency that determines the primary bandwidth of system',
      'A pole at DC which would mean the system has an infinite gain at zero frequency',
      'A pole that is zero which would mean the system has a constant gain at all freq'
    ],
    correctAnswer: 1,
    hint: 'It "dominates" the frequency response.',
    explanation: 'A dominant pole is one that is much lower in frequency than any other poles, effectively determining the system\'s bandwidth and stability.'
  },
  {
    id: 183,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is "Self-Biasing"?',
    options: [
      'Biasing yourself which is a non-technical and incorrect definition in this context',
      'A technique where the bias current is generated by the circuit itself using feedback',
      'Using a battery to provide a constant bias voltage to the transistors in the stage',
      'Using a resistor divider to scale down the supply voltage to a desired bias level'
    ],
    correctAnswer: 1,
    hint: 'Beta-multipliers are self-biased.',
    explanation: 'Self-biasing circuits use their own output to set their operating point, often making them less sensitive to supply voltage variations.'
  },
  {
    id: 184,
    category: 'Current Mirrors',
    difficulty: 'Easy',
    text: 'What is an "NMOS Current Mirror"?',
    options: [
      'A mirror made of PMOS transistors that are used to source current from the supply',
      'A current mirror using NMOS transistors to sink current to ground in the circuit',
      'A mirror for light that is used in the optical communication systems on the chip',
      'A digital mirror that is used to replicate the logic levels in the digital blocks'
    ],
    correctAnswer: 1,
    hint: 'It uses N-type transistors.',
    explanation: 'An NMOS current mirror typically uses two NMOS transistors to replicate a reference current, sinking it from a load to ground.'
  },
  {
    id: 185,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Substrate Current"?',
    options: [
      'Current in the substrate which is the main current flowing through the device body',
      'Current flowing into the substrate due to impact ionization or leakage in device',
      'Current in the gate which is caused by the tunneling of carriers through oxide',
      'Current in the source which is the total current entering the transistor channel'
    ],
    correctAnswer: 1,
    hint: 'It can trigger latch-up.',
    explanation: 'Substrate current is often a parasitic current caused by high-energy carriers in the channel or leakage from junctions.'
  },
  {
    id: 186,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is "Output Swing"?',
    options: [
      'The output moving back and forth which is a non-technical and incorrect definition',
      'The range of output voltage over which the amplifier remains linear in operation',
      'The maximum current that the output stage can deliver to the load without clipping',
      'The speed of the output signal which is determined by the slew rate of the stage'
    ],
    correctAnswer: 1,
    hint: 'It is limited by the supply rails.',
    explanation: 'Output swing is the maximum peak-to-peak voltage that an amplifier can produce at its output without significant distortion.'
  },
  {
    id: 187,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "Density Rule" in layout?',
    options: [
      'How many people are in the lab which is a non-technical and incorrect definition',
      'A requirement that the percentage of a layer must be within a certain range on die',
      'The density of the silicon lattice which is a physical property of the material',
      'The density of the air in the cleanroom which is controlled by the HVAC system'
    ],
    correctAnswer: 1,
    hint: 'It is for CMP uniformity.',
    explanation: 'Density rules ensure that the metal or poly density is uniform across the wafer, which is critical for the Chemical Mechanical Polishing (CMP) process.'
  },
  {
    id: 188,
    category: 'Noise',
    difficulty: 'Easy',
    text: 'What is "Pink Noise"?',
    options: [
      'Noise that is pink in color when viewed on a spectrum analyzer in the laboratory',
      'Noise with a 1/f power spectral density which is dominant at low frequencies',
      'Noise from the supply which is caused by the switching of the digital logic gates',
      'Thermal noise which is caused by the random motion of the charge carriers in device'
    ],
    correctAnswer: 1,
    hint: 'It is another name for Flicker Noise.',
    explanation: 'Pink noise has equal power per octave, resulting in a 1/f power spectral density.'
  },
  {
    id: 189,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is "Root Locus"?',
    options: [
      'A place for roots which is a non-technical and incorrect definition in this context',
      'A graphical method for showing how the poles of a system change as a parameter',
      'A type of plot that is used to visualize the frequency response of the amplifier',
      'A math formula that is used to calculate the gain and the phase of the system'
    ],
    correctAnswer: 1,
    hint: 'It is used in control theory.',
    explanation: 'Root locus analysis is used to determine the stability and transient response of a feedback system as the loop gain is changed.'
  },
  {
    id: 190,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is a "Current Sink"?',
    options: [
      'A place where current goes to die which is a non-technical and incorrect definition',
      'A circuit that draws a constant current from a load to ground in the amplifier',
      'A battery that provides a constant voltage to the circuit until it is depleted',
      'A resistor that limits the current flow in a circuit based on the Ohm\'s law'
    ],
    correctAnswer: 1,
    hint: 'NMOS mirrors are often sinks.',
    explanation: 'A current sink is a type of current source that pulls current from a load towards a lower potential (usually ground).'
  },
  {
    id: 191,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is a "PMOS Current Mirror"?',
    options: [
      'A mirror made of NMOS transistors that are used to sink current to the ground node',
      'A current mirror using PMOS transistors to source current from Vdd in the circuit',
      'A mirror for light that is used in the optical communication systems on the chip',
      'A digital mirror that is used to replicate the logic levels in the digital blocks'
    ],
    correctAnswer: 1,
    hint: 'It uses P-type transistors.',
    explanation: 'A PMOS current mirror typically uses two PMOS transistors to replicate a reference current, sourcing it from Vdd to a load.'
  },
  {
    id: 192,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is "Threshold Voltage" (Vth)?',
    options: [
      'The maximum voltage that the transistor can handle before the gate oxide breaks',
      'The gate-source voltage at which a conduction channel forms in the substrate region',
      'The breakdown voltage of the drain-to-substrate junction in the MOSFET device',
      'The supply voltage of the circuit which determines the maximum signal swing level'
    ],
    correctAnswer: 1,
    hint: 'It is the "turn-on" voltage.',
    explanation: 'Threshold voltage is the minimum Vgs required to create an inversion layer (channel) between the source and drain.'
  },
  {
    id: 193,
    category: 'Amplifiers',
    difficulty: 'Easy',
    text: 'What is "Input Impedance"?',
    options: [
      'The resistance looking into the input of a circuit which determines the loading',
      'The total resistance of the circuit which is the sum of all the resistive elements',
      'The speed of the input signal which is determined by the bandwidth of the path',
      'The noise of the input signal which is caused by the random motion of carriers'
    ],
    correctAnswer: 0,
    hint: 'It affects loading.',
    explanation: 'Input impedance is the equivalent resistance and reactance that a circuit presents to a signal source.'
  },
  {
    id: 194,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Tap" (or Well Contact)?',
    options: [
      'A place to get water which is a non-technical and incorrect definition in this context',
      'A connection to the substrate or well to set its potential and prevent latch-up',
      'A connection to the gate terminal which is used to control the channel conductivity',
      'A connection to the source terminal which is used to inject carriers into channel'
    ],
    correctAnswer: 1,
    hint: 'It is essential for biasing the body.',
    explanation: 'Taps are ohmic contacts to the substrate (P-tap) or N-well (N-tap) that ensure they are at the correct potential (Gnd or Vdd).'
  },
  {
    id: 195,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Noise Bandwidth"?',
    options: [
      'The bandwidth of the signal which is determined by the frequency content of data',
      'The bandwidth of an ideal rectangular filter that would pass the same noise power',
      'The total bandwidth of the system which is the range of frequencies it can handle',
      'The speed of the noise which is determined by the frequency of the fluctuations'
    ],
    correctAnswer: 1,
    hint: 'It is usually slightly larger than the 3dB bandwidth.',
    explanation: 'Noise bandwidth is a theoretical concept used to simplify noise calculations by replacing a complex filter shape with an equivalent rectangular one.'
  },
  {
    id: 196,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is "Closed-Loop" gain?',
    options: [
      'The gain without feedback which is the open-loop gain of the amplifier stage itself',
      'The gain of a system when feedback is applied which is determined by the loop gain',
      'The total gain of the system which is the product of the gains of all the stages',
      'The noise gain of the system which represents how much the input noise is amplified'
    ],
    correctAnswer: 1,
    hint: 'Acl = A / (1 + AB).',
    explanation: 'Closed-loop gain is the overall gain of a system including the effects of the feedback loop.'
  },
  {
    id: 197,
    category: 'Biasing',
    difficulty: 'Easy',
    text: 'What is a "Current Source"?',
    options: [
      'A battery that provides a constant voltage until it is depleted of its stored energy',
      'A circuit that provides a constant DC current regardless of the voltage across it',
      'A resistor that limits the current flow in a circuit based on the Ohm\'s law principle',
      'A capacitor that stores electrical energy in an electric field between two plates'
    ],
    correctAnswer: 1,
    hint: 'It is the dual of a voltage source.',
    explanation: 'An ideal current source delivers a constant current to a load, regardless of the load resistance or voltage.'
  },
  {
    id: 198,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is "Degeneration" in a current mirror?',
    options: [
      'The mirror getting worse over time due to the aging and the stress of the devices',
      'Adding resistors in the sources of the transistors to improve matching and impedance',
      'Reducing the area of the transistors in the current mirror to save the layout space',
      'Increasing the noise of the current mirror by adding more active devices to the stage'
    ],
    correctAnswer: 1,
    hint: 'It uses local negative feedback.',
    explanation: 'Source degeneration uses resistors to provide local feedback, which reduces the effect of Vth mismatch and increases the output resistance.'
  },
  {
    id: 199,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'What is "Drain" of a MOSFET?',
    options: [
      'Where current enters the device from the external circuit in the source terminal',
      'Where current leaves (for NMOS) to the external circuit in the drain terminal node',
      'The control terminal of the MOSFET which determines the conductivity of the channel',
      'The substrate connection which is used to bias the body of the transistor to a level'
    ],
    correctAnswer: 1,
    hint: 'It is one of the two main terminals.',
    explanation: 'The drain is the terminal of the MOSFET through which carriers (electrons in NMOS, holes in PMOS) leave the channel.'
  },
  {
    id: 200,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is "Open-Loop" gain?',
    options: [
      'The gain with feedback which is the closed-loop gain of the system with the loop',
      'The gain of an amplifier without any feedback applied which is the open-loop gain',
      'The total gain of the system which is the product of the gains of all the stages',
      'The noise gain of the system which represents how much the input noise is amplified'
    ],
    correctAnswer: 1,
    hint: 'It is usually very high.',
    explanation: 'Open-loop gain is the gain of the amplifier itself, before any external feedback network is connected.'
  }
];
