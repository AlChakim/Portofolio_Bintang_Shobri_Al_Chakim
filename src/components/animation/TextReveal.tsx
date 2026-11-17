import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  stagger?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0,
  stagger = 0.04,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = children.split(' ');

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component className={`${className} flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden pb-[0.05em]">
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.65,
              delay: delay + idx * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

