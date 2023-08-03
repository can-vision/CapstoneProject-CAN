import React, {useEffect} from "react";
import "./AboutUs.css"; // Import the CSS file



export default function AboutUs() {
  const TeamMemberCard = ({ initial, name, role, imgSrc, linkedin, github, email, bio }) => {
    return (
        <div className="team-member">
        <div className="team-member-card">
        <div className="team-member-column">
          <div className="team-member-img-container">
            <img src={imgSrc} alt={name} />
          </div>
          <div className="team-member-name-container">
            <h3>
              <a className="team-member-initial">{initial}</a>
              {name}
            </h3>
          </div>
          <p className="team-member-role">{role}</p>
          </div>
        <div className="team-member-column2">
            <p className="team-member-bio">{bio}</p>
            
            {/* <div className="team-member-icons">
            <a href={linkedin}>
              <i className="fab fa-github"></i>
            </a>
            <a href={github}>
              <i className="fab fa-github"></i>
            </a>
            <a href={email}>
              <i className="fas fa-envelope"></i>
            </a>
          </div> */}

        </div>
        
        </div>
      </div>
    );
  };
  return (
    <>
    <section>
      <div className="hero-banner">
        <h1 className="hero-title">What is CanKitchen?</h1>
      </div>
      <div className="about-us-row">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At CanKitchen, our mission is to empower people to reduce wasted food and enable diverse cooking experiences.
            We do this by providing a platform that suggests recipes based on ingredients already in your pantry.
          </p>
        </div>

        <div className="wasted-food-section">
          <h2>Why "Wasted Food"?</h2>
          <p>
          At CanKitchen, we are purposeful with our language, which is why we don't refer to food as waste. 
          Instead, we use the term "wasted food." This small but significant change emphasizes that it is 
          not the food itself that is a waste, but rather the result of human actions and decisions. By 
          acknowledging this distinction, we encourage responsibility and awareness about our consumption 
          habits.
          </p>
        </div>

        <div>
            <div className="image-container">
            <img src= "https://images.unsplash.com/photo-1542624771497-851f77d79349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2366&q=80"
                 alt="Wasted Food Image" />
            </div>
        </div>
        

        <div className="app-section">
          <h2>About the App</h2>
          <p>
            The CanKitchen app is a user-friendly platform that allows users to find recipes they can
            make with available ingredients at home. We offer comprehensive dietary options and an immsersive 
            user-experience that allows our users to save recipes and learn about food rescue.
          </p>
        </div>

        <div className="purpose-section">
          <h2>Purpose</h2>
          <p>
            Our purpose is to bridge the gap between food surplus and hunger,
            creating sustainable and compassionate communities where everyone can thrive.
          </p>
        </div>
      </div>
    </section>


    <section>
      <div className="our-team-section">
        <h1>Our Team</h1>
      </div>
      <div className="team-cards-container">
        <TeamMemberCard
          initial="C"
          name="ésar Monagas Romero"
          role="Co-founder"
          imgSrc="https://media.licdn.com/dms/image/C5603AQGrVMfcDLaZ-g/profile-displayphoto-shrink_800_800/0/1656529477079?e=1696464000&v=beta&t=afZtFwm2UGpPpAMEeJ-ZnBfL9N23uTyg6cMk4y7V7dQ"
          linkedin="https://www.linkedin.com/in/cesarmonagasromero/"
          email="mailto:cesar.monagas@utexas.edu"
          bio="My name is César Monagas Romero. Originally from Caracas, Venezuela, I am now a first-generation college student at The University of Texas at Austin 🤘🏼. 
          I am studying Management Information Systems, French Studies, and Computer Science. I am passionate about leveraging technology and business to create products 
          with meaningful social impact."
        />
        <TeamMemberCard
          initial="A"
          name="na Camba Gomes"
          role="Co-founder"
          imgSrc="https://media.licdn.com/dms/image/D4E03AQH30jaDjkS_Sw/profile-displayphoto-shrink_800_800/0/1689459762276?e=1696464000&v=beta&t=8oUsoQ-USZXznOfnG9_JTyyVchS0BLkm42fVzvFRdw0"
          linkedin="https://www.linkedin.com/in/ana-camba/"
          email="mailto:anacamba@mit.edu"
          bio="My name is Ana Camba Gomes, a first-generation Latina college student originally from Maracaibo, Venezuela. 
          Currently, I am pursuing a major in Electrical Engineering and Computer Science at MIT. 
          I am passionate about exploring new ideas and technologies to make the world more accessible and inclusive for everyone."
        />
        <TeamMemberCard
          initial="N"
          name="ara Macias"
          role="Co-founder"
          imgSrc="https://media.licdn.com/dms/image/D5603AQGtLs-YEWn3rQ/profile-displayphoto-shrink_800_800/0/1665593217328?e=1696464000&v=beta&t=aHtkNAzFuIH6FB7zQpOyvbtCa6MrHViKGpx1TqiOo-I"
          linkedin="https://www.linkedin.com/in/nara-macias-aa25a424b/"
          email="mailto:nsmacias2@miners.utep.edu"
          bio="My name is Nara Macias, a first-generation student from Mexico, studying Computer Science at The University of Texas at El Paso 🤙🏽. Passionate about technology and bridging cultural gaps, I aim to create inclusive and accessible solutions that empower diverse communities. 
          With my skills and determination, I want to leave a positive impact and contribute to a more equitable world through technology."
        />
      </div>
    </section>
    </>
  );
}
