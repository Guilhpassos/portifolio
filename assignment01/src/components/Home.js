import './Home.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
    return (
        <>
            <div className="container">
                <h1>Welcome to My Portfolio</h1>
                <p>This is the home page of my portfolio website. Here you'll find information about my projects, skills, and experience.</p>

                <section className="intro-section">
                    <h2>Introduction</h2>
                    <p>
                        Hi! I'm Guilherme Passos, a passionate software engineering student with a love for learning new technologies and solving problems.
                    </p>
                    <p>
                        Explore my website to know more about me, my projects, and the services I offer.
                    </p>
                </section>

                <section className="mission-statement">
                    <h2>Mission Statement</h2>
                    <p>
                        My mission is to leverage technology to create impactful solutions, continuously improve my skills, and contribute positively to the tech community.
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
