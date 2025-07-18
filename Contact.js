import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import contactImg from './Image/b2cb8732bd0bf8762bdb313f8050f738.jpg'; 

export default function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <img src={contactImg} alt="Get in touch" />
      </div>

      <div className="right">
        <h2><i>Contact Me</i></h2>
        <p>
         Holla At Me!

Got a project that's gonna be straight fire or just wanna vibe about tech? Slide into my DMs – let's make some 'zabardast' happen, no cap!
        </p>

        <div className="field">
          <strong><b>Name:</b></strong><i>Maryam Asif</i> 
        </div>
        <div className="field">
          <strong><b>LinkedIn:</b></strong>{' '}
          <a href="http://linkedin.com/in/maryam-asif-758801366" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> linkedin
          </a>
        </div>
        <div className="field">
          <strong><b>Instagram:</b></strong>{' '}
          <a href="https://instagram.com/mvryamas1f" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" /> @mvryamas1f
          </a>
        </div>
        <div className="field">
          <strong><b>WhatsApp:</b></strong>{' '}
          <a href="https://wa.me/923346937401" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" /> +92 334 6937401
          </a>
        </div>
      </div>
    </div>
  );
}
