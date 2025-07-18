import React from 'react';
import s1Img from './Image/Screenshot 2025-07-17 223832.png';
import s2Img from './Image/Screenshot 2025-07-17 224136.png';
import s3Img from './Image/Screenshot 2025-07-17 224152.png';
import s4Img from './Image/Screenshot 2025-07-17 224210.png'; 

export default function Project() {
  return (
    <div className="project-page">
      <div className="left-column">
        <div className="project-box">
          <img src={s1Img} alt="Buying Heels" />
          <h3>Organ donation and Transplantation</h3>
          <p>I  developed a dedicated Organ Donation and Transplantation System, where I designed and implemented its user interface using .NET WinForms. This project focused on creating an intuitive and efficient UI to manage the complex processes involved in organ donation and transplantation, ensuring a user-friendly experience within the .NET framework.</p>
        </div>

        <div className="project-box">
          <img src={s2Img} alt="My Style Tuesday" />
          <h3>Made different pages </h3>
          <p>I focused on creating seamless user experiences by designing multiple interconnected pages with the best colour themes, ensuring intuitive navigation where clicking on specific buttons leads directly to their intended destinations.</p>
        </div>

        <div className="project-box">
          <img src={s3Img} alt="Geometric Fine Jewelry" />
          <h3>Login signup with credentials</h3>
          <p>Got it. Here's a concise way to add that to your project descriptions:

I've also developed secure authentication flows, including a sign-up page where I implemented credential validation using C#. This ensures that users can only proceed if their username and password are correct, displaying a "wrong credentials" message for invalid attempts.</p>
        </div>

        <div className="project-box">
          <img src={s4Img} alt="HR Design Systems" />
          <h3>Linked with MySQl</h3>
          <p>Visual design of employee lifecycle workflows using clean UI layouts, modular CSS animations, and HRIS themes.</p>
        </div>
      </div>

      <div className="right-column">
        <h2><b>Other Projects</b></h2>
        <p>
          <b>📝1-</b> I've engineered a robust Command Line Interface (CLI) Cancer Diagnosis System using C++ and Object-Oriented Programming (OOP). This system is designed with robust data processing capabilities and incorporates diagnostic logic to accurately analyze inputs and provide insights via the command line. <br/>
<hr/>
<b>📝2-</b>My frontend design skills are showcased in an institution website layout developed with HTML and CSS. This project focused on creating a professional and user-friendly interface with cohesive theme colours and an optimal visual appeal suitable for an organizational online presence.<br/>
<hr/>
<b>📝3-</b>I also crafted a bakery website layout using HTML and CSS. The key properties here were establishing inviting colour schemes and an appealing structural design to effectively showcase bakery products and create an engaging user experience.
<br/><hr/>
<b>📝4-</b>Further expanding my design proficiency, I built a fashion website layout. For this project, I meticulously integrated perfect themes and visually striking images to create a highly compelling and immersive online experience that captures the essence of fashion.
<br/><hr/>
<b>📝5-</b>Beyond direct development, I've completed comprehensive documentation for my Final Year Project. This documentation diligently applies Software Development Life Cycle (SDLC) steps and adheres to Software Quality Improvement (SQI) principles. It includes in-depth design and analysis, covering thorough requirements and system analysis, all presented within a uniquely themed and colour-coordinated document to enhance clarity and professionalism.
<br/><hr/>
<b>📝6-</b>Among other practical applications, I've created a shooting game that served as an excellent exercise in OOP principles. This project allowed me to apply object-oriented concepts to create interactive game mechanics and manage game states effectively.
<br/><hr/>
<b>NOTE</b>-While I haven't yet undertaken a major project specifically utilizing React and APIs, I'm actively planning to integrate these into future endeavors. I'm always looking to expand my development horizon with new technologies and challenging projects to build more dynamic and integrated systems.
<br/><hr/>
        </p>
      </div>
    </div>
  );
}
