import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import { fadeIn } from '../animation';

const Nav = () => {
    return (
        <NavDetial variants={fadeIn} initial="hidden" animate="show">
            <div className="logo">
                <span></span>
            </div>
            <ul>
                <li>
                    <Link to="#about-detial">
                        <p> About me</p>
                    </Link>
                </li>
                <li>
                    <Link to="#project-detial">
                        <p>Projects</p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <p>Contact</p>
                    </Link>
                </li>
            </ul>
        </NavDetial>
    );
};

const NavDetial = styled(motion.div)`
    display: flex;
    height: 10vh;
    align-items: center;

    .logo {
        flex: 1 1 1rem;
    }

    ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
    }
    li {
        display: block;
        padding: 1rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    p {
        color: ${(props) => props.theme.color};
    }
`;

export default Nav;
