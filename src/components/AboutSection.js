import styled from 'styled-components';
import { motion } from 'framer-motion';
import mypic from '../img/myself.jpg';
import { fadeIn, popUp } from '../animation';

const About = ({ setTheme, theme }) => {
    const themeEventListener1 = () => {
        setTheme('lightTheme');
    };
    const themeEventListener2 = () => {
        setTheme('darkTheme');
    };
    const themeEventListener3 = () => {
        setTheme('darkBlueTheme');
    };
    const themeEventListener4 = () => {
        setTheme('pinkTheme');
    };

    return (
        <AboutDetial variants={popUp} initial="hidden" animate="show">
            <div id="about-detial">
                <Myself>
                    <img src={mypic} alt="pic" className="mypic" />
                    <div className="theme-list">
                        <p>Theme</p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={themeEventListener1}
                            className="lightTheme"
                        ></motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={themeEventListener2}
                            className="darkTheme"
                        ></motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={themeEventListener3}
                            className="darkBlueTheme"
                        ></motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={themeEventListener4}
                            className="pinkTheme"
                        ></motion.button>
                    </div>
                    <div className="skills">
                        <h2>About Me</h2>
                        <p>Diu ni loa mo </p>
                    </div>
                </Myself>
            </div>
        </AboutDetial>
    );
};

const AboutDetial = styled(motion.div)`
    h2,
    p {
        text-align: center;
    }
    #about-detial {
        height: 50vh;
        display: flex;
        align-items: stretch;
        justify-content: center;
    }
    .theme-list {
        text-align: center;

        button {
            margin: 2rem;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            outline: none;
            border-color: ${(props) => props.theme.borderColor};
            cursor: pointer;
        }

        .darkBlueTheme {
            background: #15202b;
        }
        .darkTheme {
            background: #06090f;
        }
        .lightTheme {
            background: #fff;
        }
        .pinkTheme {
            background: #46344e;
        }
    }
`;

const Myself = styled(motion.div)`
    .mypic {
        display: block;
        margin: 2rem auto;
        border-radius: 50%;
        height: 200px;
        width: 210px;
        object-fit: cover;
        object-position: center;
    }
    .skills {
        margin: 20px 0px;
        p {
            padding: 1rem;
        }
    }
`;

export default About;
