import React from 'react';
import Navbar from '../components/Navbar';
import GalleryHero from '../components/GalleryHero';
import DomeGallery from '../components/DomeGallery';
import GalleryCTA from '../components/GalleryCTA';
import Footer from '../components/Footer';
import '../styles/Gallery.css';

const Gallery = () => {
  // Images de clubs de photographie/programmation avec informations
  const clubImages = [
    {
      src: '/img/image (1).png',
      alt: 'Code & Capture Club',
      club: 'Code & Capture',
      description: 'Documenting the journey of competitive programming through photography'
    },
    {
      src: '/img/image (2).png',
      alt: 'Algorithm Lens Club',
      club: 'Algorithm Lens',
      description: 'Capturing the beauty of code and algorithms in visual form'
    },
    {
      src: '/img/image (3).png',
      alt: 'Debug Frames Club',
      club: 'Debug Frames',
      description: 'Photography meets programming - debugging life one frame at a time'
    },
    {
      src: '/img/image (4).png',
      alt: 'Binary Vision Club',
      club: 'Binary Vision',
      description: 'Seeing the world through 0s and 1s, captured through lenses'
    },
    {
      src: '/img/image (5).png',
      alt: 'Compile & Click Club',
      club: 'Compile & Click',
      description: 'Where code compiles and cameras click - a perfect fusion'
    },
    {
      src: '/img/image (6).png',
      alt: 'Pixel Programmers Club',
      club: 'Pixel Programmers',
      description: 'Programming pixels both in code and through photography'
    },
    {
      src: '/img/image (7).png',
      alt: 'Code Snapshots Club',
      club: 'Code Snapshots',
      description: 'Freezing moments of innovation and creativity in competitive programming'
    },
    {
      src: '/img/image (8).png',
      alt: 'Tech Frames Club',
      club: 'Tech Frames',
      description: 'Framing technology and talent through artistic photography'
    },
    {
      src: '/img/image (9).png',
      alt: 'Syntax Shooters Club',
      club: 'Syntax Shooters',
      description: 'Shooting code and capturing coding culture'
    },
    {
      src: '/img/image (10).png',
      alt: 'Loop & Lens Club',
      club: 'Loop & Lens',
      description: 'Infinite loops of creativity through photography and code'
    },
    {
      src: '/img/image (11).png',
      alt: 'Digital Exposures Club',
      club: 'Digital Exposures',
      description: 'Exposing the digital world through photography'
    },
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
    ,
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
    ,
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
    ,
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
    ,
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
    ,
    {
      src: '/img/image (12).png',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
  ];

  return (
    <div className="gallery-page">
      <Navbar />
      
      <main>
        <GalleryHero />
        
        <section className="gallery-dome-section">
          <div className="dome-container">
            <DomeGallery 
              images={clubImages}
              fit={0.5}
              minRadius={600}
              maxRadius={900}
              overlayBlurColor="#0f172a"
              maxVerticalRotationDeg={8}
              dragSensitivity={20}
              enlargeTransitionMs={400}
              segments={35}
              dragDampening={2}
              openedImageWidth="400px"
              openedImageHeight="500px"
              imageBorderRadius="20px"
              openedImageBorderRadius="24px"
              grayscale={false}
            />
          </div>
        </section>
        
        <GalleryCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;