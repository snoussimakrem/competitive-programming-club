import React from 'react';
import Navbar from '../components/Navbar';
import ResourcesHero from '../components/ResourcesHero';
import ResourcesFeatures from '../components/ResourcesFeatures';
import LogoLoop from '../components/LogoLoop';
import '../styles/TrainingResources.css';

const TrainingResources = () => {
  const logos = [
    { src: '/logo192.png', alt: 'Logo 1' },
    { src: '/logo192.png', alt: 'Logo 2' },
   /* { src: '/logo192.png', alt: 'Logo 3' },
    { src: '/logo192.png', alt: 'Logo 4' },
    { src: '/logo192.png', alt: 'Logo 5' },
    { src: '/logo192.png', alt: 'Logo 6' },*/
  ];

  return (
    <div className="training-resources-page">
      <Navbar />
      <ResourcesHero />
      <ResourcesFeatures />
      <div className="section-spacer"></div>
      <LogoLoop logos={logos} />
    </div>
  );
};

export default TrainingResources;