import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { scrollUp, scrollLeft, scrollRight } from '../animation';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const ProjectSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <ProjectsDetialAll>
            <div id="project-detial">
                <h1>My Projects</h1>

                <ProjectsDetial ref={ref}>
                    <motion.div variants={scrollLeft} initial="hidden" animate={controls} className="project">
                        <img src="" alt="project pic" />
                        <p>project:name</p>
                    </motion.div>

                    <motion.div variants={scrollUp} initial="hidden" animate={controls} className="project">
                        <img src="" alt="project pic" />
                        <p>project:name</p>
                    </motion.div>

                    <motion.div variants={scrollRight} initial="hidden" animate={controls} className="project">
                        <img src="" alt="project pic" />
                        <p>project:name</p>
                    </motion.div>
                </ProjectsDetial>
            </div>
        </ProjectsDetialAll>
    );
};

const ProjectsDetialAll = styled(motion.div)`
    height: 50vh;
    h1 {
        margin: 7rem;
    }
`;

const ProjectsDetial = styled(motion.div)`
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 10rem;

    .project {
        margin: 10rem;
        min-height: 30vh;
        border-radius: 20px;
        box-shadow: ${(props) => props.theme.boxShawdo};
    }
`;

export default ProjectSection;
