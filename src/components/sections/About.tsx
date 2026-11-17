import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../animation/Reveal';
import { Cpu, GraduationCap, Network, Layers, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const { tr, t } = useLanguage();

  const engineeringPillars = [
    {
      num: '01',
      icon: Cpu,
      title: t('Hardware-Software Synthesis', 'Sintesis Hardware & Software'),
      desc: t(
        'Bridging the physical-digital divide: bare-metal C/C++, sensor electronics, closed-loop PID control, and deploying quantized neural models on Google Coral Edge TPUs.',
        'Menjembatani dunia fisik dan digital: pemrograman C/C++ bare-metal, elektronika sensor, kendali PID loop-tertutup, dan inferensi neural terkuantisasi pada Google Coral Edge TPU.'
      )
    },
    {
      num: '02',
      icon: Network,
      title: t('Industrial IoT & Telemetry', 'Industrial IoT & Telemetri'),
      desc: t(
        'Architecting resilient edge-to-dashboard communications using lightweight MQTT brokers, serial bridges, and shop-floor data acquisition pipelines.',
        'Merancang komunikasi edge-ke-dashboard yang andal menggunakan broker MQTT berlatensi rendah, jembatan serial, dan pipeline akuisisi data lantai pabrik.'
      )
    },
    {
      num: '03',
      icon: Layers,
      title: t('Industrial Software & MES/ERP', 'Perangkat Lunak Industri & MES/ERP'),
      desc: t(
        'Connecting physical machine vitals directly to Manufacturing Execution Systems (MES), ERP workflows, Computerized Maintenance (CMMS), and Unity 3D VR Digital Twins.',
        'Menghubungkan parameter fisik mesin langsung ke Manufacturing Execution Systems (MES), alur kerja ERP, pemeliharaan CMMS, dan Digital Twin VR Unity 3D.'
      )
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: t('Competitive Innovation Rigor', 'Ketelitian Rekayasa Kompetitif'),
      desc: t(
        'Proven in high-stakes engineering competitions: 1st Place KMIPN VIII (IoT), 2nd Place Teknocom International, and Top 5 FUTURA Transporter Robotics.',
        'Teruji dalam kompetisi rekayasa bergengsi: Juara 1 KMIPN VIII (IoT), Juara 2 Teknocom International, dan Top 5 Robotika Transporter FUTURA.'
      )
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-36 bg-[#F8FAFC] relative border-t border-slate-200 overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 bg-grid-blue pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="01"
          category={t('TECHNICAL IDENTITY & BACKGROUND', 'IDENTITAS TEKNIS & PERJALANAN')}
          title={tr('about.title')}
          titleOutline={tr('about.titleOutline')}
          titleAccent={tr('about.titleAccent')}
          description={t(
            'Industrial Informatics Engineering student exploring the physical convergence of electronics, Edge AI, and connected industrial software systems.',
            'Mahasiswa Teknologi Rekayasa Informatika Industri yang mengeksplorasi konvergensi fisik antara elektronika, Edge AI, dan sistem perangkat lunak industri terhubung.'
          )}
        />

        {/* Big Editorial Quote + Narrative Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
          {/* Left Column: Big Editorial Pullout + Academic Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal direction="left" distance={25}>
              <blockquote className="text-xl sm:text-2xl font-display font-black text-slate-950 leading-snug border-l-4 border-blue-600 pl-6 py-1">
                {t(
                  '"Software intelligence yields maximum industrial value when it physically touches machines — from bare-metal microcontrollers to edge neural accelerators."',
                  '"Kecerdasan perangkat lunak memberikan nilai maksimal bagi industri ketika berinteraksi langsung dengan mesin — dari mikrokontroler dasar hingga akselerator neural edge."'
                )}
              </blockquote>
            </Reveal>

            {/* Academic Credentials Card */}
            <Reveal direction="up" delay={0.15} distance={20}>
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-150">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-700">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-950">
                      {t('Verified Academic Track', 'Jalur Akademik Terverifikasi')}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500">
                      Engineering Education Foundation
                    </p>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>Politeknik Manufaktur Negeri Bandung</span>
                      <span className="text-blue-700 font-extrabold text-[11px]">2024–2028</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      D4 Teknologi Rekayasa Informatika Industri (Industrial Informatics Engineering Technology)
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>SMK Negeri 4 Bandung</span>
                      <span className="text-slate-500 text-[11px]">2021–2024</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Audio Video Electronics Engineering (Teknik Audio Video)
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: In-depth Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed font-normal text-base sm:text-lg">
            <Reveal direction="up" delay={0.1}>
              <p>
                {tr('about.p1')}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p>
                {tr('about.p2')}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p>
                {tr('about.p3')}
              </p>
            </Reveal>

            {/* Live Focus Tags */}
            <Reveal direction="up" delay={0.4}>
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-slate-500 font-bold uppercase tracking-wider mr-2">
                  Key Disciplines:
                </span>
                {['IIoT', 'Google Coral TPU', 'Edge AI', 'MES', 'ERP', 'Robotics', 'Digital Twins'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* 4 Pillars Grid (Clean Dividers, No Chunky Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-200">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.1} distance={20}>
                <div className="space-y-4 group">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-mono font-black text-2xl text-blue-600">
                      {pillar.num}
                    </span>
                    <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:text-blue-600 group-hover:border-blue-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
