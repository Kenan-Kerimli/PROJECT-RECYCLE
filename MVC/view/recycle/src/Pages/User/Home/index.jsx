import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { Button } from '../../../Components/Button';
import Skills from '../../../Components/User/Skills';
const HomePage = styled.div`
  max-width: 100%;
  margin: 5% auto;
  padding: 2rem 0 0;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 15%;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }
  
  h2 {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 2rem;
  }
`;

const Features = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 4rem 15%;
  margin: 0 auto;
  max-width: 100%;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const FeatureImage = styled.div`
  width: 120px;
  height: 120px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  margin: 10px auto;

  &:hover {
    transform: scale(1.05);
  }
`;

const Feature = styled.div`
  text-align: center;
  width: 200px;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
  }
  
  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }
`;

const FAQ = styled.section`
  padding: 4rem 15%;
  max-width: 100%;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

const FAQHeader = styled.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f8f8f8;
  }
  
  h3 {
    font-size: 1.2rem;
    color: #1a1a1a;
    text-align: left;
    margin: 0;
  }
`;

const FAQContent = styled.div`
  padding: ${props => props.isOpen ? '1rem 1.5rem 1.5rem' : '0 1.5rem'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  
  p {
    color: #666;
    margin: 0;
  }
`;

const Arrow = styled.span`
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
  font-size: 1.2rem;
`;

const CTA = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: #f8f8f8;
  border-radius: 12px;
  margin: 2rem 0 0;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <HomePage>
      <Hero data-aos="fade-up">
        <HeroImage data-aos="zoom-in" data-aos-delay="300" />
        <h1 data-aos="fade-up" data-aos-delay="500">Recycle for a Better Future</h1>
        <h2 data-aos="fade-up" data-aos-delay="700">Join us in making the world cleaner and greener through recycling</h2>
        <Button data-aos="fade-up" data-aos-delay="900">Get Started</Button>
      </Hero>
      
      <Features id='feature' data-aos="fade-up">
        <Feature data-aos="fade-up" data-aos-delay="200">
          <FeatureImage style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3')` }} />
          <h3>Plastic</h3>
          <p>Recyclable plastics</p>
        </Feature>
        
        <Feature data-aos="fade-up" data-aos-delay="400">
          <FeatureImage style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3')` }} />
          <h3>Paper</h3>
          <p>Paper materials</p>
        </Feature>

        <Feature data-aos="fade-up" data-aos-delay="600">
          <FeatureImage style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3')` }} />
          <h3>Glass</h3>
          <p>Glass products</p>
        </Feature>

        <Feature data-aos="fade-up" data-aos-delay="800">
          <FeatureImage style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558640476-437a2b9438a2?ixlib=rb-4.0.3')` }} />
          <h3>Metal</h3>
          <p>Metal items</p>
        </Feature>
      </Features>
      
      <Skills/>
      <FAQ data-aos="fade-up">
        <h2 data-aos="fade-up">FAQ</h2>
        {[
          {
            question: 'What types of materials can be recycled?',
            answer: 'Common recyclable materials include paper, cardboard, plastic bottles, metal cans, and glass containers. Each material needs to be clean and properly sorted.'
          },
          {
            question: 'How do I prepare items for recycling?',
            answer: 'Clean all containers, remove any non-recyclable parts, flatten cardboard boxes, and ensure items are dry before recycling. Different materials may have specific requirements.'
          },
          {
            question: 'Where can I recycle in my area?',
            answer: 'Most areas have curbside recycling programs or local recycling centers. You can also find specialized recycling locations for electronics, batteries, and other specific materials.'
          }
        ].map((item, index) => {
          const [isOpen, setIsOpen] = useState(false);
          
          return (
            <FAQItem key={index} data-aos="fade-up" data-aos-delay={200 * index}>
              <FAQHeader onClick={() => setIsOpen(!isOpen)}>
                <h3>{item.question}</h3>
                <Arrow isOpen={isOpen}>↓</Arrow>
              </FAQHeader>
              <FAQContent isOpen={isOpen}>
                <p>{item.answer}</p>
              </FAQContent>
            </FAQItem>
          );
        })}
      </FAQ>
      
      <CTA data-aos="fade-up">
        <h2 data-aos="fade-up" data-aos-delay="200">Sign up today.</h2>
        <Button data-aos="fade-up" data-aos-delay="400">Get Started</Button>
      </CTA>
    </HomePage>
  );
}

export default Home;