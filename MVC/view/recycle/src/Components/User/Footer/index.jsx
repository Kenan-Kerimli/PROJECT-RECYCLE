import React from 'react';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="copyright">© RecycleAI {currentYear}</p>
        <div className="social-links">
          <a 
            className="social-link" 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a 
            className="social-link" 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer