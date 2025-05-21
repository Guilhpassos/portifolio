/*
 * File name: services.css
   Name: Guilherme Passos Da Silva
  */
 

import './about.css';
import profileImage from '../assets/Eu.jpg'; // Ensure this path is correct
import Resume from '../assets/resume.pdf'; // Replace with the actual path to your PDF

const About = () => {
    return (
        <div className="container">
            <h1>About Me</h1>
            <div className="profile-section">
                <img src={profileImage} alt="Guilherme Passos" className="profile-image" />
                <p className="legal-name">Guilherme Passos</p>
            </div>
            <section className="about-section">
                <p>
                    Hi, my name is Guilherme Passos. I'm a passionate software engineer who loves turning ideas into real solutions that make everyday life easier. I have a strong foundation in both frontend and backend development, and I’m always looking for ways to build clean, intuitive, and scalable applications.


                </p>
                <p>
                    Technology has always fascinated me — not just because of what I can do, but because of how it connects people and opens up new opportunities. I enjoy diving into new tools, learning from challenges, and improving a little more with every project. Whether it's web development, database design, debugging code, or tackling something outside of my comfort zone, I like figuring things out and getting them to work just right.

                </p>
                <p>
                    Outside of tech, I'm genuinely curious about languages and cultures. I believe that staying open to different perspectives helps me grow — not only as a developer, but as a person. For me, growth isn’t just about code; it’s about learning, listening, and  putting effort with purpose                </p>
                <p>
                    You can download my resume here: <a href={Resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
                </p>
            </section>
        </div>
    );
};

export default About;
