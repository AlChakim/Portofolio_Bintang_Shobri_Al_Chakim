import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'ai-cv',
    title: {
      en: 'Artificial Intelligence & Computer Vision',
      id: 'Kecerdasan Buatan & Computer Vision'
    },
    icon: 'Eye',
    description: {
      en: 'Real-time Edge AI inference, custom object detection, neural acceleration, and computer vision pipelines.',
      id: 'Inferensi Edge AI real-time, deteksi objek terarah, akselerasi neural, dan pipeline visi komputer.'
    },
    skills: [
      { name: 'Edge AI Acceleration', isVerified: true, context: 'Google Coral Edge TPU quantized neural model deployment' },
      { name: 'Computer Vision & YOLOv8', isVerified: true, context: 'Object detection, facial recognition & safety equipment compliance' },
      { name: 'Machine Learning & Scikit-learn', isVerified: true, context: 'Supervised classification, predictive modeling, decision trees' },
      { name: 'OpenCV & Image Processing', isVerified: true, context: 'Frame manipulation, feature extraction, camera feed handling' },
      { name: 'Dataset Annotation & Engineering', isVerified: true, context: 'Systematic dataset curation, bounding-box labeling, augmentation' }
    ]
  },
  {
    id: 'iiot-embedded',
    title: {
      en: 'Industrial IoT & Embedded Systems',
      id: 'Industrial IoT & Sistem Tersemat'
    },
    icon: 'Radio',
    description: {
      en: 'Microcontroller programming, physical sensor telemetry, industrial field protocols, and edge hardware interfaces.',
      id: 'Pemrograman mikrokontroler, telemetri sensor fisik, protokol komunikasi industri, dan antarmuka hardware edge.'
    },
    skills: [
      { name: 'ESP32 & Arduino Architectures', isVerified: true, context: 'Firmware development, sensor bus interfacing, RTOS loops' },
      { name: 'Microcontroller Programming', isVerified: true, context: 'Bare-metal C/C++, timing interrupts, peripheral drivers' },
      { name: 'IoT System Integration', isVerified: true, context: 'Low-latency MQTT broker telemetry, edge-to-dashboard pipelines' },
      { name: 'Physical Sensor Acquisition', isVerified: true, context: 'Vibration, temperature, current, RPM, ultrasonic, RFID' },
      { name: 'Industrial Communication Protocols', isVerified: true, context: 'MQTT, UART, I2C, SPI synchronous bus communication' }
    ]
  },
  {
    id: 'robotics-automation',
    title: {
      en: 'Robotics & Automation',
      id: 'Robotika & Otomasi'
    },
    icon: 'Bot',
    description: {
      en: 'Wheeled robotics kinematics, closed-loop feedback regulation, autonomous line following, and transporter mechanisms.',
      id: 'Kinematika robot beroda, regulasi kendali loop-tertutup, navigasi line follower otonom, dan mekanisme transporter.'
    },
    skills: [
      { name: 'Mobile Robotics Kinematics', isVerified: true, context: '4-wheel mecanum holonomic drives, differential drive bases' },
      { name: 'Closed-Loop PID Control', isVerified: true, context: 'Encoder feedback regulation, trajectory tracking, speed stabilization' },
      { name: 'Autonomous Line Follower Systems', isVerified: true, context: 'High-speed line tracing arrays, calibration algorithms, state machines' },
      { name: 'Transporter Robot Mechanics', isVerified: true, context: 'Gripper actuation, payload handling, arena navigation under competition constraints' },
      { name: 'Motor Drive & Power Distribution', isVerified: true, context: 'H-bridge motor drivers, PWM modulation, isolated logic/power rails' }
    ]
  },
  {
    id: 'industrial-systems',
    title: {
      en: 'Industrial Software & Systems',
      id: 'Perangkat Lunak & Sistem Industri'
    },
    icon: 'Layers',
    description: {
      en: 'Manufacturing Execution Systems (MES), ERP integration, Virtual Reality Digital Twins, and condition-based maintenance.',
      id: 'Manufacturing Execution Systems (MES), integrasi ERP, Digital Twin Virtual Reality, dan pemeliharaan berbasis kondisi.'
    },
    skills: [
      { name: 'Digital Twin Architectures', isVerified: true, context: 'Synchronizing physical machine telemetry with real-time digital replicas' },
      { name: 'Unity 3D & VR Visualization', isVerified: true, context: 'Immersive industrial machine dashboards, spatial telepresence' },
      { name: 'MES & ERP Operations', isVerified: true, context: 'Shop-floor data acquisition, production logging, ERP data interchange' },
      { name: 'CMMS & Predictive Maintenance', isVerified: true, context: 'Automated work-order generation triggered by edge machine health anomalies' },
      { name: 'Industrial Monitoring Dashboards', isVerified: true, context: 'Web-based real-time telemetry gauges, alarms, historical trending' }
    ]
  },
  {
    id: 'programming-dev',
    title: {
      en: 'Programming & Software Development',
      id: 'Pemrograman & Pengembangan Software'
    },
    icon: 'Code2',
    description: {
      en: 'Modern programming languages, cross-platform client applications, API backends, and structured databases.',
      id: 'Bahasa pemrograman modern, aplikasi klien lintas-platform, backend API, dan basis data terstruktur.'
    },
    skills: [
      { name: 'Python', isVerified: true, context: 'Core scripting, AI/ML inference pipelines, backend utilities, data analysis' },
      { name: 'C# & .NET', isVerified: true, context: 'Desktop application logic, Unity integration, enterprise system interfaces' },
      { name: 'Flutter', isVerified: true, context: 'Cross-platform mobile & dashboard UI development for industrial operator apps' },
      { name: 'C / C++', isVerified: true, context: 'Embedded firmware, high-performance algorithms, microcontroller programming' },
      { name: 'Web Backend & APIs', isVerified: true, context: 'Flask/FastAPI REST endpoints, JSON telemetry serialization, WebSocket/MQTT bridges' }
    ]
  }
];
