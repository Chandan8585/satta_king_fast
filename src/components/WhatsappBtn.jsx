'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Chatbox.css'; 
import whatsAppBtn from '../../public/whatsappBtn.png';
import crossImg from '../../public/cross.png';
const WhatsappBtn = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };


useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true); 
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeChatbox = () => {
    setIsPopupOpen(false);
    setIsPanelOpen(false);
  };

  return (
    <>
      {isPopupOpen && (
        <section className="chatbox-popup">
          <header className="chatbox-popup__header">
            <aside style={{ flex: 3 }}>
              <i className="fa fa-user fa-4x chatbox-popup__avatar" aria-hidden="true"></i>
            </aside>
            <aside style={{ flex: 8 }}>
              <p style={{ color: '#ffffff' }}>
                <strong style={{ color: '#ffffff' }}>Nisha Yadav</strong>
              </p>
            </aside>
            <aside style={{ flex: 1 }}>
              {/* Close button inside the chat box */}
              <button className="chatbox-close" onClick={closeChatbox}>
             
            <Image src={crossImg} alt='close btn' width={15} />
              </button>
            </aside>
          </header>
          <main className="chatbox-popup__main">
            ADVNCE FEES -5000Rs<br />
            सिंगल 1 जोड़ी में गेम की पासिंग रिज़ल्ट से 3 घंटे पहले दिखा देंगे धमाका 💯 फ़रीदाबाद **गाज़ियाबाद**गली **दिसावार** दिसावार<br />
            <font style={{ fontSize: '15px', color: 'Green' }}>👑GUARNTED GAME👑SINGEL NUMBER 👑</font><br />
            <font style={{ fontSize: '15px', color: 'Blue' }}>Nisha Yadav</font><br />
            <font style={{ fontSize: '15px', color: 'red' }}>9572360301</font><br />
            &nbsp;
            <a href="tel:9572360301" target="_blank" rel="noreferrer">
              <button style={{ backgroundColor: '#FF5733', padding: '4px 6px', color: 'white' }}>Call Now</button>
            </a>
            &nbsp;
            <a href="https://wa.me/qr/SCLNR46ODBBYD1" target="_blank" rel="noreferrer">
              <button style={{ backgroundColor: '#5FFB17', padding: '4px 6px', color: '#000' }}>WhatsApp Now</button>
            </a>
          </main>
          <footer className="chatbox-popup__footer">
            <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
              <i className="fa fa-camera" aria-hidden="true"></i>
            </aside>
            <aside style={{ flex: 10 }}>
              <textarea type="text" placeholder="Type your message here..." autoFocus></textarea>
            </aside>
            <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
              <a href="https://wa.me/qr/SCLNR46ODBBYD1" rel="noreferrer">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </a>
            </aside>
          </footer>
        </section>
      )}

      {isPanelOpen && (
        <section className="chatbox-panel">
         <p style={{backgroundColor:"black"}}></p>
        </section>
      )}

      <button className="chatbox-open" onClick={togglePopup}>
        <span className="whatsapp-icon">
          <Image src={whatsAppBtn} alt="whatsappbtn" width={50} height={50}/>

          <span className="notification-badge">3</span>
        </span>
      </button>
    
      {isPanelOpen && (
        <>
          <button className="chatbox-minimize" onClick={togglePopup}>
            Minimize to Popup
          </button>
          <button className="chatbox-panel-close" onClick={closeChatbox}>
            Close Chatbox
          </button>
        </>
      )}
    </>
  );
};

export default WhatsappBtn;
