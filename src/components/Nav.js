import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = () => {
    return (
        <NavDetial>
            <div className="logo">
                <span></span>
            </div>
            <ul>
                <li>
                    <a href=".about-detial"> About me</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contact</a>
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

    a {
        text-decoration: none;
        color: black;
        color: ${(props) => props.theme.color};
    }
`;

export default Nav;
