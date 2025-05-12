import React from 'react';
import './skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-all" data-aos="fade-up">
        <div className="skills-up">
          <div className="skills-image" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3" 
              alt="Recycling process"
            />
          </div>
          <div className="skills-text" data-aos="fade-left">
            <h4>Reduce & Reuse</h4>
            <p>Learn how to minimize waste and make sustainable choices in your daily life. Small changes can make a big impact on our environment.</p>
            <a href="#learn-more" className="skills-button">Learn More</a>
          </div>
        </div>

        <div className="skills-low">
          <div className="skills-image" data-aos="fade-left">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3" 
              alt="Recycling bins"
            />
          </div>
          <div className="skills-text" data-aos="fade-right">
            <h4>Smart Recycling</h4>
            <p>Discover the proper ways to sort and recycle different materials. Make recycling a natural part of your routine.</p>
            <a href="#learn-more" className="skills-button">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills