import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'himamo-head-academic',
    role: {
      en: 'Head of Academic & Scientific Sub-division',
      id: 'Ketua Sub-Divisi Akademik & Ilmiah'
    },
    institution: 'HIMAMO — Politeknik Manufaktur Negeri Bandung',
    location: 'Bandung, West Java, Indonesia',
    period: 'April 2026 – Present',
    type: 'academic',
    highlights: {
      en: [
        "Leading student academic and scientific development programs across the industrial manufacturing engineering cohort.",
        "Designing and coordinating hands-on technical workshops, peer tutoring sessions, and practical skill laboratories.",
        "Facilitating multidisciplinary student collaboration and technical knowledge sharing between campus organizations.",
        "Overseeing student competency assessments and technological skill incubation initiatives."
      ],
      id: [
        "Memimpin program pembinaan akademik dan pengembangan keilmuan mahasiswa di lingkungan teknik manufaktur industri.",
        "Merancang dan mengoordinasikan workshop teknis aplikatif, bimbingan teman sebaya, serta praktikum kompetensi mandiri.",
        "Memfasilitasi kolaborasi multidisiplin dan transfer pengetahuan teknis antar organisasi kemahasiswaan kampus.",
        "Mengawasi asesmen kebutuhan kompetensi mahasiswa dan inisiatif inkubasi kemampuan teknologi terapan."
      ]
    },
    technologies: ['Leadership', 'Academic Development', 'Technical Workshops', 'Scientific Initiatives', 'Mentorship']
  },
  {
    id: 'himamo-junior-staff',
    role: {
      en: 'Junior Staff — Academic & Scientific Sub-division',
      id: 'Staf Muda — Sub-Divisi Akademik & Ilmiah'
    },
    institution: 'HIMAMO — Politeknik Manufaktur Negeri Bandung',
    location: 'Bandung, West Java, Indonesia',
    period: 'March 2025 – Present',
    type: 'academic',
    highlights: {
      en: [
        "Conducted student competency needs assessments to identify emerging technical requirements in industrial computing.",
        "Researched modern technical skill standards across embedded systems, IoT integration, and software engineering.",
        "Assisted in coordinating academic support sessions, study groups, and student resource development initiatives.",
        "Supported organizational logistics and peer development workshops for engineering cohorts."
      ],
      id: [
        "Melakukan asesmen kebutuhan kompetensi mahasiswa untuk memetakan kebutuhan teknis komputasi industri terkini.",
        "Meriset standar kebutuhan keahlian teknis modern di bidang sistem tersemat, integrasi IoT, dan rekayasa perangkat lunak.",
        "Mendukung koordinasi sesi pendampingan akademik, kelompok belajar, dan program pengembangan sumber daya mahasiswa.",
        "Mendukung kelancaran operasional logistik organisasi dan pelaksanaan lokakarya peningkatan keterampilan mahasiswa."
      ]
    },
    technologies: ['Student Resource Development', 'Needs Assessment', 'Technical Research', 'Skill Mapping']
  },
  {
    id: 'robotic-engineers-society',
    role: {
      en: 'Member — Engineering Development',
      id: 'Anggota — Pengembangan Rekayasa (Engineering Development)'
    },
    institution: 'Robotic Engineers Society of POLMAN (RES)',
    location: 'Bandung, West Java, Indonesia',
    period: 'January 2025 – Present (Member since Aug 2024)',
    type: 'project',
    highlights: {
      en: [
        "Active member driving wheeled robotics hardware design, microcontroller programming, and autonomous navigation architectures.",
        "Person in Charge (PIC) for autonomous Line Follower construction and tuning projects, ensuring robust calibration under varying track conditions.",
        "Developed hardware-software integrations for competitive Transporter Robots (achieving Top 5 in national arena challenges).",
        "Provided hands-on technical guidance, soldering, circuit debugging, and firmware mentorship for junior robotics members."
      ],
      id: [
        "Anggota aktif divisi pengembangan rekayasa yang merancang hardware robot beroda, pemrograman mikrokontroler, dan navigasi otonom.",
        "Penanggung Jawab (PIC) proyek konstruksi dan kalibrasi robot Line Follower otonom untuk memastikan keandalan di lintasan lomba.",
        "Mengembangkan integrasi perangkat keras dan perangkat lunak pada Robot Transporter kompetisi (meraih Top 5 tingkat nasional).",
        "Memberikan bimbingan teknis langsung, pengelasan sirkuit elektronik, debugging firmware, dan pendampingan bagi anggota robotika junior."
      ]
    },
    technologies: ['Wheeled Robotics', 'Line Follower PIC', 'Transporter Systems', 'Firmware Tuning', 'PID Control', 'Microcontrollers']
  }
];
