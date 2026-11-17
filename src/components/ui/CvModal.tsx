import React from 'react';
import { Modal } from './Modal';
import { FileText, Linkedin, Download, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('Curriculum Vitae / Official Resume', 'Curriculum Vitae / Resume Resmi')}
      maxWidth="lg"
    >
      <div className="space-y-6 text-center py-2">
        {/* Blue icon circle */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
          <FileText className="w-8 h-8" />
        </div>

        <div>
          <h4 className="text-xl font-bold text-slate-900">
            Bintang Shobri Al Chakim
          </h4>
          <p className="text-xs font-mono font-medium text-blue-600 mt-1">
            Industrial Informatics Engineering • POLMAN Bandung
          </p>
        </div>

        {/* Notice box */}
        <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-left space-y-2">
          <div className="flex items-start gap-2.5">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">
                {t('Verified Credential Notice:', 'Pemberitahuan Dokumen Resmi:')}
              </span>{' '}
              {t(
                'To maintain confidentiality and provide tailored credentials for specific opportunities (internships, scholarships, research collaborations), the official verified CV is available upon direct inquiry or by placing the PDF file at ',
                'Untuk menjaga kerahasiaan dan menyediakan dokumen yang disesuaikan dengan kebutuhan (magang, beasiswa, kolaborasi riset), CV resmi dapat diminta langsung atau melalui penempatan file PDF di '
              )}
              <code className="px-1.5 py-0.5 rounded bg-white text-blue-700 font-mono text-[11px] border border-blue-200">
                /public/cv-bintang-shobri-al-chakim.pdf
              </code>.
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="https://www.linkedin.com/in/bintang-shobri-al-chakim-5bb4a1319/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-md shadow-blue-500/20"
          >
            <Linkedin className="w-4 h-4" />
            <span>{t('Request via LinkedIn', 'Minta via LinkedIn')}</span>
          </a>

          <a
            href="./cv-bintang-shobri-al-chakim.pdf"
            download
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-xs tracking-wide uppercase transition-all"
          >
            <Download className="w-4 h-4 text-blue-600" />
            <span>{t('Download (If Available)', 'Unduh (Jika Tersedia)')}</span>
          </a>
        </div>
      </div>
    </Modal>
  );
};
