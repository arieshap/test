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
    options: ['Velocity Saturation', 'Surface Scattering', 'Impact Ionization', 'Drain-Induced Barrier Lowering'],
    correctAnswer: 1,
    hint: 'Consider the interaction of carriers with the Si-SiO2 interface.',
    explanation: 'As the gate voltage increases, the vertical electric field pulls carriers closer to the Si-SiO2 interface, increasing surface scattering and reducing effective mobility.'
  },
  {
    id: 2,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the physical cause of the "Reverse Short Channel Effect" (RSCE) observed in some modern processes?',
    options: ['Channel length modulation', 'Halo (pocket) implantation', 'Gate leakage', 'Sub-threshold swing degradation'],
    correctAnswer: 1,
    hint: 'Think about the non-uniform doping introduced to prevent punch-through.',
    explanation: 'Halo or pocket implants increase the local doping concentration near the source and drain junctions. As the channel length decreases, these regions overlap more, effectively increasing the average channel doping and thus the threshold voltage.'
  },
  {
    id: 3,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'Which parameter determines the "Subthreshold Swing" (S) of a MOSFET?',
    options: ['Channel width', 'Gate-to-channel capacitance and depletion capacitance', 'Drain current', 'Supply voltage'],
    correctAnswer: 1,
    hint: 'S = 60 * (1 + Cd/Cox) mV/decade at room temperature.',
    explanation: 'The subthreshold swing is determined by the capacitive divider between the gate oxide capacitance (Cox) and the depletion region capacitance (Cd).'
  },
  {
    id: 4,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What happens to the threshold voltage (Vth) of an NMOS transistor as the source-to-body voltage (Vsb) increases?',
    options: ['Vth decreases', 'Vth increases', 'Vth remains constant', 'Vth becomes negative'],
    correctAnswer: 1,
    hint: 'This is known as the Body Effect.',
    explanation: 'Increasing Vsb increases the depletion charge in the substrate, which requires a larger gate-source voltage to invert the channel, thus increasing Vth.'
  },
  {
    id: 5,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'Which MOSFET parameter is most affected by "Velocity Saturation"?',
    options: ['Threshold voltage', 'Transconductance (gm) at high Vgs', 'Gate capacitance', 'Subthreshold swing'],
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
    options: ['ΔI/I is proportional to ΔVth / (Vgs - Vth)', 'ΔI/I is proportional to ΔVth * (Vgs - Vth)', 'ΔI/I is independent of Vgs', 'ΔI/I is proportional to ΔVth^2'],
    correctAnswer: 0,
    hint: 'Differentiate the saturation current equation with respect to Vth.',
    explanation: 'Current mismatch due to Vth variation is inversely proportional to the overdrive voltage (Vgs - Vth). Increasing overdrive improves matching.'
  },
  {
    id: 7,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is the main advantage of a "Low-Voltage Cascode" (Wide-Swing) current mirror over a standard cascode mirror?',
    options: ['Higher output impedance', 'Lower minimum output voltage (Vmin = 2 * Vov)', 'Better matching', 'Lower noise'],
    correctAnswer: 1,
    hint: 'Think about the biasing of the cascode device gate.',
    explanation: 'By biasing the cascode device gate at Vov + Vgs instead of Vgs + Vgs, the output can swing down to 2*Vov while keeping both devices in saturation.'
  },
  {
    id: 8,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the primary advantage of a Cascode Current Mirror over a simple Current Mirror?',
    options: ['Lower minimum output voltage (headroom)', 'Higher output impedance', 'Lower power consumption', 'Simpler layout'],
    correctAnswer: 1,
    hint: 'Consider the small-signal resistance looking into the drain of the output transistor.',
    explanation: 'A cascode current mirror significantly increases the output impedance (by a factor of approximately gm*ro), which improves current matching and reduces sensitivity to output voltage variations.'
  },
  {
    id: 9,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the main drawback of using a Wilson Current Mirror in a low-voltage CMOS process?',
    options: ['Poor matching', 'Low output impedance', 'High voltage headroom requirement', 'High noise'],
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
    options: ['Ad increases', 'Ad decreases', 'Ad remains constant', 'Ad becomes zero'],
    correctAnswer: 0,
    hint: 'Ad = gm * Rd. How does gm change with Id?',
    explanation: 'Since gm is proportional to sqrt(Id) in saturation, increasing the tail current increases the transconductance of the input pair, thus increasing the gain.'
  },
  {
    id: 11,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'Which factor is the dominant contributor to the input offset voltage of a CMOS differential pair with an active load?',
    options: ['Gate-source voltage mismatch of the input pair', 'Threshold voltage mismatch of the active load', 'W/L mismatch of the input pair', 'All of the above'],
    correctAnswer: 3,
    hint: 'Offset is a combination of mismatch in both the input devices and the load.',
    explanation: 'The total input-referred offset includes contributions from the input transistors (Vth and W/L mismatch) and the load transistors (referred back to the input by the ratio of transconductances).'
  },
  {
    id: 12,
    category: 'Differential Pairs',
    difficulty: 'Medium',
    text: 'In a CMOS differential pair with a tail current source, what happens to the common-mode gain if the tail current source impedance is increased?',
    options: ['Increases', 'Decreases', 'Stays the same', 'Becomes infinite'],
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
    options: ['Increased gain', 'Improved linearity', 'Reduced output impedance', 'Increased noise'],
    correctAnswer: 1,
    hint: 'Feedback reduces the dependence of gain on the non-linear gm.',
    explanation: 'Source degeneration provides local negative feedback, which linearizes the transconductance at the cost of reduced gain.'
  },
  {
    id: 14,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'What is the "Gain-Bandwidth Product" (GBW) of a single-pole Op-Amp with transconductance gm and compensation capacitor Cc?',
    options: ['gm / Cc', 'gm * Cc', '1 / (gm * Cc)', 'gm / (2 * pi * Cc)'],
    correctAnswer: 3,
    hint: 'GBW = unity-gain frequency in Hz.',
    explanation: 'The unity-gain frequency (f_u) is given by gm / (2 * pi * Cc). This is a fundamental metric for Op-Amp speed.'
  },
  {
    id: 15,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a folded-cascode Op-Amp, what is the primary reason for "folding" the signal path?',
    options: ['To increase the gain', 'To allow the input common-mode range to include one of the supply rails', 'To reduce power consumption', 'To improve the slew rate'],
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
    options: ['At the input of the first stage', 'At the output of the first stage (due to Miller effect)', 'At the output of the second stage', 'At the power supply'],
    correctAnswer: 1,
    hint: 'Miller compensation multiplies the capacitance at this node.',
    explanation: 'Miller compensation creates a very large effective capacitance at the output of the first stage, pushing its pole to a very low frequency.'
  },
  {
    id: 17,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'A Right-Half-Plane (RHP) zero in a Miller-compensated Op-Amp is caused by:',
    options: ['The feedforward path through the compensation capacitor', 'The feedback path through the compensation capacitor', 'The load capacitance', 'The input capacitance'],
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
    options: ['45 degrees', '60 degrees', '76 degrees', '90 degrees'],
    correctAnswer: 2,
    hint: 'Think about the relationship between phase margin and damping factor zeta.',
    explanation: 'A phase margin of approximately 76 degrees corresponds to a damping factor of 1 (critically damped). 60 degrees is often the practical target for a good balance of speed and stability.'
  },
  {
    id: 19,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'In a feedback system, if the loop gain magnitude is 1 and the phase is -180 degrees, the system will:',
    options: ['Be stable', 'Oscillate', 'Have infinite gain', 'Be over-damped'],
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
    options: ['4kT', '4kTR', '4kT/R', 'sqrt(4kTR)'],
    correctAnswer: 1,
    hint: 'Units are V^2/Hz.',
    explanation: 'The voltage noise density is 4kTR. The current noise density is 4kT/R.'
  },
  {
    id: 21,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'To minimize the input-referred noise of a CMOS differential pair, should you increase or decrease the transconductance (gm) of the input transistors?',
    options: ['Increase gm', 'Decrease gm', 'gm has no effect on noise', 'Set gm to zero'],
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
    options: ['To increase transistor speed', 'To reduce substrate coupling and prevent latch-up', 'To act as a heat sink', 'To provide a low-resistance gate path'],
    correctAnswer: 1,
    hint: 'Think about isolating sensitive analog blocks from noisy digital blocks.',
    explanation: 'Guard rings provide a low-impedance path to ground or Vdd for substrate currents, reducing noise coupling and preventing the parasitic thyristor action that causes latch-up.'
  },
  {
    id: 23,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'In a "Common-Centroid" layout, why are the devices cross-coupled (e.g., ABBA)?',
    options: ['To save area', 'To cancel out linear gradients in process parameters', 'To reduce parasitic capacitance', 'To increase the breakdown voltage'],
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
    options: ['Its current is constant over temperature', 'Its current increases linearly with temperature', 'Its current decreases linearly with temperature', 'Its current is zero at room temperature'],
    correctAnswer: 1,
    hint: 'PTAT = Proportional to Absolute Temperature.',
    explanation: 'A PTAT current is generated by the difference in Vbe of two bipolar transistors (or Vgs of MOSFETs in subthreshold) and is used in bandgap references to cancel the negative temperature coefficient of Vbe.'
  },
  {
    id: 25,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A Bandgap Reference circuit typically targets an output voltage of approximately:',
    options: ['0.7 V', '1.2 V', '2.5 V', 'Vdd / 2'],
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
    options: ['High voltage gain', 'High input impedance and low output impedance', 'High output swing', 'Low power consumption'],
    correctAnswer: 1,
    hint: 'It acts as a voltage buffer.',
    explanation: 'The source follower has a voltage gain of slightly less than 1, but its high input impedance and low output impedance make it an excellent buffer.'
  },
  {
    id: 27,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is "Channel Length Modulation" (CLM) analogous to in a BJT?',
    options: ['Early Effect', 'Miller Effect', 'Kirk Effect', 'Webster Effect'],
    correctAnswer: 0,
    hint: 'Both involve the shortening of the effective control region as output voltage increases.',
    explanation: 'CLM in MOSFETs is the shortening of the inversion layer as Vds increases, similar to the Early Effect in BJTs where the base width narrows as Vce increases.'
  },
  {
    id: 28,
    category: 'Frequency Response',
    difficulty: 'Medium',
    text: 'What is the "Unity-Gain Frequency" (f_T) of a MOSFET?',
    options: ['The frequency where voltage gain is 1', 'The frequency where current gain is 1', 'The frequency where power gain is 1', 'The maximum frequency of oscillation'],
    correctAnswer: 1,
    hint: 'f_T = gm / (2 * pi * (Cgs + Cgd)).',
    explanation: 'f_T is the frequency at which the small-signal current gain of the transistor drops to unity. It is a measure of the intrinsic speed of the device.'
  },
  {
    id: 29,
    category: 'Noise',
    difficulty: 'Easy',
    text: 'Which type of noise is caused by the discrete nature of electric charge?',
    options: ['Thermal noise', 'Shot noise', 'Flicker noise', 'Burst noise'],
    correctAnswer: 1,
    hint: 'It is dominant in junctions with a potential barrier.',
    explanation: 'Shot noise arises from the fact that current is composed of individual electrons crossing a barrier at random times.'
  },
  {
    id: 30,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Antenna Effect" in CMOS fabrication?',
    options: ['The ability of the chip to receive radio signals', 'Charge accumulation on metal wires during plasma etching that can damage gate oxides', 'The radiation of heat from the chip', 'The coupling between adjacent metal layers'],
    correctAnswer: 1,
    hint: 'It occurs during the manufacturing process, not during operation.',
    explanation: 'During plasma etching, long metal wires can act as antennas, collecting ions. If connected to a gate, this charge can build up and break down the thin gate oxide.'
  },
  {
    id: 31,
    category: 'Biasing',
    difficulty: 'Easy',
    text: 'A "Start-up Circuit" is required in a self-biasing reference because:',
    options: ['The circuit is too slow', 'The circuit has a stable "zero-current" state that it might get stuck in', 'To protect against overvoltage', 'To reduce noise'],
    correctAnswer: 1,
    hint: 'The circuit needs a "kick" to start conducting.',
    explanation: 'Many self-biased circuits have two stable operating points: the desired one and one where all currents are zero. A start-up circuit ensures it reaches the desired state.'
  },
  {
    id: 32,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'Which amplifier topology has the highest output impedance?',
    options: ['Common-Source', 'Common-Drain', 'Cascode', 'Differential Pair'],
    correctAnswer: 2,
    hint: 'Cascode "shields" the output from the input.',
    explanation: 'The cascode topology increases the output impedance by a factor of approximately (gm * ro) of the cascode device.'
  },
  {
    id: 33,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the "Gate-Induced Drain Leakage" (GIDL)?',
    options: ['Leakage through the gate oxide', 'Leakage from drain to substrate due to high field under the gate overlap', 'Leakage from source to drain in subthreshold', 'Leakage due to cosmic rays'],
    correctAnswer: 1,
    hint: 'It occurs when Vg is low and Vd is high.',
    explanation: 'GIDL is a leakage current that occurs in the gate-drain overlap region when a high field causes band-to-band tunneling in the substrate.'
  },
  {
    id: 34,
    category: 'Frequency Response',
    difficulty: 'Medium',
    text: 'The "Bode Plot" of a first-order system shows a phase shift of ____ at the corner frequency.',
    options: ['0 degrees', '-45 degrees', '-90 degrees', '-180 degrees'],
    correctAnswer: 1,
    hint: 'Phase = -arctan(f/fc).',
    explanation: 'At the corner frequency (f = fc), the phase shift of a single-pole system is -45 degrees.'
  },
  {
    id: 35,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'Why does a "Zero" in the transfer function increase the phase?',
    options: ['It adds +90 degrees of phase shift (for a LHP zero)', 'It subtracts 90 degrees of phase shift', 'It has no effect on phase', 'It makes the system oscillate'],
    correctAnswer: 0,
    hint: 'Zeros "lead" the phase, poles "lag" the phase.',
    explanation: 'A Left-Half-Plane (LHP) zero increases the phase by 90 degrees over a decade, which can be used to compensate for the phase lag of poles.'
  },
  {
    id: 36,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'To improve the "Compliance Voltage" of a current mirror, should you use a standard cascode or a low-voltage cascode?',
    options: ['Standard cascode', 'Low-voltage cascode', 'Neither', 'A simple mirror'],
    correctAnswer: 1,
    hint: 'Compliance voltage is the range over which the mirror works.',
    explanation: 'A low-voltage (wide-swing) cascode allows the output to go lower (closer to ground) while staying in saturation, thus increasing the compliance range.'
  },
  {
    id: 37,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'The "Body Effect" coefficient (gamma) depends on:',
    options: ['Substrate doping concentration', 'Channel length', 'Drain voltage', 'Gate width'],
    correctAnswer: 0,
    hint: 'Gamma = sqrt(2 * q * epsilon_si * Nsub) / Cox.',
    explanation: 'The body effect is directly related to the doping level of the substrate (Nsub). Higher doping leads to a stronger body effect.'
  },
  {
    id: 38,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Class AB" output stage, the purpose of the biasing diodes (or Vbe multiplier) is to:',
    options: ['Increase gain', 'Eliminate crossover distortion', 'Reduce power', 'Increase bandwidth'],
    correctAnswer: 1,
    hint: 'It keeps the output transistors slightly "on" even with no signal.',
    explanation: 'By providing a small quiescent current, the biasing network ensures that one transistor starts conducting before the other turns off, eliminating the "dead zone" known as crossover distortion.'
  },
  {
    id: 39,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'Which MOSFET noise source can be reduced by increasing the gate area (W * L)?',
    options: ['Thermal noise', 'Flicker noise (1/f)', 'Shot noise', 'White noise'],
    correctAnswer: 1,
    hint: 'Flicker noise is inversely proportional to Area.',
    explanation: 'Flicker noise is caused by surface traps. Increasing the area averages out the effect of these traps, reducing the noise power.'
  },
  {
    id: 40,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "STI Stress" in sub-micron CMOS layout?',
    options: ['The stress of meeting a deadline', 'Mechanical stress from Shallow Trench Isolation that changes carrier mobility', 'Electrical stress from high voltage', 'Thermal stress from the package'],
    correctAnswer: 1,
    hint: 'It depends on the distance from the transistor to the isolation edge.',
    explanation: 'The mechanical stress exerted by the STI oxide on the silicon channel changes the mobility and Vth of the transistor, a phenomenon known as the Well Proximity Effect or LOD (Length of Diffusion) effect.'
  },
  {
    id: 41,
    category: 'Differential Pairs',
    difficulty: 'Medium',
    text: 'What is the "Common-Mode Input Range" (ICMR) of a differential pair?',
    options: ['The range of input voltages where the gain is maximum', 'The range of input voltages where all transistors remain in saturation', 'The range of output voltages', 'The supply voltage range'],
    correctAnswer: 1,
    hint: 'Inputs must not push the tail source or the input pair into triode/cutoff.',
    explanation: 'ICMR is the range of common-mode input voltages for which the amplifier operates correctly (i.e., all devices are in saturation).'
  },
  {
    id: 42,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Velocity Overshoot"?',
    options: ['Carriers moving faster than light', 'Carriers temporarily exceeding their steady-state saturation velocity in very short channels', 'The gate voltage exceeding Vdd', 'The drain current exceeding its limit'],
    correctAnswer: 1,
    hint: 'It occurs when the channel is shorter than the mean free path.',
    explanation: 'In extremely short channels, carriers can travel ballistically for a short distance, exceeding the saturation velocity before they undergo scattering.'
  },
  {
    id: 43,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Power Supply Rejection Ratio" (PSRR)?',
    options: ['The ratio of output power to input power', 'The ability of the amplifier to reject noise from the power supply', 'The maximum supply voltage', 'The power consumption'],
    correctAnswer: 1,
    hint: 'PSRR = Gain_signal / Gain_supply_noise.',
    explanation: 'PSRR measures how much of the power supply ripple or noise appears at the output. High PSRR is critical for analog circuits in noisy environments.'
  },
  {
    id: 44,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Chopper Stabilization"?',
    options: ['A way to cool the chip', 'A technique to remove DC offset and 1/f noise by modulating the signal to a higher frequency', 'A method to increase power', 'A type of layout'],
    correctAnswer: 1,
    hint: 'It involves "chopping" the input signal.',
    explanation: 'Chopping modulates the signal to a high frequency, amplifies it, and then demodulates it. This pushes the DC offset and low-frequency noise (1/f) out of the signal band.'
  },
  {
    id: 45,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is the "Well Proximity Effect" (WPE)?',
    options: ['The effect of the supply voltage on the well', 'The shift in Vth due to ions scattering off the photoresist edge during well implantation', 'The coupling between two adjacent wells', 'The breakdown of the well-substrate junction'],
    correctAnswer: 1,
    hint: 'It depends on how close the transistor is to the edge of the N-well or P-well.',
    explanation: 'WPE causes transistors near the well edge to have different threshold voltages than those in the center, requiring careful layout for matched pairs.'
  },
  {
    id: 46,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'In a "Widlar Current Source", the resistor is placed in the ____ of the output transistor.',
    options: ['Gate', 'Source', 'Drain', 'Body'],
    correctAnswer: 1,
    hint: 'It uses local feedback to reduce the output current.',
    explanation: 'The Widlar source uses a resistor in the source of the output transistor to create a Vgs difference, allowing for very small output currents with reasonable resistor values.'
  },
  {
    id: 47,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'In a "Cascode" amplifier, the input transistor is usually a ____ and the cascode transistor is a ____.',
    options: ['Common-Source, Common-Gate', 'Common-Gate, Common-Source', 'Common-Source, Common-Drain', 'Common-Drain, Common-Source'],
    correctAnswer: 0,
    hint: 'CS-CG stack.',
    explanation: 'The standard cascode is a Common-Source stage followed by a Common-Gate stage. The CG stage provides a low-impedance load to the CS stage, minimizing Miller effect.'
  },
  {
    id: 48,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the "Output Compliance" of a current mirror?',
    options: ['The accuracy of the current ratio', 'The range of output voltage over which the mirror maintains high impedance', 'The temperature stability', 'The power consumption'],
    correctAnswer: 1,
    hint: 'It defines the "flat" region of the I-V curve.',
    explanation: 'Compliance voltage is the minimum voltage required at the output node to keep the mirror transistors in the saturation region.'
  },
  {
    id: 49,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'How does a "Slew Rate" limitation manifest in a differential amplifier?',
    options: ['As a frequency-dependent gain', 'As a maximum rate of change of the output voltage when a large step is applied', 'As an increase in noise', 'As a decrease in CMRR'],
    correctAnswer: 1,
    hint: 'It is limited by the tail current charging the compensation capacitor.',
    explanation: 'When a large input step is applied, the entire tail current is diverted to one side, charging the internal capacitors at a constant maximum rate (I_tail / C).'
  },
  {
    id: 50,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Early Voltage" (V_A) in a MOSFET?',
    options: ['The voltage at which the device turns on', 'The extrapolated intercept of the I-V curves on the Vds axis', 'The breakdown voltage', 'The supply voltage'],
    correctAnswer: 1,
    hint: 'It is a measure of channel length modulation.',
    explanation: 'V_A = 1 / lambda. It represents how much the drain current increases with Vds due to channel length modulation.'
  },
  {
    id: 51,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'What is "Neutralization" in high-frequency amplifier design?',
    options: ['Turning off the circuit', 'Using a feedback path to cancel out the effect of Cgd', 'Grounding the substrate', 'Reducing the supply voltage'],
    correctAnswer: 1,
    hint: 'It is used to improve stability and reverse isolation.',
    explanation: 'Neutralization involves adding a feedback path (often with a capacitor) that provides a signal of equal magnitude but opposite phase to the Cgd feedforward, canceling its effect.'
  },
  {
    id: 52,
    category: 'Stability',
    difficulty: 'Easy',
    text: 'A "Unity-Gain Buffer" is an amplifier with a gain of:',
    options: ['0', '1', 'Infinite', '-1'],
    correctAnswer: 1,
    hint: 'Unity = 1.',
    explanation: 'A unity-gain buffer (like a source follower) replicates the input voltage at the output with high current drive.'
  },
  {
    id: 53,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is the "Noise Figure" (NF) of an amplifier?',
    options: ['The total noise at the output', 'The ratio of input SNR to output SNR', 'The gain of the noise', 'The temperature of the noise'],
    correctAnswer: 1,
    hint: 'It measures how much the amplifier degrades the signal quality.',
    explanation: 'Noise Figure is a measure of the degradation in signal-to-noise ratio as a signal passes through a system.'
  },
  {
    id: 54,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is the "Latch-up" phenomenon in CMOS?',
    options: ['The chip getting stuck in a loop', 'The formation of a low-impedance path between Vdd and Gnd due to parasitic bipolar transistors', 'The gate oxide breaking down', 'The metal wires melting'],
    correctAnswer: 1,
    hint: 'It involves parasitic PNPN structures.',
    explanation: 'Latch-up is a parasitic thyristor effect in CMOS where a PNPN structure is triggered, creating a short circuit between power rails.'
  },
  {
    id: 55,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "Cascode Current Source" provides higher output impedance by a factor of approximately:',
    options: ['gm', 'ro', 'gm * ro', '1 / gm'],
    correctAnswer: 2,
    hint: 'It is the product of the transconductance and the output resistance.',
    explanation: 'The cascode transistor "boosts" the output impedance of the bottom transistor by its intrinsic gain (gm * ro).'
  },
  {
    id: 56,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Two-Stage" Op-Amp, the first stage usually provides ____ and the second stage provides ____.',
    options: ['High gain, high swing', 'High swing, high gain', 'Low gain, low swing', 'High noise, low noise'],
    correctAnswer: 0,
    hint: 'The first stage is usually a differential pair.',
    explanation: 'The first stage (diff-pair) provides most of the voltage gain, while the second stage (common-source) provides the output voltage swing.'
  },
  {
    id: 57,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Sub-threshold Swing" (S) limit at room temperature?',
    options: ['20 mV/dec', '60 mV/dec', '100 mV/dec', '0 mV/dec'],
    correctAnswer: 1,
    hint: 'It is determined by the Boltzmann constant.',
    explanation: 'The theoretical limit for subthreshold swing is ~60 mV/decade at room temperature (300K).'
  },
  {
    id: 58,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'What is the "Gain Margin" in a feedback system?',
    options: ['The amount of gain at 0 degrees phase', 'The amount of gain reduction needed to reach instability when the phase is -180 degrees', 'The maximum gain of the amplifier', 'The gain at DC'],
    correctAnswer: 1,
    hint: 'It measures how far the system is from oscillation in terms of gain.',
    explanation: 'Gain margin is the reciprocal of the loop gain magnitude at the frequency where the phase is -180 degrees.'
  },
  {
    id: 59,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'A "Lead Compensator" adds a ____ and a ____ to the loop gain.',
    options: ['Pole, Zero', 'Zero, Pole', 'Two Poles', 'Two Zeros'],
    correctAnswer: 1,
    hint: 'The zero comes before the pole in frequency.',
    explanation: 'A lead compensator adds a zero at a lower frequency and a pole at a higher frequency to provide a phase "boost" in the signal band.'
  },
  {
    id: 60,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Correlated Double Sampling" (CDS)?',
    options: ['Sampling twice to increase speed', 'A technique to remove offset and 1/f noise by subtracting two samples', 'A type of ADC', 'A layout technique'],
    correctAnswer: 1,
    hint: 'It is commonly used in image sensors and switched-capacitor circuits.',
    explanation: 'CDS samples the noise/offset first, then the signal+noise/offset, and subtracts them to cancel out the low-frequency noise components.'
  },
  {
    id: 61,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Common-Mode Rejection Ratio" (CMRR) of an ideal differential amplifier?',
    options: ['0', '1', 'Infinite', '100'],
    correctAnswer: 2,
    hint: 'Ideal amplifiers reject all common-mode signals.',
    explanation: 'An ideal differential amplifier has infinite CMRR, meaning it perfectly rejects any signal that is common to both inputs.'
  },
  {
    id: 62,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the "Drain-Induced Barrier Lowering" (DIBL) coefficient?',
    options: ['Delta Vth / Delta Vds', 'Delta Id / Delta Vds', 'Delta Vgs / Delta Vds', 'Delta Vth / Delta Vgs'],
    correctAnswer: 0,
    hint: 'It measures the sensitivity of Vth to Vds.',
    explanation: 'DIBL is quantified as the change in threshold voltage per unit change in drain-source voltage.'
  },
  {
    id: 63,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'In a current mirror, why is it better to use a larger L for the transistors?',
    options: ['To increase speed', 'To increase output impedance and improve matching', 'To reduce area', 'To increase power'],
    correctAnswer: 1,
    hint: 'Higher L reduces channel length modulation.',
    explanation: 'Increasing the channel length L reduces the lambda parameter, which increases the output impedance and improves the accuracy of the current mirror.'
  },
  {
    id: 64,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'What is the effect of "Tail Capacitance" on the CMRR at high frequencies?',
    options: ['It increases CMRR', 'It decreases CMRR', 'It has no effect', 'It makes CMRR zero at DC'],
    correctAnswer: 1,
    hint: 'Capacitance provides a low-impedance path at high frequencies.',
    explanation: 'At high frequencies, the parasitic capacitance at the tail node provides a low-impedance path for common-mode signals, reducing the effective tail impedance and thus the CMRR.'
  },
  {
    id: 65,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'Which amplifier stage is typically used as the output stage of an Op-Amp to drive low-impedance loads?',
    options: ['Common-Source', 'Common-Gate', 'Source Follower (Common-Drain)', 'Cascode'],
    correctAnswer: 2,
    hint: 'It has very low output impedance.',
    explanation: 'The source follower acts as a voltage buffer, providing the necessary current drive for low-impedance loads without significantly loading the preceding high-gain stage.'
  },
  {
    id: 66,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'What is the "Miller Multiplication" factor for a capacitor Cgd in a CS amplifier with gain -A?',
    options: ['1 + A', '1 - A', 'A', '1 / A'],
    correctAnswer: 0,
    hint: 'The effective input capacitance is Cgd * (1 - Av).',
    explanation: 'For an inverting amplifier with gain -A, the effective input capacitance due to Cgd is Cgd * (1 - (-A)) = Cgd * (1 + A).'
  },
  {
    id: 67,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'A "Lag Compensator" is used to:',
    options: ['Increase the bandwidth', 'Improve the steady-state error by increasing low-frequency gain', 'Add phase lead', 'Eliminate all poles'],
    correctAnswer: 1,
    hint: 'It adds a pole at a very low frequency.',
    explanation: 'A lag compensator increases the low-frequency gain of the system, which improves accuracy (reduces steady-state error), but it typically reduces the bandwidth.'
  },
  {
    id: 68,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is the "Noise Temperature" of a system?',
    options: ['The physical temperature of the chip', 'An equivalent temperature that would produce the same noise power', 'The temperature at which the chip melts', 'The temperature of the cooling fan'],
    correctAnswer: 1,
    hint: 'It is related to the Noise Figure.',
    explanation: 'Noise temperature is a way of expressing the noise of a system in terms of the temperature of a resistor that would produce the same noise power spectral density.'
  },
  {
    id: 69,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'Why are "Interdigitated" layouts used for matched transistors?',
    options: ['To save area', 'To improve matching by interleaving the fingers of two transistors', 'To increase speed', 'To reduce power'],
    correctAnswer: 1,
    hint: 'It averages out local process variations.',
    explanation: 'Interdigitation interleaves the fingers of two transistors (e.g., ABAB), ensuring that both devices experience a similar average environment across their layout area.'
  },
  {
    id: 70,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is the "Curvature Correction" in a bandgap reference?',
    options: ['Correcting the layout shape', 'Compensating for the non-linear temperature dependence of Vbe', 'Straightening the wires', 'Reducing the supply voltage'],
    correctAnswer: 1,
    hint: 'Vbe is not perfectly linear with temperature.',
    explanation: 'The Vbe of a BJT has a T*ln(T) term that causes a non-linear "curvature" in the bandgap output. Curvature correction circuits add a non-linear term to cancel this effect.'
  },
  {
    id: 71,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Saturation Velocity" of electrons in Silicon?',
    options: ['10^5 cm/s', '10^7 cm/s', '10^9 cm/s', 'Speed of light'],
    correctAnswer: 1,
    hint: 'It is the speed limit for carriers.',
    explanation: 'At high electric fields, the velocity of electrons in silicon saturates at approximately 10^7 cm/s due to increased scattering with the lattice.'
  },
  {
    id: 72,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Telescopic" Op-Amp, the input common-mode range is ____ compared to a folded-cascode.',
    options: ['Larger', 'Smaller', 'The same', 'Infinite'],
    correctAnswer: 1,
    hint: 'Telescopic designs have more transistors stacked in a single branch.',
    explanation: 'Telescopic Op-Amps have a very restricted input common-mode range because all transistors (input pair and cascodes) must remain in saturation within the available supply voltage.'
  },
  {
    id: 73,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the "Current Transfer Ratio" of a current mirror?',
    options: ['The ratio of output current to input current', 'The speed of the mirror', 'The noise of the mirror', 'The area of the mirror'],
    correctAnswer: 0,
    hint: 'It is usually determined by the (W/L) ratios.',
    explanation: 'The current transfer ratio is the ratio of the output current to the reference input current, ideally equal to the ratio of the aspect ratios (W/L) of the two transistors.'
  },
  {
    id: 74,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'What is "Common-Mode Feedback" (CMFB) used for?',
    options: ['To increase differential gain', 'To stabilize the output common-mode voltage in fully differential amplifiers', 'To reduce noise', 'To increase bandwidth'],
    correctAnswer: 1,
    hint: 'Fully differential amplifiers have high-impedance nodes that can drift.',
    explanation: 'In fully differential amplifiers, the output common-mode voltage is not well-defined by the differential feedback loop and requires a separate CMFB circuit to keep it at a desired level.'
  },
  {
    id: 75,
    category: 'Frequency Response',
    difficulty: 'Medium',
    text: 'The "Phase Margin" is measured at the frequency where the loop gain magnitude is:',
    options: ['0 dB (Unity)', 'Infinite', '-180 dB', '10 dB'],
    correctAnswer: 0,
    hint: 'Unity gain frequency.',
    explanation: 'Phase margin is defined as 180 degrees plus the phase of the loop gain at the unity-gain frequency (where |T| = 1 or 0 dB).'
  },
  {
    id: 76,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is "Feedforward Compensation"?',
    options: ['Adding a path that bypasses a slow stage to improve high-frequency response', 'Increasing the supply voltage', 'Adding more gain', 'Reducing the load'],
    correctAnswer: 0,
    hint: 'It creates a high-frequency path around a dominant pole.',
    explanation: 'Feedforward compensation provides a parallel path for high-frequency signals, bypassing the slow stages of the amplifier to improve speed and stability.'
  },
  {
    id: 77,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is the "Noise Floor"?',
    options: ['The floor of the lab', 'The minimum level of noise present in a system', 'The maximum signal level', 'The gain of the noise'],
    correctAnswer: 1,
    hint: 'It limits the smallest detectable signal.',
    explanation: 'The noise floor is the level of background noise in a system, below which signals cannot be reliably detected.'
  },
  {
    id: 78,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "Electro-Migration" (EM)?',
    options: ['Electrons moving too fast', 'The transport of material caused by the gradual movement of ions in a conductor due to high current density', 'The chip moving on the board', 'Magnetic interference'],
    correctAnswer: 1,
    hint: 'It can cause metal wires to break over time.',
    explanation: 'Electro-migration is a reliability concern where high current densities cause metal atoms to move, leading to voids (opens) or hillocks (shorts) in the interconnects.'
  },
  {
    id: 79,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "Supply-Independent" bias circuit is designed to:',
    options: ['Work without a battery', 'Maintain a constant output current regardless of variations in Vdd', 'Increase power', 'Reduce area'],
    correctAnswer: 1,
    hint: 'It uses self-biasing techniques.',
    explanation: 'Supply-independent biasing ensures that the performance of the analog blocks remains stable even if the power supply voltage fluctuates.'
  },
  {
    id: 80,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Hot Carrier Injection" (HCI)?',
    options: ['Injecting hot coffee into the chip', 'High-energy carriers damaging the gate oxide near the drain', 'The chip getting too hot', 'A type of packaging'],
    correctAnswer: 1,
    hint: 'It is a long-term reliability issue.',
    explanation: 'HCI occurs when carriers gain enough energy from the high electric field near the drain to be injected into the gate oxide, causing a shift in Vth over time.'
  },
  {
    id: 81,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Slew Rate" of an Op-Amp?',
    options: ['The maximum output voltage', 'The maximum rate of change of the output voltage', 'The gain of the amplifier', 'The bandwidth'],
    correctAnswer: 1,
    hint: 'Units are V/us.',
    explanation: 'Slew rate is the maximum speed at which the output of an Op-Amp can change, usually limited by the internal charging of capacitors.'
  },
  {
    id: 82,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'In a "High-Swing" cascode mirror, the bias voltage for the cascode gate is typically set to:',
    options: ['Vgs + Vov', '2 * Vgs', 'Vdd', 'Vgs'],
    correctAnswer: 0,
    hint: 'It allows the output to swing down to 2 * Vov.',
    explanation: 'By setting the cascode gate to Vgs + Vov, the bottom transistor is kept at the edge of saturation (Vds = Vov), maximizing the output swing.'
  },
  {
    id: 83,
    category: 'Differential Pairs',
    difficulty: 'Medium',
    text: 'What is the "Differential-Mode Input Range"?',
    options: ['The range of common-mode voltages', 'The range of differential input voltages for which the amplifier remains linear', 'The supply voltage', 'The output range'],
    correctAnswer: 1,
    hint: 'It is limited by the tail current and the input pair transconductance.',
    explanation: 'The differential input range is the maximum difference between the two inputs before one side of the differential pair turns off.'
  },
  {
    id: 84,
    category: 'Frequency Response',
    difficulty: 'Hard',
    text: 'What is the "Group Delay" of a filter?',
    options: ['The time it takes for a group of people to design it', 'The negative derivative of the phase with respect to frequency', 'The gain of the filter', 'The bandwidth'],
    correctAnswer: 1,
    hint: 'It represents the time delay of the signal envelope.',
    explanation: 'Group delay is a measure of the time delay of the amplitude envelope of a signal as it passes through a system, important for phase-sensitive applications.'
  },
  {
    id: 85,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'A "Dominant Pole" is a pole that is:',
    options: ['The strongest pole', 'At a much lower frequency than all other poles', 'At the highest frequency', 'At DC'],
    correctAnswer: 1,
    hint: 'It determines the primary bandwidth of the system.',
    explanation: 'A dominant pole is one that is significantly lower in frequency than others, such that it alone determines the roll-off and stability of the system.'
  },
  {
    id: 86,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Noise Matching" in LNA design?',
    options: ['Matching the noise of two transistors', 'Selecting the input source impedance to minimize the noise figure', 'Making the noise zero', 'Matching the gain to the noise'],
    correctAnswer: 1,
    hint: 'It is different from power matching.',
    explanation: 'Noise matching involves choosing an optimum source impedance (Zopt) that results in the minimum possible noise figure for the amplifier.'
  },
  {
    id: 87,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Dummy Fill" in CMOS layout?',
    options: ['Filling the chip with extra transistors', 'Adding non-functional metal patterns to ensure uniform metal density for CMP', 'Filling the chip with glue', 'Adding extra ground pins'],
    correctAnswer: 1,
    hint: 'CMP = Chemical Mechanical Polishing.',
    explanation: 'Dummy fill is added to empty areas of the layout to maintain a uniform metal density, which is required for the CMP process to achieve a flat surface.'
  },
  {
    id: 88,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is the "Power-Down" mode in a bias circuit?',
    options: ['When the power goes out', 'A state where all currents are reduced to zero to save power when the block is inactive', 'Reducing the supply voltage', 'Turning off the lights'],
    correctAnswer: 1,
    hint: 'It is used in mobile devices to extend battery life.',
    explanation: 'Power-down mode uses switches to cut off the bias currents, ensuring the circuit consumes near-zero power when not in use.'
  },
  {
    id: 89,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Gate Leakage" current?',
    options: ['Current leaking from source to drain', 'Current tunneling through the thin gate dielectric', 'Current leaking to the substrate', 'Current leaking from the package'],
    correctAnswer: 1,
    hint: 'It becomes significant as the gate oxide gets thinner.',
    explanation: 'In very advanced processes, the gate oxide is so thin that electrons can tunnel through it, creating a parasitic gate current.'
  },
  {
    id: 90,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Rail-to-Rail" input stage, what is the main challenge?',
    options: ['Keeping the gain constant as the common-mode voltage changes', 'Increasing the speed', 'Reducing the area', 'Increasing the supply voltage'],
    correctAnswer: 0,
    hint: 'It usually uses both NMOS and PMOS input pairs.',
    explanation: 'A rail-to-rail input stage must transition between NMOS and PMOS pairs (or use both), which can cause the transconductance (and thus gain) to vary across the input range.'
  },
  {
    id: 91,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the "Minimum Voltage" (Vmin) for a cascode current mirror?',
    options: ['Vgs', 'Vov', 'Vgs + Vov', '2 * Vov'],
    correctAnswer: 2,
    hint: 'It must keep both transistors in saturation.',
    explanation: 'For a standard cascode mirror, the output must be at least Vgs + Vov to keep both the bottom and top transistors saturated.'
  },
  {
    id: 92,
    category: 'Differential Pairs',
    difficulty: 'Hard',
    text: 'What is the "Dynamic Range" of an amplifier?',
    options: ['The range of frequencies', 'The ratio of the maximum undistorted signal to the noise floor', 'The supply voltage range', 'The gain range'],
    correctAnswer: 1,
    hint: 'It is usually expressed in dB.',
    explanation: 'Dynamic range is the ratio between the largest signal the circuit can handle without excessive distortion and the smallest signal it can detect (the noise floor).'
  },
  {
    id: 93,
    category: 'Frequency Response',
    difficulty: 'Medium',
    text: 'A "High-Pass Filter" has a gain that ____ as frequency increases.',
    options: ['Decreases', 'Increases (up to a limit)', 'Stays constant', 'Oscillates'],
    correctAnswer: 1,
    hint: 'It passes high frequencies.',
    explanation: 'A high-pass filter attenuates low frequencies and allows high frequencies to pass with minimal attenuation.'
  },
  {
    id: 94,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is the "Nyquist Criterion" for stability?',
    options: ['A way to count poles', 'A graphical method to determine stability by looking at the loop gain plot in the complex plane', 'A type of filter', 'A rule for sampling'],
    correctAnswer: 1,
    hint: 'It involves the number of encirclements of the -1 point.',
    explanation: 'The Nyquist criterion relates the stability of a closed-loop system to the number of encirclements of the (-1, 0) point by the Nyquist plot of the open-loop transfer function.'
  },
  {
    id: 95,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is "White Noise"?',
    options: ['Noise that looks white', 'Noise with a constant power spectral density across all frequencies', 'Noise that only exists at high frequencies', 'Noise from the power supply'],
    correctAnswer: 1,
    hint: 'Like white light, it contains all frequencies equally.',
    explanation: 'White noise is a random signal with a flat power spectral density, meaning it has equal power in any band of a given width.'
  },
  {
    id: 96,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "Metal Slotting"?',
    options: ['Cutting holes in metal wires to reduce stress and improve reliability', 'Using metal to make a slot machine', 'Reducing the width of wires', 'Adding extra metal layers'],
    correctAnswer: 0,
    hint: 'It is used for very wide metal lines.',
    explanation: 'Wide metal lines can experience significant mechanical stress. Slotting (adding long holes) relieves this stress and prevents delamination or cracking.'
  },
  {
    id: 97,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "Current Reference" should ideally have ____ output impedance.',
    options: ['Zero', 'Infinite', '1 Ohm', 'The same as the load'],
    correctAnswer: 1,
    hint: 'Ideal current sources do not change current with voltage.',
    explanation: 'An ideal current source has infinite output impedance, meaning the current it provides is completely independent of the voltage across it.'
  },
  {
    id: 98,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the "Sub-threshold Slope" (S) related to?',
    options: ['The speed of the transistor', 'The efficiency of the gate in controlling the channel current below Vth', 'The breakdown voltage', 'The area'],
    correctAnswer: 1,
    hint: 'It is measured in mV/decade.',
    explanation: 'Subthreshold slope indicates how much the gate voltage must change to change the drain current by one order of magnitude in the subthreshold region.'
  },
  {
    id: 99,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Input Impedance" of an ideal Op-Amp?',
    options: ['0', 'Infinite', '50 Ohms', '1 kOhm'],
    correctAnswer: 1,
    hint: 'Ideal Op-Amps draw no input current.',
    explanation: 'An ideal Op-Amp has infinite input impedance, meaning it does not load the preceding stage at all.'
  },
  {
    id: 100,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is the "Systematic Mismatch" in a current mirror?',
    options: ['Mismatch due to random variations', 'Mismatch due to design choices like different Vds or layout environment', 'Mismatch due to temperature', 'Mismatch due to noise'],
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
    options: ['It increases the gain', 'It moves the RHP zero to the LHP or to infinity', 'It reduces the power consumption', 'It increases the output swing'],
    correctAnswer: 1,
    hint: 'It targets the feedforward path.',
    explanation: 'The nulling resistor (Rz) is used to cancel the Right-Half-Plane (RHP) zero or move it to the Left-Half-Plane (LHP) to improve phase margin. Ideally, Rz = 1/gm2.'
  },
  {
    id: 102,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'Which short-channel effect causes the threshold voltage to decrease as the channel length is reduced?',
    options: ['Body Effect', 'Vth Roll-off', 'Reverse Short Channel Effect', 'Narrow Channel Effect'],
    correctAnswer: 1,
    hint: 'It is the opposite of RSCE.',
    explanation: 'Vth roll-off occurs because the source and drain depletion regions occupy a significant portion of the channel, reducing the gate voltage required to reach inversion.'
  },
  {
    id: 103,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'In a switched-capacitor circuit, what is the total integrated thermal noise (kT/C noise) at the output of a sampling capacitor C?',
    options: ['kT/C', 'sqrt(kT/C)', '4kTR', 'kT'],
    correctAnswer: 1,
    hint: 'The units should be Volts.',
    explanation: 'The noise power is kT/C (V^2). The root-mean-square (RMS) noise voltage is sqrt(kT/C).'
  },
  {
    id: 104,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is the "Pelgrom Law" used for in analog layout?',
    options: ['Calculating power dissipation', 'Predicting the standard deviation of mismatch between two identical devices', 'Determining the maximum current density', 'Calculating the gate delay'],
    correctAnswer: 1,
    hint: 'Sigma(delta_P) = A_P / sqrt(W*L).',
    explanation: 'Pelgrom\'s Law states that the mismatch between two identical transistors is inversely proportional to the square root of their area (W*L).'
  },
  {
    id: 105,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is the "Phase Reversal" phenomenon in some Op-Amps?',
    options: ['The output phase shifting by 180 degrees', 'The output voltage jumping to the opposite rail when the input exceeds the common-mode range', 'The gain becoming negative', 'The system oscillating at DC'],
    correctAnswer: 1,
    hint: 'It happens when the input stage transistors enter triode or cutoff.',
    explanation: 'Phase reversal occurs when the input common-mode voltage exceeds the allowed range, causing the input stage to malfunction and the output to flip to the opposite power rail.'
  },
  {
    id: 106,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is the purpose of a "Beta-Multiplier" reference circuit?',
    options: ['To multiply the current gain of a BJT', 'To generate a supply-independent current', 'To increase the bandwidth', 'To reduce the noise'],
    correctAnswer: 1,
    hint: 'It uses a resistor and a ratio of transistor sizes.',
    explanation: 'A Beta-Multiplier (or Constant-gm) circuit generates a current that is relatively independent of the supply voltage by using a self-biasing loop.'
  },
  {
    id: 107,
    category: 'Differential Pairs',
    difficulty: 'Medium',
    text: 'In a fully differential amplifier, what is the primary function of the "Common-Mode Feedback" (CMFB) circuit?',
    options: ['To increase the differential gain', 'To set and stabilize the output common-mode voltage', 'To reduce the differential noise', 'To increase the input impedance'],
    correctAnswer: 1,
    hint: 'High-gain nodes in fully differential circuits are floating in common-mode.',
    explanation: 'CMFB is essential in fully differential amplifiers to prevent the output common-mode voltage from drifting to the supply rails due to mismatches.'
  },
  {
    id: 108,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Gate-Induced Drain Leakage" (GIDL) caused by?',
    options: ['Impact ionization in the channel', 'Band-to-band tunneling in the gate-drain overlap region', 'Thermal generation in the depletion region', 'Subthreshold conduction'],
    correctAnswer: 1,
    hint: 'It occurs at high Vds and low Vgs.',
    explanation: 'GIDL is caused by high electric fields in the gate-drain overlap region, leading to band-to-band tunneling and a significant leakage current.'
  },
  {
    id: 109,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Miller Effect" in a Common-Source amplifier?',
    options: ['The reduction of gain at high frequencies', 'The multiplication of the gate-drain capacitance (Cgd) by the gain', 'The increase in output impedance', 'The reduction of noise'],
    correctAnswer: 1,
    hint: 'Cin = Cgs + Cgd(1 + |Av|).',
    explanation: 'The Miller Effect causes the feedback capacitance Cgd to appear much larger at the input, significantly reducing the bandwidth of high-gain stages.'
  },
  {
    id: 110,
    category: 'Layout',
    difficulty: 'Easy',
    text: 'Why are "Dummies" used at the ends of a transistor array?',
    options: ['To increase the total current', 'To ensure all functional transistors have the same environment and etching characteristics', 'To act as capacitors', 'To provide extra ground connections'],
    correctAnswer: 1,
    hint: 'Edge effects during fabrication.',
    explanation: 'Dummy transistors ensure that the functional devices in the center of an array experience uniform processing, improving matching.'
  },
  {
    id: 111,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'Which noise source is characterized by a 1/f frequency dependence?',
    options: ['Thermal Noise', 'Shot Noise', 'Flicker Noise', 'Burst Noise'],
    correctAnswer: 2,
    hint: 'It is also known as Pink Noise.',
    explanation: 'Flicker noise (1/f noise) is dominant at low frequencies and is primarily caused by carrier trapping and de-trapping at the Si-SiO2 interface.'
  },
  {
    id: 112,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'A system with a Phase Margin of 0 degrees is:',
    options: ['Stable', 'Critically stable (oscillatory)', 'Unstable', 'Over-damped'],
    correctAnswer: 1,
    hint: 'It is right on the edge of the Barkhausen criterion.',
    explanation: 'A phase margin of 0 degrees means the system has a phase shift of -180 degrees at the unity-gain frequency, leading to sustained oscillations.'
  },
  {
    id: 113,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is the "Curvature" in a bandgap reference voltage?',
    options: ['The physical shape of the circuit', 'The non-linear temperature dependence of the Vbe voltage', 'The variation of Vdd', 'The noise floor'],
    correctAnswer: 1,
    hint: 'Vbe = Vg0 - (Vg0 - Vbe0)(T/T0) - ...',
    explanation: 'The Vbe voltage has a non-linear temperature dependence (T*lnT), which causes the bandgap output to "curve" rather than being perfectly flat over temperature.'
  },
  {
    id: 114,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'In a Cascode Current Mirror, the "shielding" effect refers to:',
    options: ['Protecting the circuit from EMI', 'Reducing the variation of the bottom transistor\'s Vds as the output voltage changes', 'Reducing the noise', 'Increasing the speed'],
    correctAnswer: 1,
    hint: 'The cascode device keeps the bottom device\'s drain voltage constant.',
    explanation: 'The cascode transistor keeps the drain voltage of the mirror transistor nearly constant, minimizing current variations due to channel length modulation.'
  },
  {
    id: 115,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is the "Subthreshold Swing" (S) of an ideal MOSFET at 300K?',
    options: ['26 mV/decade', '60 mV/decade', '120 mV/decade', '0 mV/decade'],
    correctAnswer: 1,
    hint: 'S = (ln 10) * (kT/q) * (1 + Cd/Cox).',
    explanation: 'At room temperature (300K), the thermal voltage (kT/q) is ~26mV. (ln 10) * 26mV is approximately 60mV/decade, the theoretical limit for a MOSFET.'
  },
  {
    id: 116,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the main advantage of a "Folded Cascode" Op-Amp over a "Telescopic" Op-Amp?',
    options: ['Higher gain', 'Higher output swing and wider input common-mode range', 'Lower power consumption', 'Lower noise'],
    correctAnswer: 1,
    hint: 'Think about the stacking of transistors.',
    explanation: 'Folded cascode Op-Amps allow the input and output to be at different DC levels, providing better swing and common-mode range than the telescopic version.'
  },
  {
    id: 117,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is the "LOD" (Length of Diffusion) effect?',
    options: ['The length of the transistor', 'The dependence of Vth and mobility on the distance from the gate to the STI edge', 'The resistance of the diffusion layer', 'The capacitance of the diffusion layer'],
    correctAnswer: 1,
    hint: 'It is a mechanical stress effect.',
    explanation: 'Mechanical stress from the Shallow Trench Isolation (STI) affects the silicon lattice, changing the electrical properties of transistors based on their proximity to the STI edge.'
  },
  {
    id: 118,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Noise Folding" in a sampled-data system?',
    options: ['The noise becoming smaller', 'High-frequency noise being aliased into the signal band due to sampling', 'The noise being cancelled', 'The noise becoming white'],
    correctAnswer: 1,
    hint: 'Think about the Nyquist theorem.',
    explanation: 'When a signal is sampled, noise from frequencies higher than half the sampling rate is "folded" or aliased back into the baseband, increasing the total noise power.'
  },
  {
    id: 119,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is the "Right-Half-Plane" (RHP) zero in a Miller-compensated amplifier?',
    options: ['A zero that improves stability', 'A zero that adds phase lag and increases gain, potentially causing instability', 'A pole at high frequency', 'A zero at DC'],
    correctAnswer: 1,
    hint: 'It comes from the feedforward path through Cc.',
    explanation: 'The RHP zero adds 90 degrees of phase lag (like a pole) but increases gain (like a zero), which is a "worst of both worlds" scenario for stability.'
  },
  {
    id: 120,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "PTAT" current source has a temperature coefficient that is:',
    options: ['Negative', 'Positive', 'Zero', 'Infinite'],
    correctAnswer: 1,
    hint: 'PTAT = Proportional to Absolute Temperature.',
    explanation: 'A PTAT current increases linearly with absolute temperature (T).'
  },
  {
    id: 121,
    category: 'Current Mirrors',
    difficulty: 'Easy',
    text: 'To mirror a current accurately, the two transistors should ideally have the same:',
    options: ['Width only', 'Length only', 'Vgs, Temperature, and Process parameters', 'Drain voltage only'],
    correctAnswer: 2,
    hint: 'Matching requires identical conditions.',
    explanation: 'Accurate current mirroring requires the transistors to be identical in process, have the same Vgs, and be at the same temperature.'
  },
  {
    id: 122,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Body Effect"?',
    options: ['The effect of the transistor\'s size on its speed', 'The change in threshold voltage due to a voltage difference between the source and the bulk', 'The heating of the transistor body', 'The leakage through the substrate'],
    correctAnswer: 1,
    hint: 'Vth = Vth0 + gamma * (sqrt(2phi + Vsb) - sqrt(2phi)).',
    explanation: 'The body effect describes how the threshold voltage increases as the source-to-bulk voltage (Vsb) increases.'
  },
  {
    id: 123,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'In a "Class AB" amplifier, what is the purpose of the quiescent current?',
    options: ['To maximize gain', 'To eliminate crossover distortion', 'To reduce power consumption', 'To increase input impedance'],
    correctAnswer: 1,
    hint: 'It keeps the output transistors slightly "on".',
    explanation: 'A small quiescent current ensures that the output transistors are not completely off during the signal zero-crossing, preventing crossover distortion.'
  },
  {
    id: 124,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Electromigration"?',
    options: ['The movement of electrons in a wire', 'The physical movement of metal atoms due to high current density, leading to wire failure', 'The migration of ions in the substrate', 'The movement of the chip in the package'],
    correctAnswer: 1,
    hint: 'It is a reliability concern for power lines.',
    explanation: 'High current density can "push" metal atoms, eventually creating voids (breaks) or hillocks (shorts) in the interconnects.'
  },
  {
    id: 125,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'How can you reduce the "Flicker Noise" of a MOSFET?',
    options: ['Increase the drain current', 'Increase the gate area (W * L)', 'Decrease the gate oxide thickness', 'Increase the temperature'],
    correctAnswer: 1,
    hint: 'Noise power is inversely proportional to Area.',
    explanation: 'Increasing the gate area (W*L) reduces flicker noise because it averages out the effects of individual traps at the oxide interface.'
  },
  {
    id: 126,
    category: 'Stability',
    difficulty: 'Easy',
    text: 'What is the "Unity-Gain Bandwidth" (UGBW)?',
    options: ['The frequency where the gain is 0 dB', 'The maximum frequency the amplifier can handle', 'The gain at DC', 'The frequency where the phase is -180 degrees'],
    correctAnswer: 0,
    hint: 'Gain = 1.',
    explanation: 'UGBW is the frequency at which the open-loop gain of the amplifier drops to unity (1 or 0 dB).'
  },
  {
    id: 127,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is the "Start-up" problem in self-biased circuits?',
    options: ['The circuit takes too long to turn on', 'The circuit has a stable "zero-current" state and may never start conducting', 'The circuit consumes too much power at start-up', 'The circuit oscillates at start-up'],
    correctAnswer: 1,
    hint: 'It needs a "kick" to reach the desired operating point.',
    explanation: 'Self-biased circuits often have two stable states: the intended one and one where all currents are zero. A start-up circuit is needed to "push" the circuit out of the zero-current state.'
  },
  {
    id: 128,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is the "Wilson Current Mirror" primarily known for?',
    options: ['Low voltage headroom', 'High output impedance and reduced sensitivity to CLM', 'Low noise', 'High speed'],
    correctAnswer: 1,
    hint: 'It uses a feedback loop to stabilize the current.',
    explanation: 'The Wilson current mirror uses feedback to significantly increase the output impedance, though it requires more voltage headroom than a simple mirror.'
  },
  {
    id: 129,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is "Velocity Saturation"?',
    options: ['The maximum speed of the chip', 'The phenomenon where carrier velocity stops increasing linearly with the electric field', 'The speed of light in silicon', 'The saturation of the drain current'],
    correctAnswer: 1,
    hint: 'It limits the current in short-channel devices.',
    explanation: 'At high electric fields, carriers collide so frequently with the lattice that their average velocity reaches a maximum limit (saturation velocity).'
  },
  {
    id: 130,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Slew Rate" (SR) of an Op-Amp?',
    options: ['The maximum output voltage', 'The maximum rate of change of the output voltage', 'The gain-bandwidth product', 'The input offset voltage'],
    correctAnswer: 1,
    hint: 'Units are V/microsecond.',
    explanation: 'Slew rate is the maximum speed at which the output can change, usually limited by the tail current charging the compensation capacitor.'
  },
  {
    id: 131,
    category: 'Layout',
    difficulty: 'Easy',
    text: 'What is a "Guard Ring"?',
    options: ['A decorative ring on the chip', 'A ring of substrate contacts used to isolate sensitive circuits and prevent latch-up', 'A ring of metal for power distribution', 'A ring of dummy transistors'],
    correctAnswer: 1,
    hint: 'It collects stray substrate carriers.',
    explanation: 'Guard rings provide a low-impedance path to ground or Vdd for substrate currents, reducing noise coupling and preventing latch-up.'
  },
  {
    id: 132,
    category: 'Noise',
    difficulty: 'Easy',
    text: 'What is "Thermal Noise"?',
    options: ['Noise caused by the temperature of the room', 'Noise caused by the random motion of charge carriers in a conductor', 'Noise from the power supply', 'Noise from the clock signal'],
    correctAnswer: 1,
    hint: 'It is also called Johnson-Nyquist noise.',
    explanation: 'Thermal noise is present in all resistive elements and is caused by the random thermal agitation of electrons.'
  },
  {
    id: 133,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is the "Bode Plot" used for?',
    options: ['Calculating power', 'Visualizing the frequency response (magnitude and phase) of a system', 'Designing the layout', 'Measuring noise'],
    correctAnswer: 1,
    hint: 'It uses logarithmic scales.',
    explanation: 'Bode plots are used to analyze the gain and phase of a system over frequency, which is crucial for determining stability.'
  },
  {
    id: 134,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'A "Bandgap Reference" circuit produces a voltage that is approximately:',
    options: ['0.7 V', '1.2 V', '2.5 V', 'Vdd'],
    correctAnswer: 1,
    hint: 'It is related to the silicon bandgap energy.',
    explanation: 'A bandgap reference combines PTAT and CTAT components to produce a stable ~1.2V output, which is the extrapolated bandgap of silicon at 0K.'
  },
  {
    id: 135,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is the "Compliance Voltage" of a current source?',
    options: ['The maximum voltage it can tolerate', 'The range of output voltage over which the current remains constant', 'The accuracy of the current', 'The supply voltage'],
    correctAnswer: 1,
    hint: 'It defines the "working" range of the source.',
    explanation: 'Compliance voltage is the range of output voltages for which the current source maintains its high output impedance and constant current.'
  },
  {
    id: 136,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Drain-Induced Barrier Lowering" (DIBL)?',
    options: ['The drain voltage increasing the threshold voltage', 'The drain voltage lowering the potential barrier for carriers, effectively reducing Vth', 'The breakdown of the drain junction', 'The leakage through the gate'],
    correctAnswer: 1,
    hint: 'It is a short-channel effect.',
    explanation: 'In short-channel devices, the drain electric field can penetrate deep into the channel, lowering the barrier at the source and reducing the threshold voltage.'
  },
  {
    id: 137,
    category: 'Amplifiers',
    difficulty: 'Easy',
    text: 'What is the "Common-Mode Rejection Ratio" (CMRR)?',
    options: ['The ratio of differential gain to common-mode gain', 'The ratio of input to output', 'The maximum input voltage', 'The noise figure'],
    correctAnswer: 0,
    hint: 'It measures how well an amplifier rejects common signals.',
    explanation: 'CMRR is a measure of an amplifier\'s ability to reject signals that appear simultaneously and in-phase on both input terminals.'
  },
  {
    id: 138,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "Antenna Effect" during fabrication?',
    options: ['The chip acting as a radio', 'Charge accumulation on long metal wires during plasma etching that can damage gate oxides', 'The coupling between metal layers', 'The radiation of heat'],
    correctAnswer: 1,
    hint: 'It is a manufacturing reliability issue.',
    explanation: 'Long metal lines can collect charge from the plasma during etching. If this charge has no path to ground except through a thin gate oxide, it can cause oxide breakdown.'
  },
  {
    id: 139,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Shot Noise"?',
    options: ['Noise from a gun', 'Noise due to the discrete nature of electric charge crossing a potential barrier', 'Noise from the substrate', 'Noise from the package'],
    correctAnswer: 1,
    hint: 'It is proportional to the DC current.',
    explanation: 'Shot noise arises from the fact that current is not a continuous flow but consists of individual electrons crossing a barrier at random times.'
  },
  {
    id: 140,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is "Compensation" in Op-Amp design?',
    options: ['Paying the designer', 'Modifying the open-loop frequency response to ensure closed-loop stability', 'Reducing the power', 'Increasing the gain'],
    correctAnswer: 1,
    hint: 'Miller compensation is a common type.',
    explanation: 'Compensation involves adding poles or zeros (usually via capacitors) to ensure the phase margin is sufficient for stability when feedback is applied.'
  },
  {
    id: 141,
    category: 'Biasing',
    difficulty: 'Easy',
    text: 'What does "PTAT" stand for?',
    options: ['Power Towards All Terminals', 'Proportional To Absolute Temperature', 'Process Tolerant Analog Technology', 'Passive Thermal Analog Terminal'],
    correctAnswer: 1,
    hint: 'It relates to temperature.',
    explanation: 'PTAT stands for Proportional To Absolute Temperature.'
  },
  {
    id: 142,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'Why is a "Common-Centroid" layout used for current mirrors?',
    options: ['To save area', 'To cancel out the effects of linear gradients (like temperature or oxide thickness) across the die', 'To increase speed', 'To reduce parasitic capacitance'],
    correctAnswer: 1,
    hint: 'It is a matching technique.',
    explanation: 'Common-centroid layout arranges the transistors of a pair symmetrically around a central point to average out spatial variations in process parameters.'
  },
  {
    id: 143,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Early Effect" in MOSFETs?',
    options: ['The transistor turning on too early', 'The dependence of drain current on Vds in the saturation region (Channel Length Modulation)', 'The breakdown of the gate oxide', 'The increase in speed'],
    correctAnswer: 1,
    hint: 'It is named after the BJT effect.',
    explanation: 'Though strictly a BJT term, it is often used in MOSFETs to refer to Channel Length Modulation (CLM), where Id increases with Vds.'
  },
  {
    id: 144,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is the "Input Offset Voltage"?',
    options: ['The voltage at the input when the output is zero', 'The DC voltage required at the input to make the output zero', 'The maximum input voltage', 'The noise at the input'],
    correctAnswer: 1,
    hint: 'It is caused by mismatches.',
    explanation: 'Input offset voltage is the differential DC voltage that must be applied to the inputs to force the output to zero (or the common-mode level).'
  },
  {
    id: 145,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Latch-up"?',
    options: ['The chip getting stuck', 'A parasitic thyristor (SCR) effect that creates a short circuit between Vdd and Gnd', 'The gate oxide breaking', 'The metal melting'],
    correctAnswer: 1,
    hint: 'It involves parasitic BJT structures.',
    explanation: 'Latch-up occurs when parasitic NPN and PNP transistors in a CMOS structure form a positive feedback loop, creating a high-current path between power rails.'
  },
  {
    id: 146,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is the "Noise Floor" of a system?',
    options: ['The physical floor of the lab', 'The level of background noise below which signals cannot be detected', 'The maximum noise level', 'The gain of the noise'],
    correctAnswer: 1,
    hint: 'It limits sensitivity.',
    explanation: 'The noise floor is the measure of the signal created from the sum of all the noise sources and unwanted signals within a system.'
  },
  {
    id: 147,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is "Phase Margin" (PM)?',
    options: ['The difference between the phase and -180 degrees at the unity-gain frequency', 'The total phase shift', 'The gain at -180 degrees', 'The frequency of oscillation'],
    correctAnswer: 0,
    hint: 'It measures how stable a feedback system is.',
    explanation: 'Phase margin is the amount of additional phase lag at the unity-gain frequency required to bring the system to the verge of instability.'
  },
  {
    id: 148,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is a "Cascode" current source?',
    options: ['A source with two transistors in parallel', 'A source with two transistors in series (stacked) to increase output impedance', 'A source with a capacitor', 'A source with a resistor'],
    correctAnswer: 1,
    hint: 'It "boosts" the impedance.',
    explanation: 'A cascode current source uses a second transistor stacked on top of the first to increase the output resistance by a factor of approximately gm*ro.'
  },
  {
    id: 149,
    category: 'Current Mirrors',
    difficulty: 'Easy',
    text: 'What is the "Mirror Ratio"?',
    options: ['The ratio of the widths of the two transistors', 'The ratio of the output current to the reference current', 'The ratio of the lengths', 'The ratio of the voltages'],
    correctAnswer: 1,
    hint: 'It is usually set by (W/L) ratios.',
    explanation: 'The mirror ratio is the factor by which the input reference current is scaled to produce the output current.'
  },
  {
    id: 150,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'What is the "Gate" of a MOSFET?',
    options: ['The terminal that controls the channel', 'The terminal where current enters', 'The terminal where current leaves', 'The substrate connection'],
    correctAnswer: 0,
    hint: 'It acts like a valve.',
    explanation: 'The gate is the control terminal of the MOSFET; the voltage applied to it determines the conductivity of the channel.'
  },
  {
    id: 151,
    category: 'Amplifiers',
    difficulty: 'Hard',
    text: 'What is "Chopper Stabilization"?',
    options: ['A way to cool the amplifier', 'A technique to reduce DC offset and flicker noise by modulating the signal to a higher frequency', 'A method to increase gain', 'A type of layout'],
    correctAnswer: 1,
    hint: 'It involves periodic switching.',
    explanation: 'Chopping modulates the input signal to a high frequency, amplifies it, and then demodulates it, effectively "pushing" low-frequency noise and offset out of the signal band.'
  },
  {
    id: 152,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "STI" (Shallow Trench Isolation)?',
    options: ['A type of transistor', 'A method for isolating transistors on a die by etching trenches and filling them with oxide', 'A type of metal layer', 'A testing procedure'],
    correctAnswer: 1,
    hint: 'It replaced LOCOS.',
    explanation: 'STI is the standard isolation technique in modern CMOS, preventing leakage between adjacent devices.'
  },
  {
    id: 153,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is "White Noise"?',
    options: ['Noise that is only at high frequencies', 'Noise with a constant power spectral density across all frequencies', 'Noise from the power supply', 'Noise that is visible'],
    correctAnswer: 1,
    hint: 'Like white light, it contains all frequencies.',
    explanation: 'White noise has the same intensity at all frequencies, giving it a flat power spectrum.'
  },
  {
    id: 154,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is the "Nyquist Stability Criterion"?',
    options: ['A rule for sampling', 'A graphical method for determining the stability of a feedback system', 'A type of filter', 'A power calculation'],
    correctAnswer: 1,
    hint: 'It uses the Nyquist plot.',
    explanation: 'The Nyquist criterion relates the stability of a closed-loop system to the frequency response of the open-loop system.'
  },
  {
    id: 155,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is a "Voltage Reference"?',
    options: ['A circuit that measures voltage', 'A circuit that provides a stable, temperature-independent DC voltage', 'A battery', 'A resistor divider'],
    correctAnswer: 1,
    hint: 'Bandgaps are a common type.',
    explanation: 'A voltage reference is a circuit that maintains a constant output voltage regardless of changes in temperature, supply voltage, or load.'
  },
  {
    id: 156,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is "Channel Length Modulation" (CLM) in a current mirror?',
    options: ['The length of the channel changing with temperature', 'The effective channel length changing with Vds, causing current variation', 'The width of the channel changing', 'The noise of the channel'],
    correctAnswer: 1,
    hint: 'It is the MOSFET equivalent of the Early Effect.',
    explanation: 'CLM causes the drain current to increase as Vds increases, even in the saturation region, which degrades the accuracy of current mirrors.'
  },
  {
    id: 157,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is the "Triode" (or Linear) region of a MOSFET?',
    options: ['When the transistor is off', 'When Vds is small and the current is proportional to Vds', 'When the current is constant', 'When the gate is broken'],
    correctAnswer: 1,
    hint: 'Vds < Vgs - Vth.',
    explanation: 'In the triode region, the MOSFET acts like a voltage-controlled resistor.'
  },
  {
    id: 158,
    category: 'Amplifiers',
    difficulty: 'Easy',
    text: 'What is a "Differential Amplifier"?',
    options: ['An amplifier that amplifies the difference between two signals', 'An amplifier with two stages', 'An amplifier that is different from others', 'A digital amplifier'],
    correctAnswer: 0,
    hint: 'It has two inputs.',
    explanation: 'A differential amplifier amplifies the voltage difference between its two input terminals while rejecting signals common to both.'
  },
  {
    id: 159,
    category: 'Layout',
    difficulty: 'Easy',
    text: 'What is "Via" in a semiconductor layout?',
    options: ['A way to go somewhere', 'A vertical electrical connection between different metal layers', 'A horizontal wire', 'A type of transistor'],
    correctAnswer: 1,
    hint: 'It connects Metal 1 to Metal 2, etc.',
    explanation: 'Vias are small holes filled with metal that provide electrical connectivity between different layers of interconnect.'
  },
  {
    id: 160,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Noise Figure" (NF)?',
    options: ['The total noise power', 'A measure of the degradation of the signal-to-noise ratio (SNR) caused by a system', 'The gain of the noise', 'The temperature of the noise'],
    correctAnswer: 1,
    hint: 'NF = 10 * log10(SNR_in / SNR_out).',
    explanation: 'Noise figure quantifies how much noise a component adds to a signal, expressed in decibels.'
  },
  {
    id: 161,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is a "Pole" in a transfer function?',
    options: ['A vertical stick', 'A frequency where the gain goes to infinity', 'A frequency where the gain goes to zero', 'A DC offset'],
    correctAnswer: 1,
    hint: 'It causes the gain to roll off.',
    explanation: 'A pole is a root of the denominator of the transfer function; it causes the gain to decrease and adds phase lag.'
  },
  {
    id: 162,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is "Supply Sensitivity" of a bias circuit?',
    options: ['How much the supply voltage changes', 'The change in output current or voltage per unit change in supply voltage', 'The noise on the supply', 'The power consumption'],
    correctAnswer: 1,
    hint: 'dI_out / dVdd.',
    explanation: 'Supply sensitivity measures how well a bias circuit rejects variations in the power supply voltage.'
  },
  {
    id: 163,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is a "Wide-Swing" cascode current mirror?',
    options: ['A mirror that can handle large currents', 'A cascode mirror biased to allow a larger output voltage range (lower Vmin)', 'A mirror with a large area', 'A mirror with high speed'],
    correctAnswer: 1,
    hint: 'It uses a special bias for the cascode gate.',
    explanation: 'Wide-swing cascode mirrors use a specific bias voltage to keep the bottom transistor at the edge of saturation, maximizing the output swing.'
  },
  {
    id: 164,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'What is "Saturation" in a MOSFET?',
    options: ['When the transistor is wet', 'The region where the drain current is nearly independent of Vds', 'When the transistor is off', 'When the gate voltage is zero'],
    correctAnswer: 1,
    hint: 'Vds > Vgs - Vth.',
    explanation: 'In saturation, the MOSFET acts like a voltage-controlled current source.'
  },
  {
    id: 165,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is "Gain-Bandwidth Product" (GBW)?',
    options: ['The product of the DC gain and the bandwidth', 'The frequency where the gain is 1', 'The total power', 'The noise level'],
    correctAnswer: 0,
    hint: 'For a single-pole system, it is constant.',
    explanation: 'GBW is a constant for many amplifiers, representing the trade-off between gain and the frequency range over which that gain can be maintained.'
  },
  {
    id: 166,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "CMP" (Chemical Mechanical Polishing)?',
    options: ['A type of transistor', 'A process for flattening the surface of a wafer during fabrication', 'A testing method', 'A type of metal'],
    correctAnswer: 1,
    hint: 'It uses a slurry and a polishing pad.',
    explanation: 'CMP is used to planarize the wafer surface after depositing layers, which is essential for multi-layer interconnects and lithography.'
  },
  {
    id: 167,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is "1/f Noise"?',
    options: ['Noise that increases with frequency', 'Noise whose power spectral density is inversely proportional to frequency', 'Noise from the clock', 'Thermal noise'],
    correctAnswer: 1,
    hint: 'It is also called Flicker Noise.',
    explanation: '1/f noise is dominant at low frequencies and is a major concern for precision analog circuits.'
  },
  {
    id: 168,
    category: 'Stability',
    difficulty: 'Easy',
    text: 'What is a "Zero" in a transfer function?',
    options: ['A number', 'A frequency where the gain goes to zero', 'A frequency where the gain goes to infinity', 'A DC offset'],
    correctAnswer: 1,
    hint: 'It causes the gain to increase.',
    explanation: 'A zero is a root of the numerator of the transfer function; it causes the gain to increase and adds phase lead (if in the LHP).'
  },
  {
    id: 169,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is "CTAT"?',
    options: ['Current Towards All Terminals', 'Complementary To Absolute Temperature', 'Circuit Tolerant Analog Technology', 'Constant Thermal Analog Terminal'],
    correctAnswer: 1,
    hint: 'It is the opposite of PTAT.',
    explanation: 'CTAT stands for Complementary To Absolute Temperature; its value decreases as temperature increases (e.g., Vbe).'
  },
  {
    id: 170,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is the "Output Resistance" of a simple NMOS current mirror?',
    options: ['ro', '1/gm', 'Infinite', 'Zero'],
    correctAnswer: 0,
    hint: 'It is the small-signal resistance of the output transistor.',
    explanation: 'The output resistance of a simple current mirror is just the ro (drain-source resistance) of the output transistor.'
  },
  {
    id: 171,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Impact Ionization" in a MOSFET?',
    options: ['Ions hitting the chip', 'High-energy carriers creating electron-hole pairs through collisions, leading to substrate current', 'The gate oxide breaking', 'The chip getting hot'],
    correctAnswer: 1,
    hint: 'It occurs at high Vds.',
    explanation: 'Impact ionization happens when carriers are accelerated by high electric fields and collide with atoms, creating additional carriers and substrate current.'
  },
  {
    id: 172,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is "Power Supply Rejection Ratio" (PSRR)?',
    options: ['The ratio of output power to input power', 'The ability of an amplifier to reject noise from the power supply', 'The maximum supply voltage', 'The power consumption'],
    correctAnswer: 1,
    hint: 'It is usually expressed in dB.',
    explanation: 'PSRR measures how much of the power supply ripple appears at the output of the amplifier.'
  },
  {
    id: 173,
    category: 'Layout',
    difficulty: 'Easy',
    text: 'What is "Metal 1", "Metal 2", etc.?',
    options: ['Different types of metal', 'Sequential layers of metal interconnect on a chip', 'Metal for different purposes', 'Metal for different chips'],
    correctAnswer: 1,
    hint: 'They are stacked vertically.',
    explanation: 'Modern chips use multiple layers of metal (M1, M2, etc.) to route signals and power, connected by vias.'
  },
  {
    id: 174,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Integrated Noise"?',
    options: ['Noise in an integrated circuit', 'The total noise power over a specific frequency range', 'The noise of a capacitor', 'The noise of a resistor'],
    correctAnswer: 1,
    hint: 'It is the area under the noise PSD curve.',
    explanation: 'Integrated noise is the total noise power obtained by integrating the noise power spectral density (PSD) over the bandwidth of interest.'
  },
  {
    id: 175,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is "Unity Gain"?',
    options: ['A gain of 0', 'A gain of 1 (or 0 dB)', 'A gain of infinity', 'A gain of -1'],
    correctAnswer: 1,
    hint: 'The output equals the input.',
    explanation: 'Unity gain means the output signal has the same magnitude as the input signal.'
  },
  {
    id: 176,
    category: 'Biasing',
    difficulty: 'Easy',
    text: 'What is a "Current Source"?',
    options: ['A battery', 'A circuit that provides a constant DC current regardless of the voltage across it', 'A resistor', 'A capacitor'],
    correctAnswer: 1,
    hint: 'It is the dual of a voltage source.',
    explanation: 'An ideal current source delivers a constant current to a load, regardless of the load resistance or voltage.'
  },
  {
    id: 177,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is "Vth Mismatch"?',
    options: ['The threshold voltage changing with time', 'The difference in threshold voltage between two supposedly identical transistors', 'The threshold voltage being too high', 'The threshold voltage being zero'],
    correctAnswer: 1,
    hint: 'It is a major source of current mirror error.',
    explanation: 'Vth mismatch is caused by random variations in doping and oxide charges, leading to errors in current mirrors and differential pairs.'
  },
  {
    id: 178,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is "Gate Capacitance" (Cgg)?',
    options: ['The capacitance of the gate oxide', 'The total capacitance looking into the gate terminal', 'The capacitance between gate and source', 'The capacitance between gate and drain'],
    correctAnswer: 1,
    hint: 'It includes Cgs, Cgd, and Cgb.',
    explanation: 'Gate capacitance is the total capacitance associated with the gate terminal, which affects the speed and input impedance of the transistor.'
  },
  {
    id: 179,
    category: 'Amplifiers',
    difficulty: 'Easy',
    text: 'What is "Voltage Gain"?',
    options: ['The ratio of output voltage to input voltage', 'The total voltage', 'The power of the voltage', 'The noise of the voltage'],
    correctAnswer: 0,
    hint: 'Av = Vout / Vin.',
    explanation: 'Voltage gain is the factor by which an amplifier increases the amplitude of an input voltage signal.'
  },
  {
    id: 180,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Poly" (Polysilicon)?',
    options: ['A type of plastic', 'A material used to form the gate of a MOSFET', 'A type of metal', 'A type of substrate'],
    correctAnswer: 1,
    hint: 'It is deposited on top of the gate oxide.',
    explanation: 'Polysilicon is a polycrystalline form of silicon used as the gate electrode in most CMOS processes.'
  },
  {
    id: 181,
    category: 'Noise',
    difficulty: 'Medium',
    text: 'What is "SNR" (Signal-to-Noise Ratio)?',
    options: ['The ratio of signal power to noise power', 'The total power', 'The speed of the signal', 'The gain of the signal'],
    correctAnswer: 0,
    hint: 'It measures signal quality.',
    explanation: 'SNR is a measure used to compare the level of a desired signal to the level of background noise.'
  },
  {
    id: 182,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is a "Dominant Pole"?',
    options: ['The pole at the highest frequency', 'The pole at the lowest frequency that determines the primary bandwidth', 'A pole at DC', 'A pole that is zero'],
    correctAnswer: 1,
    hint: 'It "dominates" the frequency response.',
    explanation: 'A dominant pole is one that is much lower in frequency than any other poles, effectively determining the system\'s bandwidth and stability.'
  },
  {
    id: 183,
    category: 'Biasing',
    difficulty: 'Hard',
    text: 'What is "Self-Biasing"?',
    options: ['Biasing yourself', 'A technique where the bias current is generated by the circuit itself, often using feedback', 'Using a battery', 'Using a resistor divider'],
    correctAnswer: 1,
    hint: 'Beta-multipliers are self-biased.',
    explanation: 'Self-biasing circuits use their own output to set their operating point, often making them less sensitive to supply voltage variations.'
  },
  {
    id: 184,
    category: 'Current Mirrors',
    difficulty: 'Easy',
    text: 'What is an "NMOS Current Mirror"?',
    options: ['A mirror made of PMOS', 'A current mirror using NMOS transistors to sink current to ground', 'A mirror for light', 'A digital mirror'],
    correctAnswer: 1,
    hint: 'It uses N-type transistors.',
    explanation: 'An NMOS current mirror typically uses two NMOS transistors to replicate a reference current, sinking it from a load to ground.'
  },
  {
    id: 185,
    category: 'MOSFET Physics',
    difficulty: 'Hard',
    text: 'What is "Substrate Current"?',
    options: ['Current in the substrate', 'Current flowing into the substrate due to impact ionization or leakage', 'Current in the gate', 'Current in the source'],
    correctAnswer: 1,
    hint: 'It can trigger latch-up.',
    explanation: 'Substrate current is often a parasitic current caused by high-energy carriers in the channel or leakage from junctions.'
  },
  {
    id: 186,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is "Output Swing"?',
    options: ['The output moving back and forth', 'The range of output voltage over which the amplifier remains linear', 'The maximum current', 'The speed of the output'],
    correctAnswer: 1,
    hint: 'It is limited by the supply rails.',
    explanation: 'Output swing is the maximum peak-to-peak voltage that an amplifier can produce at its output without significant distortion.'
  },
  {
    id: 187,
    category: 'Layout',
    difficulty: 'Hard',
    text: 'What is "Density Rule" in layout?',
    options: ['How many people are in the lab', 'A requirement that the percentage of a layer (like metal) must be within a certain range across the die', 'The density of the silicon', 'The density of the air'],
    correctAnswer: 1,
    hint: 'It is for CMP uniformity.',
    explanation: 'Density rules ensure that the metal or poly density is uniform across the wafer, which is critical for the Chemical Mechanical Polishing (CMP) process.'
  },
  {
    id: 188,
    category: 'Noise',
    difficulty: 'Easy',
    text: 'What is "Pink Noise"?',
    options: ['Noise that is pink', 'Noise with a 1/f power spectral density', 'Noise from the supply', 'Thermal noise'],
    correctAnswer: 1,
    hint: 'It is another name for Flicker Noise.',
    explanation: 'Pink noise has equal power per octave, resulting in a 1/f power spectral density.'
  },
  {
    id: 189,
    category: 'Stability',
    difficulty: 'Hard',
    text: 'What is "Root Locus"?',
    options: ['A place for roots', 'A graphical method for showing how the poles of a system change as a parameter (like gain) varies', 'A type of plot', 'A math formula'],
    correctAnswer: 1,
    hint: 'It is used in control theory.',
    explanation: 'Root locus analysis is used to determine the stability and transient response of a feedback system as the loop gain is changed.'
  },
  {
    id: 190,
    category: 'Biasing',
    difficulty: 'Medium',
    text: 'What is a "Current Sink"?',
    options: ['A place where current goes to die', 'A circuit that draws a constant current from a load to ground', 'A battery', 'A resistor'],
    correctAnswer: 1,
    hint: 'NMOS mirrors are often sinks.',
    explanation: 'A current sink is a type of current source that pulls current from a load towards a lower potential (usually ground).'
  },
  {
    id: 191,
    category: 'Current Mirrors',
    difficulty: 'Medium',
    text: 'What is a "PMOS Current Mirror"?',
    options: ['A mirror made of NMOS', 'A current mirror using PMOS transistors to source current from Vdd', 'A mirror for light', 'A digital mirror'],
    correctAnswer: 1,
    hint: 'It uses P-type transistors.',
    explanation: 'A PMOS current mirror typically uses two PMOS transistors to replicate a reference current, sourcing it from Vdd to a load.'
  },
  {
    id: 192,
    category: 'MOSFET Physics',
    difficulty: 'Medium',
    text: 'What is "Threshold Voltage" (Vth)?',
    options: ['The maximum voltage', 'The gate-source voltage at which a conduction channel forms', 'The breakdown voltage', 'The supply voltage'],
    correctAnswer: 1,
    hint: 'It is the "turn-on" voltage.',
    explanation: 'Threshold voltage is the minimum Vgs required to create an inversion layer (channel) between the source and drain.'
  },
  {
    id: 193,
    category: 'Amplifiers',
    difficulty: 'Easy',
    text: 'What is "Input Impedance"?',
    options: ['The resistance looking into the input of a circuit', 'The total resistance', 'The speed of the input', 'The noise of the input'],
    correctAnswer: 0,
    hint: 'It affects loading.',
    explanation: 'Input impedance is the equivalent resistance and reactance that a circuit presents to a signal source.'
  },
  {
    id: 194,
    category: 'Layout',
    difficulty: 'Medium',
    text: 'What is "Tap" (or Well Contact)?',
    options: ['A place to get water', 'A connection to the substrate or well to set its potential and prevent latch-up', 'A connection to the gate', 'A connection to the source'],
    correctAnswer: 1,
    hint: 'It is essential for biasing the body.',
    explanation: 'Taps are ohmic contacts to the substrate (P-tap) or N-well (N-tap) that ensure they are at the correct potential (Gnd or Vdd).'
  },
  {
    id: 195,
    category: 'Noise',
    difficulty: 'Hard',
    text: 'What is "Noise Bandwidth"?',
    options: ['The bandwidth of the signal', 'The bandwidth of an ideal rectangular filter that would pass the same noise power as the actual system', 'The total bandwidth', 'The speed of the noise'],
    correctAnswer: 1,
    hint: 'It is usually slightly larger than the 3dB bandwidth.',
    explanation: 'Noise bandwidth is a theoretical concept used to simplify noise calculations by replacing a complex filter shape with an equivalent rectangular one.'
  },
  {
    id: 196,
    category: 'Stability',
    difficulty: 'Medium',
    text: 'What is "Closed-Loop" gain?',
    options: ['The gain without feedback', 'The gain of a system when feedback is applied', 'The total gain', 'The noise gain'],
    correctAnswer: 1,
    hint: 'Acl = A / (1 + AB).',
    explanation: 'Closed-loop gain is the overall gain of a system including the effects of the feedback loop.'
  },
  {
    id: 197,
    category: 'Biasing',
    difficulty: 'Easy',
    text: 'What is a "Current Source"?',
    options: ['A battery', 'A circuit that provides a constant DC current regardless of the voltage across it', 'A resistor', 'A capacitor'],
    correctAnswer: 1,
    hint: 'It is the dual of a voltage source.',
    explanation: 'An ideal current source delivers a constant current to a load, regardless of the load resistance or voltage.'
  },
  {
    id: 198,
    category: 'Current Mirrors',
    difficulty: 'Hard',
    text: 'What is "Degeneration" in a current mirror?',
    options: ['The mirror getting worse', 'Adding resistors in the sources of the transistors to improve matching and output impedance', 'Reducing the area', 'Increasing the noise'],
    correctAnswer: 1,
    hint: 'It uses local negative feedback.',
    explanation: 'Source degeneration uses resistors to provide local feedback, which reduces the effect of Vth mismatch and increases the output resistance.'
  },
  {
    id: 199,
    category: 'MOSFET Physics',
    difficulty: 'Easy',
    text: 'What is "Drain" of a MOSFET?',
    options: ['Where current enters', 'Where current leaves (for NMOS)', 'The control terminal', 'The substrate connection'],
    correctAnswer: 1,
    hint: 'It is one of the two main terminals.',
    explanation: 'The drain is the terminal of the MOSFET through which carriers (electrons in NMOS, holes in PMOS) leave the channel.'
  },
  {
    id: 200,
    category: 'Amplifiers',
    difficulty: 'Medium',
    text: 'What is "Open-Loop" gain?',
    options: ['The gain with feedback', 'The gain of an amplifier without any feedback applied', 'The total gain', 'The noise gain'],
    correctAnswer: 1,
    hint: 'It is usually very high.',
    explanation: 'Open-loop gain is the gain of the amplifier itself, before any external feedback network is connected.'
  }
];
