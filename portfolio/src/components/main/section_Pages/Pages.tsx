import '../../../styles/Pages.scss';
import Carousel from '../../common/Carousel';
import LibraryImg from '../../../assets/library.png';
import CalculatorImg from '../../../assets/calculator.png';
import CuboneCafeImg from '../../../assets/cuboneCafe.png';
import PokemonFormImg from '../../../assets/pokemonForm.png';
import SocailLandingImg from '../../../assets/socialLanding.png';
import TicTacToeImg from '../../../assets/ticTacToe.png';

// #region Carousel Item Definitions
const libraryPage = {
    imgUrl: LibraryImg,
    title: 'Library',
    techStack: ['CSS', 'HTML', 'JS'],
    description: `A library appplication`,
};

const calculatorPage = {
    imgUrl: CalculatorImg,
    title: 'Calculator',
    techStack: ['CSS', 'HTML', 'JS'],
    description: `A calculator application`,
};

const cuboneCafePage = {
    imgUrl: CuboneCafeImg,
    title: 'Cubone Cafe',
    techStack: ['CSS', 'HTML', 'JS'],
    description: `A cafe website`,
};

const pokemonFormPage = {
    imgUrl: PokemonFormImg,
    title: 'Pokemon Form',
    techStack: ['CSS', 'HTML', 'JS'],
    description: `A Pokemon form application`,
};

const socialLandingPage = {
    imgUrl: SocailLandingImg,
    title: 'Social Landing',
    techStack: ['CSS', 'HTML', 'JS'],
    description: `A social landing page`,
};

const ticTacToePage = {
    imgUrl: TicTacToeImg,
    title: 'Tic Tac Toe',
    techStack: ['CSS', 'HTML', 'JS'],
    description: `A Tic Tac Toe game`,
};
// #endregion

const carouselItemList = [
    libraryPage,
    calculatorPage,
    cuboneCafePage,
    pokemonFormPage,
    socialLandingPage,
    ticTacToePage,
];

const Pages = () => {
    return (
        <section id="pages" className="pages">
            <h1 className="section-header">
                My <span className="highlight">Pages</span>
            </h1>
            <Carousel
                hasHoverEffect={false}
                carouselItemList={carouselItemList}
            />
        </section>
    );
};

export default Pages;
