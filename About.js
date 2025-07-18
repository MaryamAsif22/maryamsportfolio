import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from './Image/WhatsApp Image 2025-07-17 at 20.33.28_31030f52.jpg'; 

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-header">
        <div className="photo-frame">
          <img src={profilePhoto} alt="Maryam's Profile" className="about-photo" />
        </div>
      </div>

      <div className="about-grid">
        <div className="about-box about-me fade-in">
          <h2>About Me</h2>
          <p>
          My expertise spans comprehensive software development, from crafting intuitive UI designs and managing <b>database systems</b> to building robust<b>OOP C++ applications</b>  and developing with <b>.NET WinForms.</b> I excel in frontend development using <b>HTML, CSS, and JavaScript,</b> applying a keen eye for colour themes and effective layout design. With a foundational understanding of<b>C#</b>  and current <b>studies in Python,</b>  I also actively apply the <b>Software Development Life Cycle (SDLC) </b>steps to ensure efficient project execution and keen to learn  SQI through it.
          </p>
        </div>

        <div className="about-box about-tech slide-up">
          <h2>Technologies I Use</h2>
          <ul>
            <li>React.js</li>
            <li>HTML / CSS</li>
            <li>c#</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>.Net</li>
            <li>Oop cpp</li>
            <li>Python(learning)</li>
            <li>System designs and Analysis</li>
            <li>colour theme and aesthetics</li>
          </ul>
        </div>

        <div className="about-box about-connect slide-up">
          <h2>Let's Connect</h2>
          <p>
           o, fam! If you're cooking up something awesome and need a sharp mind on deck, hit me up. I'm all about turning wild ideas into slick realities, from mapping out the whole vibe before we even code, to making sure the front-facing stuff looks absolutely fire.I can jump in on anything from the nitty-gritty of data wrangling to making systems tick with that object-oriented goodness. Got an app idea for a desktop or need a website that pops? I'm on it. I'm always leveling up my skills with new languages, so whatever tech stack you're rocking, I'm probably down to get my hands dirty.
          </p>
        </div>
      </div>
    </div>
  );
}
