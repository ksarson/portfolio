import './styles/App.scss';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </>
    );
};

export default App;
