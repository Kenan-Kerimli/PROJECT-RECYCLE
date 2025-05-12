import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import { findBinForItem, recyclingBins } from "./recyclingData";
import { getAIResponse, categorizeItem } from "../../../services/openrouter";



function Chatbot() {
  const [messages, setMessages] = useState([{ 
    role: "assistant", 
    content: "Salam! Mən RecycleAI-yəm. Hər hansı bir əşyanın hansı zibil qutusuna atılmalı olduğunu öyrənmək üçün sadəcə əşyanın adını yazın.",
    isIntro: true
  }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleRecyclingQuery = async (query) => {
    console.log('Query:', query);
    let bin = findBinForItem(query);
    
    // Əgər bin tapılmadısa, AI ilə kateqoriyanı təyin et
    if (!bin) {
      const category = await categorizeItem(query);
      if (category) {
        bin = recyclingBins[category];
      }
    }
    
    console.log('Found bin:', bin);

    if (bin) {
      // AI cavabını al
      const aiResponse = await getAIResponse(query, bin.type);
      if (!aiResponse) {
        return {
          text: `"${query}" ${bin.name.toLowerCase()} qutusuna atılmalıdır.`,
          bin: bin
        };
      }

      return {
        text: aiResponse,
        bin: bin
      };
    } else {
      return {
        text: `Bağışlayın, "${query}" üçün spesifik təkrar emal təlimatı tapa bilmədim. Zəhmət olmasa daha dəqiq təsvir edin və ya başqa bir əşya haqqında soruşun.`,
        bin: null
      };
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = { role: "user", content: input.trim() };
    const currentInput = input.trim();
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // Handle recycling query with AI
      const recyclingResponse = await handleRecyclingQuery(currentInput);
      console.log('Full response:', recyclingResponse);
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: recyclingResponse.text,
        bin: recyclingResponse.bin
      }]);
      setIsTyping(false);

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Bağışlayın, bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.'
      }]);
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div className={`message ${message.role} ${message.isIntro ? 'intro' : ''}`} key={index}>
            <div className="message-avatar">
              <div className={message.role === 'user' ? 'user-avatar' : 'bot-avatar'}>
                {message.role === 'user' ? 'U' : 'AI'}
              </div>
            </div>
            <div className="message-content">
              {message.content}
              {message.bin && (
                <div className="bin-info">
                  <img 
                    src={message.bin.image} 
                    alt={`${message.bin.name} qutusu`}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '10px 0',
                      padding: '10px',
                      backgroundColor: message.bin.color + '20',
                      borderRadius: '8px'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message">
            <div className="message-avatar">
              <img src="./src/assets/Images/recycle.png" alt="RecycleAI Avatar" />
            </div>
            <div className="typing-indicator">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Əşyanın adını yazın (məs: plastik butulka)..."
          disabled={isTyping}
        />
        <button 
          className="send-button" 
          onClick={sendMessage}
          disabled={!input.trim() || isTyping}
        >
          Göndər
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
