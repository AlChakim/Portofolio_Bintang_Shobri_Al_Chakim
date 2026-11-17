import { TimelineJourneyItem } from '../types';

export const journeyData: TimelineJourneyItem[] = [
  {
    id: 'stage-1',
    stage: 'Phase 01',
    title: {
      en: 'Embedded Systems & Microcontroller Fundamentals',
      id: 'Fondasi Sistem Tersemat & Mikrokontroler'
    },
    period: 'Early Academic Path',
    description: {
      en: 'Began building low-level hardware controllers with Arduino and ESP32 microcontrollers. Mastered hardware I/O interfacing, sensor integration (I2C, SPI, UART), interrupt handling, and motor driving basics.',
      id: 'Memulai perancangan kontroler perangkat keras tingkat rendah dengan mikrokontroler Arduino dan ESP32. Menguasai antarmuka I/O perangkat keras, integrasi sensor (I2C, SPI, UART), interrupt handling, dan dasar penggerak motor.'
    },
    technologies: ['C/C++', 'Arduino', 'ESP32', 'Sensors & Actuators', 'I2C/SPI'],
    keyOutcome: {
      en: 'Built strong intuition for physical hardware circuits, electrical signals, and bare-metal programming constraints.',
      id: 'Membangun pemahaman mendalam tentang sirkuit perangkat keras fisik, sinyal listrik, dan batasan pemrograman bare-metal.'
    }
  },
  {
    id: 'stage-2',
    stage: 'Phase 02',
    title: {
      en: 'Robotics, Kinematics & Closed-Loop Control',
      id: 'Robotika, Kinematika & Kontrol Loop-Tertutup'
    },
    period: 'ASC 2024 Cycle',
    description: {
      en: 'Stepped into competitive mobile robotics for the ASC 2024 Mobile Robotics competition. Designed 4-wheel mecanum omni-directional drive kinematics, closed-loop PID velocity regulation with motor encoders, and joystick wireless control.',
      id: 'Terjun ke bidang robotika mobile kompetitif pada ajang ASC 2024 Mobile Robotics. Merancang kinematika omni-directional roda mecanum 4-roda, regulasi kecepatan loop-tertutup PID dengan encoder motor, dan kendali nirkabel joystick.'
    },
    technologies: ['Mecanum Drive', 'PID Control', 'Motor Encoders', 'Wireless Teleoperation'],
    keyOutcome: {
      en: 'Gained real-world experience designing, wiring, tuning, and field-debugging autonomous and teleoperated robots under tight competition timelines.',
      id: 'Memperoleh pengalaman nyata dalam merancang, menginstalasi, melakukan tuning, dan perbaikan lapangan robot otonom di bawah batasan waktu kompetisi.'
    }
  },
  {
    id: 'stage-3',
    stage: 'Phase 03',
    title: {
      en: 'Machine Learning & Predictive Modeling',
      id: 'Machine Learning & Pemodelan Prediktif'
    },
    period: 'Data Science & Algorithm Integration',
    description: {
      en: 'Expanded from deterministic control algorithms into statistical learning and predictive analytics. Developed tabular classification systems (Decision Trees) and text NLP models using Scikit-learn, paired with Flask web backends.',
      id: 'Berkembang dari algoritma kontrol deterministik ke pembelajaran statistik dan analitik prediktif. Mengembangkan sistem klasifikasi data tabular (Decision Tree) dan model NLP teks dengan Scikit-learn, dipadukan dengan backend web Flask.'
    },
    technologies: ['Python', 'Scikit-learn', 'Decision Trees', 'NLP / TF-IDF', 'Flask'],
    keyOutcome: {
      en: 'Learned the mathematical and practical foundations of feature preprocessing, model evaluation, and serving machine learning predictions.',
      id: 'Mempelajari fondasi matematis dan praktis dari prapemrosesan fitur, evaluasi model, dan penyajian prediksi machine learning via web.'
    }
  },
  {
    id: 'stage-4',
    stage: 'Phase 04',
    title: {
      en: 'Computer Vision & Object Detection',
      id: 'Computer Vision & Deteksi Objek'
    },
    period: 'Visual Intelligence Prototyping',
    description: {
      en: 'Ventured into deep learning visual perception. Built end-to-end dataset pipelines: photographing electronic hardware components, bounding box annotation, data augmentation, and training deep object detection models for component and river waste recognition.',
      id: 'Mendalami persepsi visual berbasis deep learning. Membangun pipeline dataset end-to-end: pengambilan foto komponen perangkat keras, anotasi bounding box, augmentasi data, dan pelatihan model deteksi objek mendalam untuk pengenalan komponen dan sampah sungai.'
    },
    technologies: ['YOLO', 'OpenCV', 'Image Annotation', 'Dataset Curation', 'AQUA-EYE'],
    keyOutcome: {
      en: 'Recognized that high-performing vision systems depend as heavily on data cleanliness and labeling discipline as model architecture.',
      id: 'Menyadari bahwa sistem visi dengan performa tinggi sangat bergantung pada kebersihan data dan disiplin pelabelan, setara dengan arsitektur model.'
    }
  },
  {
    id: 'stage-5',
    stage: 'Phase 05',
    title: {
      en: 'Edge AI Acceleration & Industrial IoT',
      id: 'Akselerasi Edge AI & Industrial IoT'
    },
    period: 'MANDOR AI Prototype',
    description: {
      en: 'Merged Machine Learning directly with embedded industrial hardware. Integrated Google Coral Edge TPU with ESP32 sensor clusters over MQTT to evaluate high-speed vibration and thermal anomaly classification locally on the machine.',
      id: 'Menggabungkan Machine Learning langsung dengan perangkat keras industri tersemat. Mengintegrasikan Google Coral Edge TPU dengan klaster sensor ESP32 via MQTT untuk mengevaluasi anomali getaran dan suhu berkecepatan tinggi secara lokal di mesin.'
    },
    technologies: ['Google Coral Edge TPU', 'MQTT Broker', 'Edge Inference', 'MANDOR AI'],
    keyOutcome: {
      en: 'Proved the feasibility of sub-millisecond, low-power edge intelligence for real-time condition monitoring without depending on continuous cloud uptime.',
      id: 'Membuktikan kelayakan kecerdasan edge berdaya rendah dan berlatensi sub-milidetik untuk pemantauan kondisi real-time tanpa bergantung pada cloud terus-menerus.'
    }
  },
  {
    id: 'stage-6',
    stage: 'Phase 06',
    title: {
      en: 'Integrated Intelligent Industrial Systems & Digital Twin',
      id: 'Sistem Industri Cerdas Terintegrasi & Digital Twin'
    },
    period: 'MAESTRO & Future Horizon',
    description: {
      en: 'Synthesized all previous disciplines into MAESTRO: an end-to-end intelligent manufacturing platform combining physical sensor telemetry, Google Coral Edge TPU inference, Unity VR 3D Digital Twin visualization, CMMS maintenance workflows, and an AI diagnostic assistant.',
      id: 'Mensintesiskan semua disiplin ilmu sebelumnya ke dalam MAESTRO: platform manufaktur cerdas end-to-end yang menggabungkan telemetri sensor fisik, inferensi Google Coral Edge TPU, visualisasi Digital Twin 3D VR Unity, alur kerja pemeliharaan CMMS, dan asisten diagnostik AI.'
    },
    technologies: ['MAESTRO Platform', 'Unity VR Digital Twin', 'CMMS / ERP', 'Multi-Modal AI'],
    keyOutcome: {
      en: 'Achieved 3rd Place at International Innovation 4Force 2026 and built an integrated systems engineering foundation for smart manufacturing.',
      id: 'Meraih Juara 3 pada International Innovation 4Force 2026 dan membangun fondasi rekayasa sistem terintegrasi untuk manufaktur cerdas.'
    }
  }
];

