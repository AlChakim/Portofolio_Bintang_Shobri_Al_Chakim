import React, { useState } from 'react';
import { Camera, Cpu, Award, User, Bot, Layers, Info, Maximize2 } from 'lucide-react';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: 'video' | 'square' | 'wide' | 'portrait' | 'auto';
  className?: string;
  type?: 'profile' | 'hardware' | 'vision' | 'robotics' | 'award' | 'diagram' | 'general';
  onImageClick?: (src: string, alt: string) => void;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  caption,
  aspectRatio = 'video',
  className = '',
  type = 'general',
  onImageClick,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const isExplicitPlaceholder = src.includes('placeholder');

  const ratioClasses = {
    video: 'aspect-[16/9]',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
    portrait: 'aspect-[3/4]',
    auto: 'min-h-[220px]',
  }[aspectRatio];

  const getIcon = () => {
    switch (type) {
      case 'profile':
        return <User className="w-12 h-12 text-blue-600 stroke-[1.25]" />;
      case 'hardware':
      case 'diagram':
        return <Cpu className="w-10 h-10 text-blue-600 stroke-[1.25]" />;
      case 'vision':
        return <Camera className="w-10 h-10 text-blue-600 stroke-[1.25]" />;
      case 'robotics':
        return <Bot className="w-10 h-10 text-blue-600 stroke-[1.25]" />;
      case 'award':
        return <Award className="w-10 h-10 text-blue-600 stroke-[1.25]" />;
      default:
        return <Layers className="w-10 h-10 text-blue-600 stroke-[1.25]" />;
    }
  };

  const fileName = src.split('/').pop() || 'image.png';

  const handleClick = () => {
    if (onImageClick) {
      onImageClick(src, alt);
    }
  };

  return (
    <figure className={`w-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 group shadow-sm hover:shadow-card hover:border-blue-300 ${className}`}>
      <div 
        className={`relative w-full ${ratioClasses} flex items-center justify-center overflow-hidden bg-slate-50 cursor-pointer`}
        onClick={handleClick}
      >
        {/* If user placed a real photo (not placeholder) and no error */}
        {!isExplicitPlaceholder && !imageError ? (
          <div className="relative w-full h-full">
            <img
              src={src}
              alt={alt}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {onImageClick && (
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2.5 rounded-full bg-white/95 text-blue-600 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
            )}
          </div>
        ) : (
          /* Editorial Blueprint Schematic Card for White & Blue Theme */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FFFFFF] via-[#F8FAFF] to-[#EFF6FF] select-none border-b border-slate-100">
            {/* Subtle engineering grid background */}
            <div className="absolute inset-0 bg-grid-blue opacity-50 pointer-events-none" />

            {/* Icon container */}
            <div className="relative mb-3.5 flex items-center justify-center">
              <div className="relative p-4 rounded-2xl bg-white border border-blue-150 shadow-xs group-hover:border-blue-300 transition-colors">
                {getIcon()}
              </div>
            </div>

            {/* Title / Description */}
            <h4 className="text-sm font-bold text-slate-900 tracking-tight max-w-sm line-clamp-1">
              {alt}
            </h4>

            {/* File instruction badge in light blue */}
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>Asset placeholder:</span>
              <code className="text-slate-900 font-semibold">{fileName}</code>
            </div>

            <p className="mt-2 text-[10px] text-slate-400 font-mono tracking-tight">
              Ready for placement in: {src.replace('./', '/public/')}
            </p>
          </div>
        )}
      </div>

      {/* Caption if provided */}
      {caption && (
        <figcaption className="px-4 py-2.5 text-[11px] text-slate-600 bg-slate-50/80 border-t border-slate-100 flex items-start gap-2">
          <Info className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
          <span className="leading-relaxed">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
