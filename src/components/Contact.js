import { motion } from 'framer-motion';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactDetial>
            <div className="detials">
                <h1>Contact</h1>
                <h2>Email: Chancch70@gmail.com </h2>
                <h2>
                    GitHub: <a href="https://github.com/kingchan818">https://github.com/kingchan818</a>
                </h2>
            </div>
        </ContactDetial>
    );
};

const ContactDetial = styled(motion.div)`
    height: 50vh;
    text-align: center;
    h1,
    h2 {
        font-weight: lighter;
    }

    .detials {
        h1 {
            font-size: 8rem;
        }
        margin: 20rem;
    }
`;

export default Contact;
