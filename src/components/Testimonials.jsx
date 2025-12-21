import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Computer Science Student',
      rating: 5,
      content: 'The club transformed my problem-solving skills. I went from struggling with basic algorithms to reaching Codeforces Expert in 6 months!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      achievement: 'Codeforces Expert'
    },
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer Intern',
      rating: 5,
      content: 'The mock interviews and coding contests prepared me perfectly for my FAANG interviews. I received offers from three top tech companies!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d4?w=400&h=400&fit=crop&crop=face',
      achievement: 'FAANG Offers'
    },
    {
      name: 'David Park',
      role: 'ICPC Participant',
      rating: 5,
      content: 'Our team qualified for regionals thanks to the intensive training sessions. The community support was invaluable during preparation.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      achievement: 'ICPC Regionalist'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Bootcamp Graduate',
      rating: 5,
      content: 'As a career switcher, the structured learning path and mentorship helped me build strong fundamentals quickly. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      achievement: 'Career Transition'
    },
    {
      name: 'Kevin Zhang',
      role: 'High School Programmer',
      rating: 5,
      content: 'The beginner-friendly resources and supportive community helped me win my first programming competition. Now I\'m mentoring others!',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=400&fit=crop&crop=face',
      achievement: 'Competition Winner'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Member Experiences</h2>
          <p className="section-subtitle">
            Hear from our members about their journey in competitive programming
          </p>
        </motion.div>

        <div className="testimonials-container">
          <motion.button
            className="nav-button prev-button"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <div className="quote-icon">
                  <Quote size={48} />
                </div>
                
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonials[currentIndex].content}"</p>
                  
                  <div className="rating">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#FBBF24" stroke="#FBBF24" />
                    ))}
                  </div>
                </div>

                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-role">{testimonials[currentIndex].role}</p>
                    <div className="author-achievement">
                      <span className="achievement-badge">{testimonials[currentIndex].achievement}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            className="nav-button next-button"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Success Stories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Recommend to Friends</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;