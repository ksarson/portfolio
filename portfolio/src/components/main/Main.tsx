import '../../styles/Main.scss';
import AboutMe from './section_AboutMe/AboutMe';
import Pages from './section_Pages/Pages';
import Projects from './section_Projects/Projects';
import TechStack from './section_TechStack/TechStack';

const Main = () => {
    return (
        <main>
            <AboutMe />
            <TechStack />
            <Projects />
            <Pages />
        </main>
    );
};

export default Main;
