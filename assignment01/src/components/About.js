/*
 * File name: About.js
 * Student’s Name: Guilherme Passos Da Silva
 * StudentID: 301379110
 * Date: 2024-09-27
 */

import './about.css';
import profileImage from '../assets/Eu.jpg'; // Ensure this path is correct
import resumePDF from '../assets/resume.pdf'; // Replace with the actual path to your PDF

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
                    I am Guilherme Passos, a Software Engineering student with a passion for technology and continuous learning. 
                    I thrive in problem-solving environments and enjoy working with diverse technologies to create meaningful solutions. 
                    Currently, I'm advancing my skills in web development, data structures, and algorithms.
                </p>
                <p>
                    With experience in both frontend and backend development, I focus on building user-friendly, responsive applications. 
                    I am committed to refining my craft and am always open to learning new methodologies and improving my existing capabilities.
                </p>
                <p>
                    When I’m not coding, I’m exploring different cultures and languages, which I find essential in broadening my perspective 
                    and enhancing my problem-solving approaches.
                </p>
                <p>
                    You can download my resume here: <a href={resumePDF} target="_blank" rel="noopener noreferrer">Download Resume</a>
                </p>
            </section>
        </div>
    );
};

export default About;
