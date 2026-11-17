import React from 'react';
import { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { StatusBadge } from '../ui/StatusBadge';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { useLanguage } from '../../context/LanguageContext';
import {
  ExternalLink,
  Github,
  Award,
  Users,
  UserCheck,
  CheckCircle2,
  Workflow,
  AlertCircle,
  FileCode,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { lang, t } = useLanguage();

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="4xl">
      <div className="space-y-8 text-left">
        {/* Subtitle & Competition Notice */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/60">
              {project.category}
            </span>

            {project.competitionContext && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-800/60">
                <Award className="w-3.5 h-3.5" />
                <span>{project.competitionContext}</span>
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {project.subtitle}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description[lang]}
          </p>
        </div>

        {/* Project Images Gallery / Placeholders */}
        {project.images && project.images.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-cyan-400" />
              <span>{t('Prototype & System Media Placeholders', 'Purwarupa & Media Sistem')}</span>
            </h4>
            <div className={`grid grid-cols-1 ${project.images.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
              {project.images.map((img, idx) => (
                <ImagePlaceholder
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  caption={img.caption}
                  aspectRatio={img.aspectRatio || 'video'}
                  type={project.categoryTag === 'robotics' ? 'robotics' : project.categoryTag === 'ai-cv' ? 'vision' : 'hardware'}
                />
              ))}
            </div>
          </div>
        )}

        {/* Problem Statement & Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Statement */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase">
              <AlertCircle className="w-4 h-4" />
              <span>{t('Problem Statement', 'Rumusan Masalah')}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problemStatement[lang]}
            </p>
          </div>

          {/* Objectives */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('Project Objectives', 'Tujuan Proyek')}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {project.objectives[lang].map((obj, oIdx) => (
                <li key={oIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture & Workflow Diagram */}
        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase">
            <Workflow className="w-4 h-4" />
            <span>{t('System Architecture & Workflow', 'Arsitektur Sistem & Alur Kerja')}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.architecture[lang]}
          </p>

          {project.architecture.diagramSteps && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {project.architecture.diagramSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 relative"
                >
                  <span className="text-[10px] font-mono font-bold text-cyan-400/80 px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                    STEP {step.step}
                  </span>
                  <h5 className="text-xs font-bold text-white mt-2 mb-1">
                    {step.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contribution & Team Allocation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Contribution */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase">
              <UserCheck className="w-4 h-4" />
              <span>{t('My Personal Contribution', 'Kontribusi Pribadi Saya')}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.personalContribution[lang]}
            </p>
          </div>

          {/* Team Collaboration Credits */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold uppercase">
              <Users className="w-4 h-4" />
              <span>{t('Team Collaboration & Credits', 'Kolaborasi Tim & Kredit')}</span>
            </div>
            {project.teamCredits ? (
              <div className="space-y-1.5 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">
                  {project.teamCredits.teamName} — <span className="text-cyan-400 font-normal">{project.teamCredits.role}</span>
                </p>
                <div className="text-[11px] text-slate-400">
                  <span className="font-medium text-slate-300">Team Members: </span>
                  {project.teamCredits.members.join(', ')}
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400 leading-relaxed">
                {t(
                  'Independent engineering development: conceptualized, built, and tested individually.',
                  'Pengembangan rekayasa mandiri: dikonseptualisasikan, dibangun, dan diuji secara independen.'
                )}
              </p>
            )}
          </div>
        </div>

        {/* Development Status Matrix */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <span>{t('Development Status Matrix', 'Matriks Status Pengembangan')}</span>
            </h4>
            <span className="text-[11px] text-slate-400 font-mono">
              Strictly verified status
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-mono">
                <tr>
                  <th className="px-4 py-3">{t('Subsystem / Feature', 'Subsistem / Fitur')}</th>
                  <th className="px-4 py-3">{t('Status', 'Status')}</th>
                  <th className="px-4 py-3">{t('Engineering Notes', 'Catatan Rekayasa')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {project.statusMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-200">
                      {item.feature}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <StatusBadge status={item.status} size="sm" />
                    </td>
                    <td className="px-4 py-3 text-slate-400 text-[11px]">
                      {item.note || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technologies List */}
        <div>
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {t('Technologies & Frameworks', 'Teknologi & Framework')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links & Close Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                onClick={e => {
                  if (project.links.github === '#') {
                    e.preventDefault();
                    alert(t('GitHub repository link placeholder. Will be linked to verified repository.', 'Tautan repositori GitHub placeholder. Akan dihubungkan ke repositori terverifikasi.'));
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t('View Repository', 'Lihat Repositori')}</span>
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                onClick={e => {
                  if (project.links.demo === '#') {
                    e.preventDefault();
                    alert(t('Live demonstration link will be attached once public host is designated.', 'Tautan demonstrasi langsung akan disematkan setelah host publik ditentukan.'));
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-medium border border-cyan-500/40 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t('Live Prototype Demo', 'Demo Purwarupa')}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
          >
            {t('Close Details', 'Tutup Detail')}
          </button>
        </div>
      </div>
    </Modal>
  );
};

