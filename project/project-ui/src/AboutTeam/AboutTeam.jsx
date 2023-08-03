import React from "react";
import "./AboutTeam.css";


export default function AboutTeam() {
    
    const TeamMemberCard = ({ initial, name, role, imgSrc,linkedin,github, email }) => {
        return (
          <div className="column">
            <div className="card">
              <div className="img-container">
                <img src={imgSrc} alt={name} />
              </div>
              <div className="name-container">
          <h3>
            <a id="initial" className="initial-letter">{initial}</a>
            {name}
          </h3>
        </div>
              <p>{role}</p>
              <div className="icons">
                
              <a href={linkedin}>
                  <i className="fab fa-github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></i>
                </a>
                <a href={github}>
                  <i className="fab fa-github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></i>
                </a>
                <a href={email}>
                  <i className="fas fa-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg></i>
                </a>
              </div>
            </div>
          </div>
        );
      };
      
      
        return (
          <section>
            <div className="row">
              <h1>Our Team</h1>
            </div>
            <div className="row">
              <TeamMemberCard
                initial="C"
                name="ésar Monagas Romero"
                role="Co-founder"
                imgSrc="https://media.licdn.com/dms/image/C5603AQGrVMfcDLaZ-g/profile-displayphoto-shrink_800_800/0/1656529477079?e=1696464000&v=beta&t=afZtFwm2UGpPpAMEeJ-ZnBfL9N23uTyg6cMk4y7V7dQ"
                linkedin= "https://www.linkedin.com/in/cesarmonagasromero/"
                github="https://github.com/cesarmonagas15"
                email = "mailto:cesar.monagas@utexas.edu"
              />
              <TeamMemberCard
                initial="A"
                name="na Camba Gomes"
                role="Co-founder"
                imgSrc="https://media.licdn.com/dms/image/D4E03AQH30jaDjkS_Sw/profile-displayphoto-shrink_800_800/0/1689459762276?e=1696464000&v=beta&t=8oUsoQ-USZXznOfnG9_JTyyVchS0BLkm42fVzvFRdw0"
                linkedin= "https://www.linkedin.com/in/ana-camba/"
                github="https://github.com/anacambag"
                email = "mailto:anacamba@mit.edu"
              />
              <TeamMemberCard
                initial="N"
                name="ara Macias"
                role="Co-founder"
                imgSrc="https://media.licdn.com/dms/image/D5603AQGtLs-YEWn3rQ/profile-displayphoto-shrink_800_800/0/1665593217328?e=1696464000&v=beta&t=aHtkNAzFuIH6FB7zQpOyvbtCa6MrHViKGpx1TqiOo-I"
                linkedin= "https://www.linkedin.com/in/nara-macias-aa25a424b/"
                email = "mailto:nsmacias2@miners.utep.edu"
                github="https://github.com/Lilnnara"
              />
            </div>
          </section>
        );
      
    
    
}