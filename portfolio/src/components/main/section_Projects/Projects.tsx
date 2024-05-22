import '../../../styles/Projects.scss';
import Carousel from '../../common/Carousel';
import capstoneMapImage from '../../../assets/capstoneMap.png';
import dropletAdditionImage from '../../../assets/dropletAddition.png';
import portfolioIteration1 from '../../../assets/portfolioIteration1.png';

// #region Carousel Item Definitions
const capstoneMapItem = {
    imgUrl: capstoneMapImage,
    title: 'Hospice Mapping Application',
    techStack: ['CSS', 'HTML', 'JS', 'PHP'],
    description: `A Mapping visualization with pins and colour coding
    of patients for both quick and easy access to information on their patients, 
    and data analysis for the Windsor Hospice.`,
};

const dropletAdditionItem = {
    imgUrl: dropletAdditionImage,
    title: 'Droplet Addition Math Game',
    techStack: ['CSS', 'HTML', 'JS', 'React'],
    description: `A redesign of a simple math game emphasizing
    'Human Computer Interaction' and 'Design Principles'.`,
};

const portfolioIteration1Item = {
    imgUrl: portfolioIteration1,
    title: 'Portfolio Iteration 1',
    techStack: ['CSS', 'HTML', 'JS', 'React'],
    description: `Sample of my first iteration of my portfolio. 
    Initially began with only HTML and CSS and poor codebase quality,
    later adding JS and React.`,
};
// #endregion

const carouselItemList = [
    capstoneMapItem,
    dropletAdditionItem,
    portfolioIteration1Item,
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h1 className="section-header">
                My <span className="highlight">Projects</span>
            </h1>
            <Carousel
                hasHoverEffect={true}
                carouselItemList={carouselItemList}
            />
        </section>
    );
};

export default Projects;
