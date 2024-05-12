import '../../styles/Main.scss';
import AboutMe from './section_AboutMe/AboutMe';
import Projects from './section_Projects/Projects';
import TechStack from './section_TechStack/TechStack';

const Main = () => {
    return (
        <main>
            <AboutMe />
            <TechStack />
            <Projects />
        </main>
    );
};

export default Main;
