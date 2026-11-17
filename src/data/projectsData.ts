import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'mandor',
    title: 'MANDOR',
    subtitle: 'Machine Analytics & Network Diagnostics Operation Router',
    category: 'Edge AI / Industrial IoT / Digital Twin',
    categoryTag: 'iot-edge',
    shortDescription: '1st Place KMIPN VIII 2026 winning system unifying Google Coral Edge TPU anomaly detection, physical vibration/thermal telemetry, and VR Digital Twin synchronization.',
    description: {
      en: 'MANDOR (Machine Analytics & Network Diagnostics Operation Router) is an industrial edge computing and diagnostics platform engineered to classify the operating health of high-speed industrial rotating machinery in real time without continuous cloud reliance. Winner of 1st Place at KMIPN VIII 2026 (Internet of Things), the system acquires high-frequency multi-axis vibration, surface temperature, motor current draw, and rotational RPM, performing quantized neural network inference on Google Coral Edge TPU to predict failure modes and synchronize directly with a 3D Virtual Reality Digital Twin over low-latency MQTT.',
      id: 'MANDOR (Machine Analytics & Network Diagnostics Operation Router) adalah platform komputasi edge dan diagnostik industri yang dirancang untuk mengklasifikasikan kondisi operasional mesin berputar industri secara real-time tanpa ketergantungan konstan pada cloud. Meraih Juara 1 KMIPN VIII 2026 kategori IoT, sistem ini mengakuisisi getaran multi-sumbu frekuensi tinggi, suhu permukaan, arus motor, dan RPM, mengeksekusi inferensi neural network terkuantisasi pada Google Coral Edge TPU untuk memprediksi kegagalan mesin dan menyinkronkan data langsung ke Digital Twin VR via MQTT berlatensi rendah.'
    },
    problemStatement: {
      en: 'Industrial rotating machinery (induction motors, centrifugal pumps, machining spindles) suffers catastrophic breakdowns when mechanical bearing vibrations and thermal tolerances are breached. Streaming raw high-frequency telemetry to remote cloud servers introduces critical latency, high bandwidth costs, and severe failure risks when network connectivity falters.',
      id: 'Mesin berputar industri (motor induksi, pompa sentrifugal, spindle permesinan) rentan mengalami kerusakan fatal jika toleransi getaran mekanik dan suhu terlampaui. Mengirimkan data frekuensi tinggi mentah ke cloud memicu latensi tinggi, beban biaya bandwidth, serta risiko kegagalan fatal saat koneksi internet terputus.'
    },
    objectives: {
      en: [
        'Instrument rotating machinery with multi-axis accelerometers, contactless infrared thermal probes, and current clamps.',
        'Execute quantized edge inference locally on Google Coral Edge TPU within sub-millisecond latencies.',
        'Classify operating health into NORMAL, WARNING, and CRITICAL alarm conditions.',
        'Synchronize machine telemetry with an immersive Unity 3D Virtual Reality Digital Twin.',
        'Publish structured JSON payloads over a resilient local MQTT broker network.'
      ],
      id: [
        'Memasang sensor akselerometer multi-sumbu, sensor suhu inframerah non-kontak, dan sensor arus pada mesin industri.',
        'Mengeksekusi inferensi edge terkuantisasi secara lokal pada Google Coral Edge TPU dengan latensi sub-milidetik.',
        'Mengklasifikasikan status kesehatan mesin ke dalam kondisi NORMAL, WARNING, dan CRITICAL.',
        'Menyinkronkan telemetri mesin ke Digital Twin Virtual Reality Unity 3D yang interaktif.',
        'Menyiarkan data JSON terstruktur melalui jaringan broker MQTT lokal yang andal.'
      ]
    },
    technologies: [
      'Edge AI',
      'Google Coral Edge TPU',
      'Digital Twin',
      'Unity VR',
      'MQTT Protocol',
      'ESP32',
      'Vibration & Thermal Sensors',
      'Python',
      'Machine Learning'
    ],
    personalContribution: {
      en: 'Led the overall hardware-software architecture and IoT infrastructure. Designed the multi-channel sensor acquisition board, compiled and quantized the machine learning models for Edge TPU execution, developed the MQTT telemetry pipeline, and integrated sensor telemetry with the VR Digital Twin environment.',
      id: 'Memimpin arsitektur hardware-software menyeluruh dan infrastruktur IoT. Merancang papan akuisisi multi-sensor, mengompilasi serta menguantisasi model machine learning untuk Edge TPU, mengembangkan pipeline telemetri MQTT, dan mengintegrasikan aliran data sensor ke lingkungan Digital Twin VR.'
    },
    teamCredits: {
      isTeam: true,
      teamName: 'MANDOR Engineering Delegation — POLMAN Bandung',
      members: ['Bintang Shobri Al Chakim', 'Collaborators & Research Advisors'],
      role: 'System Architect, Edge AI & IoT Lead'
    },
    architecture: {
      en: 'Physical sensors capture vibration, temperature, current, and RPM signals. The microcontroller normalizes feature vectors and routes them to Google Coral Edge TPU for local inference. The resulting health classification and telemetry are broadcast via MQTT to both a responsive web dashboard and an immersive Unity VR Digital Twin.',
      id: 'Sensor fisik menangkap sinyal getaran, suhu, arus, dan RPM. Mikrokontroler menormalisasi vektor fitur dan meneruskannya ke Google Coral Edge TPU untuk inferensi lokal. Hasil klasifikasi dan telemetri disiarkan melalui MQTT ke dashboard web dan Digital Twin VR Unity 3D.',
      diagramSteps: [
        { step: '01', title: 'Sensory Acquisition', description: 'Multi-axis accelerometer, optical RPM tachometer, and thermal sensors capture machine vitals.' },
        { step: '02', title: 'Edge TPU Inference', description: 'Quantized neural model on Google Coral evaluates vibration spectra and classifies health status.' },
        { step: '03', title: 'MQTT Telemetry Broker', description: 'Ultra-low latency message broker routes diagnostic telemetry to monitoring clients.' },
        { step: '04', title: 'Digital Twin & VR', description: 'Immersive 3D virtual replica visually renders real-time stress, thermal heatmaps, and alarm alerts.' }
      ]
    },
    developmentProcess: {
      en: [
        'Designed custom hardware interfacing board for 4-channel analog/digital sensors.',
        'Collected mechanical vibration baseline profiles under controlled industrial motor loads.',
        'Quantized TensorFlow Lite models for Google Coral Edge TPU compilation.',
        'Engineered Unity 3D spatial machine asset synchronized with live MQTT telemetry.',
        'Field-validated at KMIPN VIII 2026, securing 1st Place in the Internet of Things category.'
      ],
      id: [
        'Merancang papan antarmuka hardware khusus untuk 4 kanal sensor analog/digital.',
        'Mengumpulkan profil getaran mekanik dasar pada motor industri dalam berbagai beban kerja.',
        'Menguantisasi model TensorFlow Lite untuk kompilasi pada Google Coral Edge TPU.',
        'Membangun aset spasial Unity 3D yang tersinkronisasi langsung dengan data MQTT.',
        'Validasi lapangan pada KMIPN VIII 2026, sukses meraih Juara 1 kategori Internet of Things.'
      ]
    },
    statusMatrix: [
      { feature: 'Edge TPU Machine Health Inference', status: 'Implemented', note: 'Real-time classification on Google Coral TPU.' },
      { feature: 'MQTT Low-Latency Telemetry', status: 'Tested', note: 'Sub-50ms message turnaround verified.' },
      { feature: 'Unity 3D / VR Digital Twin', status: 'Implemented', note: 'Spatial telemetry visualization fully operational.' },
      { feature: 'National Championship Validation', status: 'Implemented', note: '1st Place KMIPN VIII 2026.' }
    ],
    images: [
      {
        src: './images/mandor/mandor-prototype-placeholder.png',
        alt: 'MANDOR Prototype & Edge TPU Hardware',
        caption: 'MANDOR Edge AI diagnostics console with sensor interface and Google Coral TPU accelerator.',
        aspectRatio: 'video'
      }
    ],
    links: {
      github: '#',
      demo: '#'
    },
    featured: true,
    competitionContext: 'Awarded 1st Place (Juara 1) at KMIPN VIII 2026 — Politeknik Negeri Ujung Pandang.',
    relatedProjectIds: ['simandiri', 'maestro', 'mobile-robotics']
  },
  {
    id: 'simandiri',
    title: 'SIMANDIRI',
    subtitle: 'Smart PPE Monitoring & Intelligent Industrial Gate System',
    category: 'Edge AI / Computer Vision / Workplace Safety IoT',
    categoryTag: 'ai-cv',
    shortDescription: '2nd Place Teknocom International 2026 winning platform combining YOLOv8 safety helmet detection, facial recognition, and RFID industrial access control.',
    description: {
      en: 'SIMANDIRI (Smart PPE Monitoring System) is an integrated intelligent workplace safety and industrial access control system that won 2nd Place at the Teknocom International Competition 2026. Combining computer vision, Edge AI inference, facial recognition verification, and RFID badge validation, SIMANDIRI automatically monitors whether industrial operators wear mandatory Personal Protective Equipment (helmets and safety gear) before unlocking factory access gates. The system features multi-camera CCTV monitoring, Indonesian text-to-speech feedback, and real-time safety logging.',
      id: 'SIMANDIRI (Smart PPE Monitoring System) adalah sistem keselamatan kerja terintegrasi dan gerbang akses industri pintar yang meraih Juara 2 pada Teknocom International Competition 2026. Memadukan visi komputer, inferensi Edge AI, verifikasi pengenalan wajah, serta validasi RFID, SIMANDIRI secara otomatis memastikan pekerja mengenakan Alat Pelindung Diri (helm dan perlengkapan keselamatan) sebelum gerbang pabrik terbuka. Sistem ini dilengkapi pemantauan CCTV multi-kamera, umpan balik suara Bahasa Indonesia, dan pencatatan kepatuhan real-time.'
    },
    problemStatement: {
      en: 'Workplace accidents on industrial production floors frequently stem from non-compliance with Personal Protective Equipment (PPE) regulations. Manual safety inspections at entry checkpoints cause severe bottlenecks, human oversight, and lack verifiable digital audit trails of worker compliance.',
      id: 'Kecelakaan kerja di area industri manufaktur sering kali disebabkan oleh kelalaian penggunaan Alat Pelindung Diri (APD). Pemeriksaan manual di pintu gerbang memperlambat alur kerja, rentan kelalaian petugas, dan tidak memiliki rekam jejak digital yang terverifikasi.'
    },
    objectives: {
      en: [
        'Deploy custom-trained YOLOv8 object detection model for high-accuracy safety helmet identification.',
        'Implement facial recognition to authenticate workers against institutional employee records.',
        'Integrate RFID hardware badge verification with ESP32-controlled electronic physical turnstiles.',
        'Provide automated voice feedback (Indonesian Text-to-Speech) guiding operators at the gate.',
        'Stream continuous multi-camera CCTV feeds with history-based detection stabilization.'
      ],
      id: [
        'Menerapkan model deteksi objek YOLOv8 yang dilatih khusus untuk identifikasi helm keselamatan presisi tinggi.',
        'Mengimplementasikan pengenalan wajah untuk mengautentikasi pekerja dengan basis data kepegawaian.',
        'Mengintegrasikan verifikasi kartu RFID dengan mikrokontroler ESP32 pengendali gerbang fisik.',
        'Menyediakan umpan balik suara interaktif (Text-to-Speech Bahasa Indonesia) untuk mengarahkan pekerja.',
        'Mengalirkan feed CCTV multi-kamera secara kontinu dengan stabilisasi deteksi berbasis riwayat.'
      ]
    },
    technologies: [
      'Edge AI',
      'YOLOv8',
      'Computer Vision',
      'Face Recognition',
      'RFID System',
      'ESP32',
      'Python',
      'Flask Web Dashboard',
      'OpenCV'
    ],
    personalContribution: {
      en: 'Co-developed the Computer Vision pipeline and Edge AI deployment. Curated and labeled custom PPE datasets in Roboflow, trained and evaluated YOLOv8 models, implemented the facial recognition authentication module, and integrated the serial communication bridge between the Python inference engine and ESP32 gate hardware.',
      id: 'Turut mengembangkan pipeline Computer Vision dan implementasi Edge AI. Mengkurasi dan melabeli dataset APD khusus di Roboflow, melatih dan mengevaluasi model YOLOv8, mengimplementasikan modul autentikasi pengenalan wajah, serta mengintegrasikan jembatan komunikasi serial antara engine inferensi Python dan hardware gerbang ESP32.'
    },
    teamCredits: {
      isTeam: true,
      teamName: 'SIMANDIRI Engineering Team',
      members: ['Bintang Shobri Al Chakim', 'Collaborators & Safety Research Team'],
      role: 'Computer Vision & IoT Integration Specialist'
    },
    architecture: {
      en: 'High-definition camera captures operator face and headgear. Face recognition identifies the worker while YOLOv8 inspects helmet compliance. RFID badge tap triggers confirmation. If both identity and safety equipment are validated, ESP32 energizes the turnstile gate solenoid while voice synthesis greets the worker.',
      id: 'Kamera definisi tinggi menangkap wajah dan penutup kepala pekerja. Modul pengenal wajah mengidentifikasi personel sementara YOLOv8 memverifikasi penggunaan helm. Pembacaan RFID mengonfirmasi identitas. Jika APD lengkap dan identitas valid, ESP32 membuka gerbang fisik dan suara otomatis menyapa pekerja.',
      diagramSteps: [
        { step: '01', title: 'Camera & RFID Input', description: 'Video feed streams worker presence while RFID reader scans security credentials.' },
        { step: '02', title: 'YOLOv8 Detection', description: 'Deep learning neural net classifies helmet presence with history-based flicker damping.' },
        { step: '03', title: 'Face Authentication', description: 'Facial embedding matches against employee database to log individual entry.' },
        { step: '04', title: 'Gate Actuation & Audio', description: 'ESP32 triggers electronic gate solenoid and generates Indonesian voice greeting.' }
      ]
    },
    developmentProcess: {
      en: [
        'Curated dataset of industrial safety helmets across lighting conditions and worker angles.',
        'Trained custom YOLOv8 model achieving high precision on PPE detection.',
        'Engineered database management system linking face embeddings with RFID tags.',
        'Built interactive Flask monitoring web application for real-time safety metrics.',
        'Won 2nd Place at Teknocom International Competition 2026.'
      ],
      id: [
        'Mengkurasi dataset helm keselamatan kerja dalam berbagai sudut dan kondisi pencahayaan.',
        'Melatih model YOLOv8 kustom yang mencapai presisi tinggi dalam deteksi APD.',
        'Membangun sistem manajemen basis data yang menghubungkan embedding wajah dengan tag RFID.',
        'Mengembangkan aplikasi pemantauan web Flask interaktif untuk memonitor metrik keselamatan kerja.',
        'Meraih Juara 2 pada ajang Teknocom International Competition 2026.'
      ]
    },
    statusMatrix: [
      { feature: 'YOLOv8 Helmet Detection Model', status: 'Implemented', note: 'Real-time inference with stable tracking.' },
      { feature: 'Face Recognition Module', status: 'Implemented', note: 'Validated against employee database.' },
      { feature: 'ESP32 Hardware Gate Control', status: 'Tested', note: 'Electronic turnstile actuation operational.' },
      { feature: 'International Competition Validation', status: 'Implemented', note: '2nd Place Teknocom International 2026.' }
    ],
    images: [
      {
        src: './images/simandiri/simandiri-logo.png',
        alt: 'SIMANDIRI Smart PPE Gate System',
        caption: 'SIMANDIRI Smart Safety Gate & CCTV Monitoring Console.',
        aspectRatio: 'video'
      }
    ],
    links: {
      github: '#',
      demo: '#'
    },
    featured: true,
    competitionContext: 'Awarded 2nd Place (Juara 2) in Internet of Things at Teknocom International Competition 2026.',
    relatedProjectIds: ['mandor', 'maestro', 'aqua-eye']
  },
  {
    id: 'maestro',
    title: 'MAESTRO',
    subtitle: 'Intelligent Industrial Monitoring & Production Management Ecosystem',
    category: 'Smart Manufacturing / MES / Digital Twin / ERP',
    categoryTag: 'iot-edge',
    shortDescription: 'Integrated industrial platform connecting shop-floor Edge AI condition monitoring, MQTT telemetry, Unity VR Digital Twin, and automated CMMS/ERP maintenance workflows.',
    description: {
      en: 'MAESTRO is an integrated smart manufacturing ecosystem engineered to bridge physical factory equipment with enterprise software systems. Awarded 3rd Place at International Innovation 4Force 2026, MAESTRO continuously monitors machine health using Google Coral Edge TPU neural accelerators, broadcasts telemetry via MQTT, visualizes live equipment states in an immersive Unity 3D Virtual Reality Digital Twin, triggers automated CMMS work orders upon anomaly detection, and provides an AI conversational diagnostic assistant for plant supervisors.',
      id: 'MAESTRO adalah ekosistem manufaktur cerdas terintegrasi yang menjembatani mesin pabrik fisik dengan sistem perangkat lunak perusahaan. Meraih Juara 3 pada International Innovation 4Force 2026, MAESTRO memantau kesehatan mesin menggunakan akselerator neural Google Coral Edge TPU, menyiarkan data via MQTT, memvisualisasikan mesin secara spasial pada Digital Twin VR Unity 3D, memicu surat perintah kerja pemeliharaan CMMS otomatis, serta menyediakan asisten AI diagnostik interaktif.'
    },
    problemStatement: {
      en: 'Conventional manufacturing operations suffer from rigid silos: physical machine sensors do not communicate with Computerized Maintenance Management Systems (CMMS), production planners lack real-time visibility into machine health, and enterprise ERP systems rely on lagging manual logs.',
      id: 'Operasi manufaktur konvensional terhambat oleh isolasi sistem: sensor mesin tidak terhubung ke sistem pemeliharaan (CMMS), perencana produksi kekurangan visibilitas real-time terhadap kondisi mesin, dan ERP bergantung pada pencatatan manual yang lambat.'
    },
    objectives: {
      en: [
        'Bridge machine hardware with enterprise software through high-throughput MQTT messaging.',
        'Implement low-power on-device anomaly classification on Google Coral Edge TPU.',
        'Construct an immersive spatial Digital Twin in Unity 3D for real-time factory monitoring.',
        'Automate CMMS maintenance ticket dispatch when machine degradation thresholds are crossed.',
        'Provide an operator AI chatbot for instant diagnostic log queries.'
      ],
      id: [
        'Menjembatani hardware mesin dengan perangkat lunak perusahaan melalui telemetri MQTT berkecepatan tinggi.',
        'Menerapkan klasifikasi anomali on-device berdaya rendah pada Google Coral Edge TPU.',
        'Membangun Digital Twin spasial interaktif pada Unity 3D untuk pemantauan pabrik real-time.',
        'Mengotomatisasi pembuatan tiket pemeliharaan CMMS saat parameter mesin melampaui batas aman.',
        'Menyediakan asisten chatbot AI bagi operator untuk memeriksa log diagnostik secara instan.'
      ]
    },
    technologies: [
      'Edge AI',
      'Google Coral Edge TPU',
      'Unity 3D',
      'Virtual Reality',
      'MQTT Protocol',
      'MES / ERP Integration',
      'CMMS Workflows',
      'Python',
      'Flask REST API'
    ],
    personalContribution: {
      en: 'Led hardware-software architecture design and edge computing deployment. Configured MQTT broker pipelines, deployed quantized neural models on Google Coral TPU, developed CMMS integration logic, and assisted in synchronizing live machine telemetry with the Unity 3D Virtual Reality environment.',
      id: 'Memimpin perancangan arsitektur integrasi hardware-software dan komputasi edge. Mengonfigurasi pipeline broker MQTT, menerapkan model neural terkuantisasi pada Google Coral TPU, mengembangkan logika integrasi CMMS, serta mengintegrasikan telemetri mesin ke Unity 3D VR.'
    },
    teamCredits: {
      isTeam: true,
      teamName: 'MAESTRO Engineering Team',
      members: ['Bintang Shobri Al Chakim', 'Collaborators & Systems Team'],
      role: 'System Architect, Edge AI & IoT Lead'
    },
    architecture: {
      en: 'Sensor nodes stream multi-axis physical telemetry to a Google Coral Edge TPU edge unit. Inference outcomes and telemetry are published to the MQTT broker, synchronizing the Unity VR Digital Twin and triggering CMMS maintenance work orders when abnormalities are classified.',
      id: 'Node sensor mengirimkan telemetri fisik ke unit edge Google Coral TPU. Hasil inferensi dipublikasikan ke broker MQTT, menyinkronkan Digital Twin VR Unity dan memicu perintah kerja pemeliharaan CMMS saat anomali terdeteksi.',
      diagramSteps: [
        { step: '01', title: 'Sensory Node Telemetry', description: 'High-resolution vibration, current, and thermal sensors on machine drive systems.' },
        { step: '02', title: 'Edge TPU Classification', description: 'Local neural network detects micro-anomalies and calculates machine health index.' },
        { step: '03', title: 'Enterprise Integration', description: 'Centralized server logs data into MES/ERP database and activates CMMS workflows.' },
        { step: '04', title: 'Virtual Reality Twin', description: 'Spatial 3D replica renders machinery status and thermal distribution in real time.' }
      ]
    },
    developmentProcess: {
      en: [
        'Formulated multi-layer architecture linking physical plant sensors to enterprise ERP.',
        'Engineered edge firmware for multi-channel sensor telemetry streaming via MQTT.',
        'Implemented neural inference on Google Coral Edge TPU for machine state detection.',
        'Built Unity 3D Virtual Reality industrial room with interactive telemetry gauges.',
        'Awarded 3rd Place at International Innovation 4Force 2026.'
      ],
      id: [
        'Merumuskan arsitektur multi-layer yang menghubungkan sensor pabrik fisik ke ERP.',
        'Mengembangkan firmware edge untuk telemetri multi-sensor via protokol MQTT.',
        'Menerapkan inferensi neural pada Google Coral Edge TPU untuk deteksi kondisi mesin.',
        'Membangun ruangan industri Virtual Reality Unity 3D dengan visualisasi telemetri interaktif.',
        'Meraih Juara 3 pada ajang International Innovation 4Force 2026.'
      ]
    },
    statusMatrix: [
      { feature: 'Edge TPU Vibration Diagnostics', status: 'Implemented', note: 'Sub-millisecond inference operational.' },
      { feature: 'Unity VR Digital Twin Synchronizer', status: 'Implemented', note: 'Live MQTT telepresence functional.' },
      { feature: 'CMMS Automatic Work Orders', status: 'Tested', note: 'Maintenance logic triggers reliably.' },
      { feature: 'International Innovation 4Force Award', status: 'Implemented', note: '3rd Place in IoT category.' }
    ],
    images: [
      {
        src: './images/maestro/maestro-prototype-placeholder.png',
        alt: 'MAESTRO Industrial Console & Diagnostics',
        caption: 'MAESTRO industrial monitoring console and edge telemetry unit.',
        aspectRatio: 'video'
      }
    ],
    links: {
      github: '#',
      demo: '#'
    },
    featured: true,
    competitionContext: 'Awarded 3rd Place Innovation & Creativity (IoT) at International Innovation 4Force 2026.',
    relatedProjectIds: ['mandor', 'simandiri', 'mobile-robotics']
  },
  {
    id: 'mobile-robotics',
    title: 'Autonomous Mobile Robotics',
    subtitle: 'Kinematic Transporter & High-Speed Line Follower Systems',
    category: 'Mobile Robotics / Embedded Systems / Control Theory',
    categoryTag: 'robotics',
    shortDescription: 'Competitive robotics platforms featuring 4-wheel mecanum kinematics, dual transporter mechanisms (Top 5 FUTURA 2025), and high-speed line followers (4th SGD 2024).',
    description: {
      en: 'A comprehensive mobile robotics engineering program encompassing holonomic mecanum wheel kinematics, dual competition transporter robots, and autonomous high-speed line followers. Secured Top 5 placement at FUTURA Transporter Robot Competition 2025 (HMTE FMIPA Universitas Padjadjaran) and 4th Place at Sunan Gunung Djati Robotic Competition 2024. The systems implement closed-loop PID velocity and trajectory control on embedded microcontrollers, custom high-torque lifting linkages, and real-time photodetection sensor arrays.',
      id: 'Program rekayasa robotika mobile komprehensif yang mencakup kinematika holonomik roda mecanum 4-roda, dua robot transporter kompetisi, dan robot line follower otonom kecepatan tinggi. Meraih posisi Top 5 pada FUTURA Transporter Robot Competition 2025 (Universitas Padjadjaran) dan Juara 4 pada Sunan Gunung Djati Robotic Competition 2024. Sistem mengimplementasikan kendali loop-tertutup PID pada mikrokontroler, mekanisme pengangkat torsi tinggi, dan array sensor fotodetektor presisi.'
    },
    problemStatement: {
      en: 'Competitive robotic arena environments demand agile holonomic maneuvering in constricted spaces, high-precision trajectory following, robust mechanical payload handling, and instantaneous sensor response without trajectory oscillation.',
      id: 'Lingkungan arena robotika kompetitif menuntut manuver holonomik lincah di ruang terbatas, ketepatan trajektori tinggi, penanganan muatan mekanik yang kokoh, serta respons sensor seketika tanpa osilasi gerakan.'
    },
    objectives: {
      en: [
        'Engineer dual transporter robots with specialized mechanical linkages and lifting grippers.',
        'Implement 4-wheel mecanum inverse kinematics for zero-turning-radius translation and rotation.',
        'Deploy closed-loop PID velocity regulation reading optical encoder feedback at high frequencies.',
        'Calibrate high-speed line following photodetector arrays for competitive track navigation.',
        'Compete and validate performance under national competitive arena standards.'
      ],
      id: [
        'Membangun dua robot transporter khusus dengan sistem linkage mekanik dan gripper pengangkat.',
        'Menerapkan kinematika invers 4 roda mecanum untuk translasi dan rotasi putar di tempat (zero-radius).',
        'Menerapkan regulasi kecepatan PID loop-tertutup membaca feedback encoder berkecepatan tinggi.',
        'Mengkalibrasi array fotodetektor line follower kecepatan tinggi untuk navigasi lintasan lomba.',
        'Berkompetisi dan memvalidasi keandalan robot pada standar arena kompetisi nasional.'
      ]
    },
    technologies: [
      'Mobile Robotics',
      'Mecanum Kinematics',
      'Closed-Loop PID Control',
      'Embedded C/C++',
      'Microcontrollers',
      'Motor Drivers & Encoders',
      'Sensor Calibration',
      'PWM Modulation'
    ],
    personalContribution: {
      en: 'Designed and programmed the embedded kinematics firmware, tuned closed-loop PID speed loops, assembled electrical power and driver circuitry, served as Person in Charge (PIC) for line follower construction, and served as lead robotics developer in arena competition rounds.',
      id: 'Merancang dan memprogram firmware kinematika embedded, menyetel kendali kecepatan PID, merakit instalasi kelistrikan daya dan driver motor, menjadi Penanggung Jawab (PIC) konstruksi line follower, serta bertindak sebagai pengembang utama robotika dalam kompetisi arena.'
    },
    teamCredits: {
      isTeam: true,
      teamName: 'Robotic Engineers Society of POLMAN (RES)',
      members: ['Bintang Shobri Al Chakim', 'Robotics Delegation Team'],
      role: 'Lead Firmware Developer & Hardware Integrator'
    },
    architecture: {
      en: 'High-level movement commands (autonomous line/waypoint algorithms or operator teleoperation) resolve into discrete wheel velocities through kinematic matrix equations. Microcontroller executes high-frequency PID loops reading encoder feedback to actuate high-current motor drivers.',
      id: 'Perintah gerak tingkat tinggi (algoritma otonom atau teleoperasi) diterjemahkan menjadi kecepatan masing-masing roda melalui persamaan matriks kinematika. Mikrokontroler mengeksekusi kendali loop PID membaca umpan balik encoder untuk menggerakkan driver motor arus tinggi.',
      diagramSteps: [
        { step: '01', title: 'Navigation Input', description: 'Trajectory calculation from optical line sensors, arena waypoints, or joystick signals.' },
        { step: '02', title: 'Kinematics Solver', description: 'Inverse kinematic equations calculate exact angular velocities for each drive wheel.' },
        { step: '03', title: 'PID Feedback Loop', description: 'High-frequency interrupt loops read optical encoders and adjust PWM duty cycles.' },
        { step: '04', title: 'Payload Actuation', description: 'High-torque servo/stepper linkages grasp, transport, and deposit competition payloads.' }
      ]
    },
    developmentProcess: {
      en: [
        'Designed lightweight aluminum and acrylic chassis with 4-wheel independent motor mounts.',
        'Wired dedicated H-bridge motor driver stages with flyback diode protection.',
        'Wrote embedded C/C++ kinematics firmware implementing holonomic translation vectors.',
        'Iteratively tuned PID proportional, integral, and derivative gains on test arena floor.',
        'Secured Top 5 at FUTURA Transporter 2025 and 4th Place at Sunan Gunung Djati 2024.'
      ],
      id: [
        'Merancang sasis aluminium dan akrilik ringan dengan dudukan 4 motor independen.',
        'Merakit rangkaian driver motor H-bridge dengan proteksi dioda flyback.',
        'Menulis firmware kinematika C/C++ embedded yang mengimplementasikan vektor gerak holonomik.',
        'Menyetel nilai PID secara berulang di atas lantai arena uji coba.',
        'Meraih Top 5 pada FUTURA Transporter 2025 dan Juara 4 pada Sunan Gunung Djati 2024.'
      ]
    },
    statusMatrix: [
      { feature: 'Holonomic Mecanum Kinematics', status: 'Implemented', note: 'Omni-directional vectoring verified.' },
      { feature: 'High-Speed Line Follower Firmware', status: 'Implemented', note: 'Calibration state machines tested.' },
      { feature: 'Dual Transporter Lifting Mechanisms', status: 'Implemented', note: 'Payload handling operational in arena.' },
      { feature: 'Competitive Validations', status: 'Implemented', note: 'Top 5 FUTURA 2025 & 4th SGD 2024.' }
    ],
    images: [
      {
        src: './images/robotics/robotics-placeholder.png',
        alt: 'Mobile Robotics & Transporter Platforms',
        caption: 'Mecanum wheeled mobile robotics chassis with microcontroller integration and lifting mechanism.',
        aspectRatio: 'video'
      }
    ],
    links: {
      github: '#'
    },
    featured: true,
    competitionContext: 'Top 5 Finalist at FUTURA Transporter 2025 (UNPAD) and 4th Place at Sunan Gunung Djati Robotic 2024.',
    relatedProjectIds: ['mandor', 'simandiri', 'maestro']
  },
  {
    id: 'ai-component-identification',
    title: 'AI Electronic Component Identification',
    subtitle: 'Deep Learning Object Detection for Electronics & Robotics',
    category: 'Computer Vision / Deep Learning / Hardware Engineering',
    categoryTag: 'ai-cv',
    shortDescription: 'Computer Vision platform utilizing deep learning object detection to automatically identify, locate, and classify 11 categories of microcontrollers and electronic modules.',
    description: {
      en: 'An applied Computer Vision and Deep Learning project focused on automating the localization and identification of microcontrollers, sensor boards, and electronic hardware components from real-time camera feeds. Featuring an end-to-end dataset curation workflow from manual bounding-box annotation to model training and desktop inference.',
      id: 'Proyek Computer Vision dan Deep Learning terapan yang berfokus pada otomatisasi pelokalisasian dan identifikasi mikrokontroler, modul sensor, dan komponen elektronika dari feed kamera real-time. Mencakup alur kurasi dataset end-to-end dari anotasi bounding-box manual hingga inferensi desktop.'
    },
    problemStatement: {
      en: 'Engineering students and laboratory technicians frequently encounter unorganized hardware bins or struggle to quickly identify small surface-mount microcontrollers and breakout boards, risking incorrect wiring and slowing down prototyping.',
      id: 'Mahasiswa teknik dan teknisi laboratorium sering menjumpai wadah komponen yang belum terorganisir atau kesulitan mengenali modul perangkat keras secara cepat, sehingga berisiko salah pasang kabel.'
    },
    objectives: {
      en: [
        'Collect and curate balanced dataset of electronic components across varying lighting conditions.',
        'Annotate bounding boxes manually across 11 discrete hardware classes.',
        'Train neural object detection model with evaluation metrics.',
        'Build real-time OpenCV desktop camera demonstration script.'
      ],
      id: [
        'Mengumpulkan dan mengkurasi dataset komponen elektronika dalam berbagai pencahayaan.',
        'Melakukan anotasi bounding box secara manual pada 11 kelas hardware diskrit.',
        'Melatih model deteksi objek neural network dengan metrik evaluasi presisi.',
        'Membangun skrip demonstrasi kamera desktop OpenCV real-time.'
      ]
    },
    technologies: ['Computer Vision', 'YOLO', 'Python', 'OpenCV', 'Dataset Engineering', 'Roboflow'],
    personalContribution: {
      en: 'Independently photographed component samples, systematically labeled bounding-box ground truths, configured training hyperparameters, and built the camera inference script.',
      id: 'Secara mandiri mengumpulkan citra komponen, melabeli bounding-box ground truth secara sistematis, mengonfigurasi parameter pelatihan, dan menyusun skrip inferensi kamera.'
    },
    architecture: {
      en: 'Video frames are captured via OpenCV, normalized, and evaluated by the neural network. Bounding boxes, class names, and confidence scores are rendered as real-time visual overlays.',
      id: 'Frame video ditangkap via OpenCV, dinormalisasi, dan dievaluasi oleh neural network. Kotak pembatas, nama kelas, dan skor kepercayaan ditampilkan secara langsung.',
      diagramSteps: [
        { step: '01', title: 'Image Capture', description: 'Camera acquires frame of hardware component on test surface.' },
        { step: '02', title: 'Preprocessing', description: 'Resizing, aspect ratio preservation, and normalization.' },
        { step: '03', title: 'Neural Inference', description: 'Feature map extraction and bounding box regression.' },
        { step: '04', title: 'Overlay Render', description: 'Bounding box and classification label displayed to user.' }
      ]
    },
    statusMatrix: [
      { feature: '11-Class Component Dataset', status: 'Implemented', note: 'Cleanly partitioned train/val/test splits.' },
      { feature: 'Trained Object Detection Model', status: 'Implemented', note: 'High validation mAP across classes.' },
      { feature: 'OpenCV Live Inference Script', status: 'Tested', note: 'Real-time webcam inference operational.' }
    ],
    images: [
      {
        src: './images/component-detection/component-detection-placeholder.png',
        alt: 'Component Detection Model Output',
        caption: 'Computer vision model identifying electronic hardware modules with bounding boxes.',
        aspectRatio: 'video'
      }
    ],
    links: { github: '#' },
    featured: false,
    relatedProjectIds: ['mandor', 'simandiri', 'maestro']
  },
  {
    id: 'aqua-eye',
    title: 'AQUA-EYE',
    subtitle: 'AI-Based River Environmental Monitoring System',
    category: 'Computer Vision / IoT / Environmental Engineering',
    categoryTag: 'ai-cv',
    shortDescription: 'Samsung Solve for Tomorrow 2026 Semifinalist prototype combining multi-parameter water quality sensing with Computer Vision for river surface waste monitoring.',
    description: {
      en: 'AQUA-EYE is an environmental sensing platform engineered for the national Samsung Solve for Tomorrow 2026 competition (qualifying as a Stage 2 / Semifinalist team). The system monitors river health by coupling continuous water quality sensors (pH, turbidity, dissolved solids) with Computer Vision for floating plastic debris detection and embankment surveillance.',
      id: 'AQUA-EYE adalah platform pemantauan lingkungan yang dirancang untuk kompetisi nasional Samsung Solve for Tomorrow 2026 (lolos sebagai tim Stage 2 / Semifinalis). Sistem memantau sungai dengan memadukan sensor kualitas air berkelanjutan (pH, kekeruhan) dengan Computer Vision untuk deteksi sampah plastik dan pengawasan sempadan.'
    },
    problemStatement: {
      en: 'Urban river pollution requires both chemical water diagnostics and visual waste detection. Manual sampling is infrequent and fails to provide early alerts during dumping incidents.',
      id: 'Pencemaran sungai perkotaan memerlukan diagnostik kimiawi air sekaligus deteksi visual sampah. Pengambilan sampel manual lambat dan tidak mampu memberikan peringatan dini.'
    },
    objectives: {
      en: [
        'Deploy continuous in-situ monitoring of key water parameters.',
        'Implement Computer Vision object detection for floating river solid waste.',
        'Stream multi-modal environmental telemetry to a centralized dashboard.'
      ],
      id: [
        'Menerapkan pemantauan in-situ berkelanjutan untuk parameter air sungai utama.',
        'Mengimplementasikan deteksi objek Computer Vision untuk sampah plastik terapung.',
        'Menyajikan telemetri lingkungan multi-modal ke dashboard terpusat.'
      ]
    },
    technologies: ['Computer Vision', 'YOLO', 'IoT Sensors', 'ESP32', 'Python', 'Environmental Monitoring'],
    personalContribution: {
      en: 'Contributed to sensor hardware integration, computer vision dataset annotation, and competition technical documentation.',
      id: 'Berkontribusi pada integrasi hardware sensor, anotasi dataset visi komputer, dan penyusunan dokumentasi teknis kompetisi.'
    },
    teamCredits: {
      isTeam: true,
      teamName: 'AQUA-EYE Engineering Team',
      members: ['Bintang Shobri Al Chakim', 'Lukita Fallensia Marjan', 'Muhammad Basit Rozak Akbar', 'Ilham Nur Fiqri'],
      role: 'Hardware & Computer Vision Subsystem Contributor'
    },
    architecture: {
      en: 'Station buoys capture water quality metrics while an onboard camera records river surface imagery for local edge processing and cloud alert dispatch.',
      id: 'Pelampung stasiun mencatat metrik kualitas air sementara kamera merekam permukaan sungai untuk pemrosesan lokal dan pengiriman peringatan.',
      diagramSteps: [
        { step: '01', title: 'Multi-Sensing', description: 'Continuous probes read turbidity, TDS, and pH.' },
        { step: '02', title: 'Visual Capture', description: 'Camera frames river surface for object analysis.' },
        { step: '03', title: 'Detection Engine', description: 'Identifies floating debris and unauthorized human activity.' },
        { step: '04', title: 'Alert Telemetry', description: 'Broadcasts water index and environmental warnings.' }
      ]
    },
    statusMatrix: [
      { feature: 'Multi-Parameter Water Sensing', status: 'Implemented', note: 'Calibrated laboratory sensor readings.' },
      { feature: 'Debris Computer Vision Model', status: 'Tested', note: 'Tested against floating plastic waste datasets.' },
      { feature: 'Samsung Solve for Tomorrow Stage 2', status: 'Implemented', note: 'Qualified into Semifinalist round.' }
    ],
    images: [
      {
        src: './images/aqua-eye/aqua-eye-prototype-placeholder.png',
        alt: 'AQUA-EYE Environmental Buoy System',
        caption: 'AQUA-EYE multi-parameter sensing buoy and camera housing.',
        aspectRatio: 'video'
      }
    ],
    links: { github: '#' },
    featured: false,
    competitionContext: 'Stage 2 / Semifinalist Team at Samsung Solve for Tomorrow 2026.',
    relatedProjectIds: ['mandor', 'simandiri', 'maestro']
  },
  {
    id: 'rag-lab-assistant',
    title: 'AI Lab Technical Assistant (RAG)',
    subtitle: 'Intelligent Knowledge Retrieval for Engineering Laboratories',
    category: 'Generative AI / RAG / Knowledge Systems',
    categoryTag: 'gen-ai',
    shortDescription: 'Generative AI assistant utilizing Retrieval-Augmented Generation (RAG) and Google Gemini API to query laboratory SOPs, equipment pinouts, and safety protocols.',
    description: {
      en: 'A generative AI assistant engineered to help engineering students and laboratory technicians rapidly query complex machinery operation manuals, safety standard operating procedures (SOPs), and hardware pinout schematics using semantic document retrieval and Google Gemini API.',
      id: 'Asisten AI generatif yang dirancang untuk membantu mahasiswa dan staf lab mencari manual pengoperasian mesin, SOP keselamatan kerja, dan skematik pinout perangkat keras menggunakan pencarian semantik dokumen dan Gemini API.'
    },
    problemStatement: {
      en: 'Engineering laboratories hold hundreds of pages of machine manuals and safety protocols. Technicians waste critical time searching through physical binders during laboratory sessions.',
      id: 'Laboratorium teknik memiliki ratusan halaman manual mesin dan protokol keselamatan. Teknisi dan mahasiswa membuang waktu mencari dokumen saat praktikum berlangsung.'
    },
    objectives: {
      en: [
        'Implement vector embedding pipeline for engineering SOP documents.',
        'Connect semantic similarity search with Google Gemini API for grounded responses.',
        'Deploy an interactive web chat interface for laboratory personnel.'
      ],
      id: [
        'Menerapkan pipeline embedding vektor untuk dokumen SOP rekayasa.',
        'Menghubungkan pencarian kemiripan semantik dengan Gemini API untuk jawaban berbasis data.',
        'Menerapkan antarmuka obrolan web interaktif bagi pengguna lab.'
      ]
    },
    technologies: ['Generative AI', 'Retrieval-Augmented Generation (RAG)', 'Google Gemini API', 'Langflow', 'Python', 'Streamlit'],
    personalContribution: {
      en: 'Architected document chunking strategy, implemented vector database embeddings, and connected Gemini API prompts via Streamlit.',
      id: 'Merancang strategi pemotongan dokumen, mengimplementasikan embedding basis data vektor, dan menghubungkan prompt Gemini API via Streamlit.'
    },
    architecture: {
      en: 'Technical PDF manuals are chunked into vector embeddings. User questions trigger semantic nearest-neighbor retrieval, feeding relevant excerpts to Gemini API for grounded answers.',
      id: 'Manual teknis dipecah menjadi embedding vektor. Pertanyaan pengguna memicu pencarian semantik, meneruskan kutipan relevan ke Gemini API untuk menghasilkan jawaban akurat.',
      diagramSteps: [
        { step: '01', title: 'Document Chunking', description: 'PDF laboratory manuals converted into semantic text blocks.' },
        { step: '02', title: 'Vector Store', description: 'High-dimensional embeddings indexed for fast similarity search.' },
        { step: '03', title: 'Semantic Query', description: 'User question retrieves top relevant manual passages.' },
        { step: '04', title: 'Gemini Synthesis', description: 'LLM generates exact, citation-backed technical instructions.' }
      ]
    },
    statusMatrix: [
      { feature: 'RAG Semantic Vector Pipeline', status: 'Implemented', note: 'Document chunking and indexing operational.' },
      { feature: 'Gemini API Grounded Reasoning', status: 'Tested', note: 'Accurate technical SOP retrieval verified.' }
    ],
    images: [
      {
        src: './images/maestro/maestro-dashboard-placeholder.png',
        alt: 'RAG Technical Assistant Interface',
        caption: 'Interactive technical chat interface for laboratory documentation retrieval.',
        aspectRatio: 'video'
      }
    ],
    links: { github: '#' },
    featured: false,
    relatedProjectIds: ['mandor', 'maestro']
  },
  {
    id: 'kdrama-expert-system',
    title: 'K-Drama Platform Prediction System',
    subtitle: 'Machine Learning Classification & Feature Engineering',
    category: 'Machine Learning / Web Development',
    categoryTag: 'web-ml',
    shortDescription: 'Predictive machine learning web application using Scikit-learn Decision Tree algorithms to analyze metadata attributes and predict streaming platform availability.',
    description: {
      en: 'A predictive machine learning web application developed with Scikit-learn and Flask. Applies Decision Tree classification algorithms on media metadata (genre, cast popularity, network) to predict streaming platform availability, demonstrating feature engineering and model serving.',
      id: 'Aplikasi web machine learning prediktif menggunakan Scikit-learn dan Flask. Menerapkan klasifikasi Decision Tree pada metadata media untuk memprediksi ketersediaan platform streaming, mendemonstrasikan rekayasa fitur dan penyajian model ML.'
    },
    problemStatement: {
      en: 'Demonstrating how structured tabular datasets can be analyzed using interpretable decision tree algorithms and served through clean web endpoints.',
      id: 'Mendemonstrasikan bagaimana dataset tabular terstruktur dapat dianalisis menggunakan pohon keputusan yang dapat diinterpretasikan dan disajikan via antarmuka web.'
    },
    objectives: {
      en: [
        'Preprocess and encode tabular categorical metadata.',
        'Train and evaluate Scikit-learn Decision Tree classifier.',
        'Deploy serialized model behind a lightweight Flask REST web service.'
      ],
      id: [
        'Melakukan prapemrosesan dan pengodean metadata kategorikal tabular.',
        'Melatih dan mengevaluasi pengklasifikasi Decision Tree Scikit-learn.',
        'Menyajikan model terserialisasi di balik layanan web Flask REST.'
      ]
    },
    technologies: ['Machine Learning', 'Decision Trees', 'Scikit-learn', 'Python', 'Flask', 'HTML/CSS'],
    personalContribution: {
      en: 'Performed exploratory data analysis, trained Decision Tree models, implemented model serialization, and built the web UI.',
      id: 'Melakukan analisis data eksploratif, melatih model Decision Tree, menerapkan serialisasi model, dan membangun UI web.'
    },
    architecture: {
      en: 'User enters parameters via web form. Flask backend validates input, constructs feature vector, executes Decision Tree inference, and displays classification results.',
      id: 'Pengguna memasukkan parameter via formulir web. Backend Flask memvalidasi input, menyusun vektor fitur, mengeksekusi inferensi Decision Tree, dan menampilkan hasil.'
    },
    statusMatrix: [
      { feature: 'Decision Tree ML Model', status: 'Implemented', note: 'Trained and serialized with Scikit-learn.' },
      { feature: 'Flask Web Application', status: 'Tested', note: 'Interactive user input form functional.' }
    ],
    images: [
      {
        src: './images/maestro/maestro-dashboard-placeholder.png',
        alt: 'ML Prediction Interface',
        caption: 'Web interface for Decision Tree model prediction.',
        aspectRatio: 'video'
      }
    ],
    links: { github: '#' },
    featured: false,
    relatedProjectIds: ['ai-component-identification', 'mandor']
  }
];
