import React from 'react';
import { motion } from 'framer-motion';
import { FallingText } from './FallingText';
import '../styles/ResourcesHero.css';

const ResourcesHero = () => {
  return (
    <section className="resources-hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="falling-text-wrapper">
            <FallingText
              text="Master Algorithms with Our Curated Training Resources for Competitive Programming and Problem Solving Excellence"
              highlightWords={["Master", "Algorithms", "Curated", "Training", "Resources", "Competitive", "Programming", "Excellence"]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.8}
              fontSize="2.5rem"
              mouseConstraintStiffness={0.7}
            />
          </div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Access comprehensive tutorials, problem sets, and curated materials to enhance 
            your algorithmic thinking and excel in competitive programming contests.
            <br />
            <span className="hero-hint">💡 Hover over the text above to see the magic!</span>
          </motion.p>
        </motion.div>
      </div>
      
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default ResourcesHero;
