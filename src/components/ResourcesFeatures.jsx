import React from 'react';
import { ScrollStack, ScrollStackItem } from './ScrollStack';
import { BookOpen, Code2, Video, FileText, Trophy, Users } from 'lucide-react';
import '../styles/ResourcesFeatures.css';

const ResourcesFeatures = () => {
  const features = [
    {
      icon: <BookOpen size={48} />,
      title: 'Tutorials & Guides',
      description: 'Step-by-step tutorials covering algorithms, data structures, and problem-solving techniques.',
      color: '#3b82f6'
    },
    {
      icon: <Code2 size={48} />,
      title: 'Problem Sets',
      description: 'Curated collection of problems from easy to advanced, organized by topic and difficulty.',
      color: '#8b5cf6'
    },
    {
      icon: <Video size={48} />,
      title: 'Video Lectures',
      description: 'High-quality video content explaining complex concepts with visual demonstrations.',
      color: '#ec4899'
    },
    /*  icon: <FileText size={48} />,
      title: 'Reading Materials',
      description: 'Comprehensive documentation, e-books, and research papers for deep learning.',
      color: '#f59e0b'
    },
    {
      icon: <Trophy size={48} />,
      title: 'Contest Archives',
      description: 'Access past contest problems with editorials and optimal solutions.',
      color: '#10b981'
    },
    {
      icon: <Users size={48} />,
      title: 'Community Resources',
      description: 'Shared solutions, discussions, and collaborative learning materials.',
      color: '#06b6d4'
    }µ*/
  ];

  return (
    <section className="resources-features-section">
      <div className="features-header">
        <h2 className="section-title">Resource Types</h2>
        <p className="section-subtitle">
          Everything you need to become a competitive programming expert
        </p>
      </div>

      <div className="scroll-stack-wrapper">
        <ScrollStack
          itemDistance={120}
          itemScale={0.04}
          itemStackDistance={40}
          stackPosition="25%"
          scaleEndPosition="15%"
          baseScale={0.9}
          rotationAmount={0}
          blurAmount={0}
          useWindowScroll={true}
        >
          {features.map((feature, index) => (
            <ScrollStackItem key={index} itemClassName="feature-stack-card">
              <div className="feature-card-content" style={{ borderLeftColor: feature.color }}>
                <div className="feature-icon-wrapper" style={{ background: feature.color }}>
                  {feature.icon}
                </div>

                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>

                <div className="feature-footer">
                  <a href={`#${feature.title.toLowerCase().replace(/\s+/g, '-')}`} className="feature-link">
                    Explore {feature.title} →
                  </a>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ResourcesFeatures;