import React, { useEffect } from 'react'
import Chatbot from '../../../Components/User/Chatbot/Chatbot'
import './RecycleAI.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function RecycleAI() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    })
  }, [])

  return (
    <section id='recycleai'>
      <div className="recycleai-container">
        <div className="recycleai-header" data-aos="fade-up">
          <h1>RecycleAI Assistant</h1>
          <p>Your intelligent companion for all recycling questions. Ask anything about waste management, recycling methods, or environmental impact.</p>
        </div>
        
        <div className="recycleai-content" data-aos="fade-up" data-aos-delay="200">
          <div className="chat-container">
            <div className="chat-header">
              <div className="chat-header-title">
                <div className="ai-avatar">
                  <img src="/src/assets/Images/recycle.png" alt="RecycleAI Avatar" />
                </div>
                <div className="ai-info">
                  <h3>RecycleAI</h3>
                  <span className="status-badge">Online</span>
                </div>
              </div>
            </div>
            <Chatbot />
          </div>
          
          <div className="features-sidebar" data-aos="fade-left" data-aos-delay="400">
            <div className="feature-card">
              <h4>Smart Recommendations</h4>
              <p>Get personalized recycling advice based on your specific items.</p>
            </div>
            <div className="feature-card">
              <h4>24/7 Assistance</h4>
              <p>Always available to help with your recycling questions.</p>
            </div>
            <div className="feature-card">
              <h4>Eco-Tips</h4>
              <p>Learn daily tips to reduce your environmental impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecycleAI