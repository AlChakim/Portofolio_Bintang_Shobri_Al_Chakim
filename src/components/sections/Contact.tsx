import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../animation/Reveal';
import {
  Linkedin,
  Github,
  MapPin,
  Send,
  Copy,
  Check,
  FileText,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface ContactProps {
  onOpenCvModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCvModal }) => {
  const { tr, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Industrial AI & IoT Integration');
  const [message, setMessage] = useState('');

  const targetEmail = 'bintangalchakim@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${topic}] from ${name || 'Collaborator'}`
    )}&body=${encodeURIComponent(
      `Sender Name: ${name}\nSender Email: ${email}\nInquiry Topic: ${topic}\n\nMessage:\n${message}\n\n---\nSent via Bintang Shobri Al Chakim Portfolio`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-white relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="06"
          category={t('INITIATE COLLABORATION', 'MULAI KOLABORASI')}
          title={t("LET'S BUILD SOMETHING", 'MARI MEMBANGUN SESUATU YANG')}
          titleAccent={t('MEANINGFUL', 'BERMAKNA')}
          description={tr('contact.supporting')}
        />

        {/* 2-Column Editorial Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels, Copy Email, Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal direction="left" distance={20} className="space-y-6">
              {/* Quick Copy Email Card */}
              <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm space-y-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('Direct Correspondence', 'Komunikasi Langsung')}</span>
                </span>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl text-slate-950">
                    {t('Email Address', 'Alamat Email Resmi')}
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    {t('Expect thoughtful technical replies within 24–48 hours.', 'Tanggapan teknis dalam 24–48 jam kerja.')}
                  </p>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 font-mono text-xs">
                  <span className="font-bold text-slate-900 select-all truncate mr-2">
                    {targetEmail}
                  </span>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold transition-all shrink-0 cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">{tr('contact.emailCopied')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{tr('contact.copyEmail')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Verified Professional Channels List */}
              <div className="space-y-3 font-mono text-xs">
                <a
                  href="https://www.linkedin.com/in/bintang-shobri-al-chakim-5bb4a1319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-[#0077b5] border border-blue-100">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block group-hover:text-blue-700 transition-colors">
                        LinkedIn Profile
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Professional Network & Endorsements
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 text-slate-900 border border-slate-200">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">
                        Technical Repositories
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Edge AI, Computer Vision, & Embedded Code
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                    ACTIVE
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 text-blue-600 border border-slate-200">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">
                        Base of Operations
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Politeknik Manufaktur Bandung, Indonesia
                      </span>
                    </div>
                  </div>
                </div>

                {/* CV Action */}
                <div className="pt-2">
                  <button
                    onClick={onOpenCvModal}
                    className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-slate-950 hover:bg-blue-600 text-white font-mono font-bold uppercase tracking-wider text-xs transition-colors shadow-md group"
                  >
                    <FileText className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                    <span>{tr('nav.downloadCv')}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Engineering Message Dispatcher (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.15} distance={20}>
              <form
                onSubmit={handleFormSubmit}
                className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm space-y-6"
              >
                <div className="space-y-1 pb-4 border-b border-slate-200">
                  <h3 className="font-display font-black text-2xl text-slate-950">
                    {t('Send an Engineering Inquiry', 'Kirim Pesan Rekayasa')}
                  </h3>
                  <p className="text-xs font-mono text-slate-600">
                    {t(
                      'Prepares a structured email draft directly in your preferred system client.',
                      'Menyusun draf pesan terstruktur langsung ke klien email default Anda.'
                    )}
                  </p>
                </div>

                {/* Form Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      {t('Your Name *', 'Nama Anda *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. John Doe / Engineering Team"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-mono focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      {t('Your Email *', 'Email Anda *')}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-mono focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    {t('Collaboration Topic *', 'Topik Kolaborasi *')}
                  </label>
                  <select
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-mono focus:outline-none focus:border-blue-600 transition-colors cursor-pointer"
                  >
                    <option value="Industrial AI & IoT Integration">
                      Industrial AI & IoT Integration
                    </option>
                    <option value="Smart Manufacturing (MES / Digital Twin)">
                      Smart Manufacturing (MES / Digital Twin)
                    </option>
                    <option value="Robotics & Embedded Systems Research">
                      Robotics & Embedded Systems Research
                    </option>
                    <option value="Internship / Engineering Opportunity">
                      Internship / Engineering Opportunity
                    </option>
                    <option value="General Technical Inquiry">
                      General Technical Inquiry
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    {t('Message *', 'Pesan *')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder={t(
                      'Describe your technical inquiry, project scope, or collaboration proposal...',
                      'Jelaskan kebutuhan teknis, ruang lingkup proyek, atau tawaran kolaborasi Anda...'
                    )}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs font-mono focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold uppercase tracking-wider text-xs transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{tr('contact.getInTouch')}</span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
