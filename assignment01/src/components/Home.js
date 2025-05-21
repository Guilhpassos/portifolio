/*
   Name: Guilherme Passos Da Silva
  */
 

import './Home.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
    return (
        <>
            <div className="container">
                <h1>Welcome to My Portfolio</h1>

                <section className="intro-section">
                    <h2>Introduction</h2>
                    <p>
                        Hi, I’m Guilherme Passos and I'm a software engineering with a strong interest in technology and a passion for solving problems through code.
                    </p>

                </section>

                <section className="mission-statement">
                    <h2>Long Term Goal</h2>
                    <p>
                        My professional goal is to apply technology in meaningful ways, develop my skills over time, and build a solid career in the tech industry. I believe in long-term commitment and am dedicated to adding value and evolving in every stage of my career.
                    </p>
                </section>

                <section className="cta-section">
                    <h2>Want to learn more?</h2>
                    <p>Check out my pages below to explore further!</p>
                    <div className="button-container">
                        <Link to="/about" className="button">About Me</Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
