import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';
import { StatusBadge } from '../components/ui/StatusBadge';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { Lightbox } from '../components/ui/Lightbox';
import {
  ArrowLeft,
  Award,
  Users,
  UserCheck,
  CheckCircle2,
  Workflow,
  AlertCircle,
  FileCode,
  Github,
  ExternalLink,
  ChevronRight,
  Clock,
  Layers,
  Sparkles,
} from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-white">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Project Not Found</h2>
        <p className="text-slate-500 text-sm mb-6">The requested engineering project does not exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    );
  }

  const relatedProjects = projectsData.filter(p =>
    project.relatedProjectIds?.includes(p.id) || (p.categoryTag === project.categoryTag && p.id !== project.id)
  ).slice(0, 3);

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-24 pb-28 selection:bg-blue-600 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/#works"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('Back to All Projects', 'Kembali ke Semua Proyek')}</span>
          </Link>

          <span className="text-xs font-mono text-slate-600">
            {project.featured ? 'Featured Engineering Prototype' : 'Technical Experimentation'}
          </span>
        </div>

        {/* 1. Project Hero */}
        <header className="space-y-4 mb-10 pb-8 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-blue-700 bg-blue-50 border border-blue-200">
              {project.category}
            </span>

            {project.competitionContext && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>{project.competitionContext}</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-blue-600">
            {project.subtitle}
          </p>
        </header>

        {/* Primary Showcase Image Banner */}
        {project.images && project.images.length > 0 && (
          <div className="mb-14">
            <ImagePlaceholder
              src={project.images[0].src}
              alt={project.images[0].alt}
              caption={project.images[0].caption}
              aspectRatio="video"
              className="shadow-card border-slate-200"
              onImageClick={() => handleOpenLightbox(0)}
            />
          </div>
        )}

        <div className="space-y-14">
          {/* 2. Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>{t('Project Overview', 'Ringkasan Proyek')}</span>
            </h2>
            <p className="text-base text-slate-700 leading-relaxed bg-slate-50/70 p-6 rounded-2xl border border-slate-100">
              {project.description[lang]}
            </p>
          </section>

          {/* 3 & 4. Problem Statement & Key Objectives */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem Statement Card */}
            <div className="p-6 rounded-2xl bg-white border border-rose-100 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs uppercase tracking-wider font-mono">
                <AlertCircle className="w-4 h-4" />
                <span>{t('Problem Statement', 'Rumusan Masalah')}</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.problemStatement[lang]}
              </p>
            </div>

            {/* Objectives Card */}
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-wider font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t('Project Objectives', 'Tujuan Proyek')}</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                {project.objectives[lang].map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. System Architecture & Workflow */}
          <section className="p-7 rounded-3xl bg-blue-50/40 border border-blue-100 space-y-5">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm uppercase tracking-wider font-mono">
              <Workflow className="w-5 h-5" />
              <span>{t('System Architecture & Workflow', 'Arsitektur Sistem & Alur Kerja')}</span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {project.architecture[lang]}
            </p>

            {project.architecture.diagramSteps && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {project.architecture.diagramSteps.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-white border border-blue-100/80 shadow-xs relative flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-blue-700 px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200">
                        STEP {step.step}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 mt-2.5 mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 6. Technologies Used */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900">
              {t('Technologies & Frameworks', 'Teknologi & Framework')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-blue-800 bg-blue-50 border border-blue-200/90 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 7. My Personal Contribution & Team Credits */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xs uppercase tracking-wider font-mono">
                <UserCheck className="w-4 h-4" />
                <span>{t('My Personal Contribution', 'Kontribusi Pribadi Saya')}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.personalContribution[lang]}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-indigo-700 font-semibold text-xs uppercase tracking-wider font-mono">
                <Users className="w-4 h-4" />
                <span>{t('Team Collaboration & Credits', 'Kolaborasi Tim & Kredit')}</span>
              </div>
              {project.teamCredits ? (
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">
                    {project.teamCredits.teamName} — <span className="text-blue-600 font-normal">{project.teamCredits.role}</span>
                  </p>
                  <div className="text-xs text-slate-600">
                    <span className="font-medium text-slate-800">Team Members: </span>
                    {project.teamCredits.members.join(', ')}
                  </div>
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(
                    'Independent engineering development: conceptualized, built, and tested individually.',
                    'Pengembangan rekayasa mandiri: dikonseptualisasikan, dibangun, dan diuji secara independen.'
                  )}
                </p>
              )}
            </div>
          </section>

          {/* 8. Development Process */}
          {project.developmentProcess && (
            <section className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{t('Development Process Milestones', 'Tahapan Proses Pengembangan')}</span>
              </h3>
              <div className="space-y-2.5">
                {project.developmentProcess[lang].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-150 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 9. Current Development Status Matrix */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>{t('Development Status Matrix', 'Matriks Status Pengembangan')}</span>
              </h3>
              <span className="text-xs font-mono text-slate-600">
                Ethical engineering classification
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono">
                  <tr>
                    <th className="px-5 py-3.5">{t('Subsystem / Feature', 'Subsistem / Fitur')}</th>
                    <th className="px-5 py-3.5">{t('Status', 'Status')}</th>
                    <th className="px-5 py-3.5">{t('Engineering Notes', 'Catatan Rekayasa')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {project.statusMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-slate-900">
                        {item.feature}
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <StatusBadge status={item.status} size="sm" />
                      </td>
                      <td className="px-5 py-3.5 text-slate-600 text-xs">
                        {item.note || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 10. Project Gallery */}
          {project.images && project.images.length > 1 && (
            <section className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-600" />
                <span>{t('Project Documentation Gallery', 'Galeri Dokumentasi Proyek')}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.slice(1).map((img, idx) => (
                  <ImagePlaceholder
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    caption={img.caption}
                    aspectRatio={img.aspectRatio || 'video'}
                    onImageClick={() => handleOpenLightbox(idx + 1)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* 11. GitHub Repository & Live Links */}
          <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                {t('Project Code & Demonstrations', 'Kode Proyek & Demonstrasi')}
              </h4>
              <p className="text-xs text-slate-500">
                Verified repositories and technical documentation
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.links.github || '#'}
                onClick={e => {
                  if (project.links.github === '#') {
                    e.preventDefault();
                    alert(t('GitHub repository link placeholder. Will be updated with official repository.', 'Tautan repositori GitHub placeholder. Akan diperbarui dengan repositori resmi.'));
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors shadow-2xs"
              >
                <Github className="w-4 h-4" />
                <span>{t('View Repository', 'Lihat Repositori')}</span>
              </a>

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  onClick={e => {
                    if (project.links.demo === '#') {
                      e.preventDefault();
                      alert(t('Demonstration link will be attached once designated server is hosted.', 'Tautan demonstrasi akan disematkan setelah host server ditentukan.'));
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t('Live Prototype Demo', 'Demo Purwarupa')}</span>
                </a>
              )}
            </div>
          </section>

          {/* 12. Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="space-y-6 pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">
                {t('Explore Related Projects', 'Jelajahi Proyek Terkait')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      navigate(`/projects/${rel.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-card transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase font-semibold text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                        {rel.categoryTag}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-2.5 group-hover:text-blue-600 transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {rel.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                      <span>{t('View Details', 'Lihat Detail')}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={project.images}
        currentIndex={activeImageIndex}
        onNavigate={newIdx => setActiveImageIndex(newIdx)}
      />
    </div>
  );
};

