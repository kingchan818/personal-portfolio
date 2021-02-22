import styled from 'styled-components';
import { motion } from 'framer-motion';
const About = ({ setTheme }) => {
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
        <AboutDetial>
            <Myself>
                <img src="https://via.placeholder.com/150" alt="pic" className="mypic" />
                <div className="theme-list">
                    <p>Theme</p>
                    <button onClick={themeEventListener1} className="lightTheme"></button>
                    <button onClick={themeEventListener2} className="darkTheme"></button>
                    <button onClick={themeEventListener3} className="darkBlueTheme"></button>
                    <button onClick={themeEventListener4} className="pinkTheme"></button>
                </div>
                <div className="skills">
                    <h2>About Me</h2>
                    <p>I am Calvin Chan,a Information Technology Student</p>
                </div>
            </Myself>
        </AboutDetial>
    );
};

const AboutDetial = styled(motion.div)`
    h2,
    p {
        text-align: center;
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
            &:hover {
                height: 45px;
                width: 45px;
                margin: 2rem 4rem;
            }
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
    }
    .skills {
        margin: 20px 0px;
        p {
            padding: 1rem;
        }
    }
`;

export default About;
