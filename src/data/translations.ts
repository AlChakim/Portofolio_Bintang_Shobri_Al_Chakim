export interface TranslationMap {
  [key: string]: {
    en: string;
    id: string;
  };
}

export const translations: TranslationMap = {
  // Navigation
  'nav.home': { en: 'Home', id: 'Beranda' },
  'nav.about': { en: 'About', id: 'Tentang' },
  'nav.expertise': { en: 'Expertise', id: 'Keahlian' },
  'nav.works': { en: 'Works', id: 'Karya' },
  'nav.experience': { en: 'Experience', id: 'Pengalaman' },
  'nav.achievements': { en: 'Achievements', id: 'Prestasi' },
  'nav.contact': { en: 'Contact', id: 'Kontak' },
  'nav.downloadCv': { en: 'Curriculum Vitae', id: 'Curriculum Vitae' },
  'nav.brandRole': { en: 'Industrial Informatics Engineer', id: 'Teknologi Rekayasa Informatika Industri' },

  // Hero Section
  'hero.tag': { en: 'POLMAN BANDUNG • INDUSTRIAL INFORMATICS', id: 'POLMAN BANDUNG • REKAYASA INFORMATIKA INDUSTRI' },
  'hero.headlineMain1': { en: 'ENGINEERING', id: 'REKAYASA' },
  'hero.headlineMain2': { en: 'INTELLIGENCE', id: 'KECERDASAN' },
  'hero.headlineSub1': { en: 'BUILDING INDUSTRIAL', id: 'MEMBANGUN INOVASI' },
  'hero.headlineSub2': { en: 'INNOVATION', id: 'INDUSTRI' },
  'hero.supporting': {
    en: "I'm Bintang Shobri Al Chakim, an Industrial Informatics Engineering Technology student exploring the intersection of intelligent software, embedded systems, and industrial innovation.",
    id: 'Saya Bintang Shobri Al Chakim, mahasiswa Teknologi Rekayasa Informatika Industri yang mengeksplorasi titik temu antara perangkat lunak cerdas, sistem tersemat, dan inovasi industri.'
  },
  'hero.narrativeBadge': {
    en: 'Bridging Hardware, Intelligent Software, and Industrial Innovation',
    id: 'Menjembatani Hardware, Perangkat Lunak Cerdas, dan Inovasi Industri'
  },
  'hero.exploreWorks': { en: 'Explore Selected Works', id: 'Lihat Karya Terpilih' },
  'hero.contactMe': { en: "Let's Connect", id: 'Hubungi Saya' },
  'hero.location': { en: 'Bandung, Indonesia', id: 'Bandung, Indonesia' },
  'hero.institution': { en: 'Politeknik Manufaktur Negeri Bandung', id: 'Politeknik Manufaktur Negeri Bandung' },
  'hero.scrollIndicator': { en: 'Scroll to explore', id: 'Gulir untuk menjelajahi' },

  // About Section
  'about.eyebrow': { en: '01 / TECHNICAL IDENTITY & JOURNEY', id: '01 / IDENTITAS TEKNIS & PERJALANAN' },
  'about.title': { en: 'BRIDGING HARDWARE WITH', id: 'MENJEMBATANI HARDWARE DENGAN' },
  'about.titleOutline': { en: 'INTELLIGENT', id: 'PERANGKAT LUNAK' },
  'about.titleAccent': { en: 'SOFTWARE', id: 'CERDAS' },
  'about.p1': {
    en: 'I am an Industrial Informatics Engineering Technology student at Politeknik Manufaktur Negeri Bandung (2024–2028), with an electronics and engineering foundation from SMK Negeri 4 Bandung in Audio Video Electronics Engineering (2021–2024).',
    id: 'Saya adalah mahasiswa Teknologi Rekayasa Informatika Industri di Politeknik Manufaktur Negeri Bandung (2024–2028), dengan fondasi keteknikan elektronika dari SMK Negeri 4 Bandung jurusan Teknik Audio Video (2021–2024).'
  },
  'about.p2': {
    en: 'My engineering journey evolved from wheeled robotics and embedded microcontroller programming toward high-impact intelligent industrial software: deploying Edge AI neural acceleration on Google Coral TPUs, integrating Industrial IoT telemetry via MQTT, and interconnecting factory operations through Manufacturing Execution Systems (MES) and ERP workflows.',
    id: 'Perjalanan rekayasa saya berevolusi dari robotika beroda dan pemrograman mikrokontroler menuju perangkat lunak industri cerdas berdaya guna tinggi: menerapkan akselerasi neural Edge AI pada Google Coral TPU, mengintegrasikan telemetri Industrial IoT via MQTT, dan menghubungkan operasional pabrik melalui Manufacturing Execution Systems (MES) serta ERP.'
  },
  'about.p3': {
    en: 'Rather than treating software, artificial intelligence, and robotics as isolated domains, I specialize in their end-to-end physical integration — where intelligent algorithms directly inform machine control, predictive maintenance, and industrial digital twin visualization.',
    id: 'Alih-alih memandang perangkat lunak, kecerdasan buatan, dan robotika sebagai ranah yang terpisah, saya berfokus pada integrasi fisik menyeluruh — di mana algoritma cerdas memandu langsung kendali mesin, pemeliharaan prediktif, dan visualisasi digital twin industri.'
  },

  // Expertise Section
  'expertise.eyebrow': { en: '02 / TECHNICAL DISCIPLINES', id: '02 / BIDANG TEKNIS' },
  'expertise.title': { en: 'CORE AREAS OF', id: 'FOKUS BIDANG' },
  'expertise.titleOutline': { en: 'ENGINEERING', id: 'REKAYASA' },
  'expertise.titleAccent': { en: 'CAPABILITY', id: 'INDUSTRI' },
  'expertise.desc': {
    en: 'Organized into 5 foundational pillars combining hardware architecture, edge intelligence, and software infrastructure.',
    id: 'Terstruktur dalam 5 pilar fundamental yang memadukan arsitektur perangkat keras, kecerdasan edge, dan infrastruktur perangkat lunak.'
  },

  // Selected Works Section
  'works.eyebrow': { en: '03 / SELECTED WORKS & CASE STUDIES', id: '03 / KARYA & STUDI KASUS' },
  'works.title': { en: 'ENGINEERED', id: 'SISTEM' },
  'works.titleOutline': { en: 'INDUSTRIAL', id: 'REKAYASA' },
  'works.titleAccent': { en: 'SYSTEMS', id: 'CERDAS' },
  'works.desc': {
    en: 'Full-stack engineering deployments spanning Digital Twins, Edge AI inference, IoT telemetries, and competitive autonomous robotics.',
    id: 'Implementasi rekayasa menyeluruh mencakup Digital Twin, inferensi Edge AI, telemetri IoT, dan robotika otonom kompetitif.'
  },
  'works.viewCaseStudy': { en: 'View Case Study', id: 'Lihat Studi Kasus' },
  'works.keyTechnologies': { en: 'Core Stack:', id: 'Teknologi Utama:' },
  'works.personalScope': { en: 'Engineering Contribution:', id: 'Kontribusi Rekayasa:' },

  // Experience Section
  'experience.eyebrow': { en: '04 / PROFESSIONAL & ORGANIZATIONAL TIMELINE', id: '04 / PENGALAMAN & ORGANISASI' },
  'experience.title': { en: 'LEADERSHIP &', id: 'KEPEMIMPINAN &' },
  'experience.titleOutline': { en: 'TECHNICAL', id: 'PENGEMBANGAN' },
  'experience.titleAccent': { en: 'ORGANIZATIONS', id: 'ORGANISASI' },
  'experience.desc': {
    en: 'Institutional leadership, academic sub-division stewardship, and hands-on robotics engineering mentorship at Politeknik Manufaktur Negeri Bandung.',
    id: 'Kepemimpinan organisasi, pengelolaan sub-divisi akademik & ilmiah, serta pendampingan rekayasa robotika di Politeknik Manufaktur Negeri Bandung.'
  },

  // Achievements Section
  'achievements.eyebrow': { en: '05 / HONORS & COMPETITIVE ACHIEVEMENTS', id: '05 / PRESTASI & PENGHARGAAN' },
  'achievements.title': { en: 'COMPETITIVE', id: 'REKAM JEJAK' },
  'achievements.titleOutline': { en: 'AWARDS &', id: 'PRESTASI &' },
  'achievements.titleAccent': { en: 'HONORS', id: 'KOMPETISI' },
  'achievements.desc': {
    en: 'Verified achievements across national and international IoT, Edge AI, and robotics engineering competitions.',
    id: 'Prestasi terverifikasi di berbagai kompetisi rekayasa IoT, Edge AI, dan robotika tingkat nasional maupun internasional.'
  },

  // Contact Section
  'contact.eyebrow': { en: '06 / INITIATE COLLABORATION', id: '06 / MULAI KOLABORASI' },
  'contact.headline': { en: "Let's Build Something Meaningful.", id: 'Mari Membangun Sesuatu yang Bermakna.' },
  'contact.supporting': {
    en: 'Whether you are looking to collaborate on industrial AI projects, IoT system integrations, engineering research, or technical opportunities, I welcome thoughtful conversations.',
    id: 'Baik Anda tertarik berkolaborasi dalam proyek AI industri, integrasi sistem IoT, riset rekayasa, maupun peluang teknis lainnya, saya sangat menyambut diskusi yang bermakna.'
  },
  'contact.getInTouch': { en: 'Send Direct Message', id: 'Kirim Pesan Langsung' },
  'contact.copyEmail': { en: 'Copy Email Address', id: 'Salin Alamat Email' },
  'contact.emailCopied': { en: 'Email Copied!', id: 'Email Disalin!' },

  // Footer
  'footer.backToTop': { en: 'Back to Top', id: 'Kembali ke Atas' },
  'footer.allRightsReserved': { en: 'All Rights Reserved', id: 'Hak Cipta Dilindungi' },
  'footer.roleTag': {
    en: 'Industrial Informatics Engineering Technology • Politeknik Manufaktur Negeri Bandung',
    id: 'Teknologi Rekayasa Informatika Industri • Politeknik Manufaktur Negeri Bandung'
  }
};
