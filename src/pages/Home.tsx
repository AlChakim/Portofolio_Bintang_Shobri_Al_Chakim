import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Awards } from '../components/sections/Awards';
import { Contact } from '../components/sections/Contact';

interface HomeProps {
  onOpenCvModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenCvModal }) => {
  return (
    <>
      <Hero onOpenCvModal={onOpenCvModal} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Awards />
      <Contact onOpenCvModal={onOpenCvModal} />
    </>
  );
};
