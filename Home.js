import React from 'react';
import heroImage from './Image/chalana-nilupul-zMXKDIISZjk-unsplash.jpg'; 
import { Link } from 'react-router-dom';
import bannerImage from './Image/jake-hills-c017EyPWVZg-unsplash.jpg'; 

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1 className="home-name">Hi, I'm Maryam Asif</h1>
        <p className="home-intro">
        Hey there, fam! I'm <b>Maryam Asif</b>,<br/> a software engineering student at <b>Air University in Islamabad,</b><br/> though I'm originally from the vibrant city of Faisalabad. <br/>You could say I'm on a mission to craft digital experiences <br/> that aren't just functional but also look absolutely fire <hr/>I'm all about getting those colour themes just right <br/> and nailing the perfect layout<br/> When it comes to making things pop on the web, <br/>I've got my hands dirty with<b>HTML, CSS, and JavaScript</b>  <br/> I'm currently heavy into frontend development, building user <br/>interfaces that are both intuitive and visually appealing <br/> Full disclosure, <b>I'm not a "pro" just yet</b>,<br/> still leveling up my skills daily <br/>but I'm definitely on my way! <hr/>


<b>Beyond the web,</b> <br/>I've dabbled in designing with other frameworks too,<br/> like <b>.NET WinForms.</b> This gives me a broader perspective <br/> on how design principles translate across different platforms.<br/> I'm always down to explore new tech and push <br/>the boundaries of what's possible in the digital realm.<hr/>
        </p>
        <p className="home-tagline">
          Empowering teams with meaningful connections and modern tools.
        </p>
        <Link to="/Project" className="home-btn">
          Explore My Projects
        </Link>
      </div>
      <div className="home-image-container">
        <img src={heroImage} alt="Maryam banner" className="home-image" />
        
      </div>
    </div>
    
  );
}
