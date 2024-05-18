import '../../../styles/Projects.scss';
import Carousel from '../../common/Carousel';
import capstoneMapImage from '../../../assets/capstoneMap.png';
import dropletAdditionImage from '../../../assets/dropletAddition.png';
import portfolioIteration1 from '../../../assets/portfolioIteration1.png';

// #region Carousel Item Definitions
const capstoneMapItem = {
    imgUrl: capstoneMapImage,
    description: 'Capstone Project',
};

const dropletAdditionItem = {
    imgUrl: dropletAdditionImage,
    description: 'Droplet Addition',
};

const portfolioIteration1Item = {
    imgUrl: portfolioIteration1,
    description: 'Portfolio Ieration 1',
};
// #endregion

const carouselItemList = [
    capstoneMapItem,
    dropletAdditionItem,
    portfolioIteration1Item,
];

const Projects = () => {
    return (
        <section className="projects">
            <h1 className="section-header">
                My <span className="highlight">Projects</span>
            </h1>
            <Carousel carouselItemList={carouselItemList} />
        </section>
    );
};

export default Projects;
