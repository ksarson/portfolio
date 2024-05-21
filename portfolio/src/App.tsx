import './styles/App.scss';
import { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const App = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <Header showNav={showNav} setShowNav={setShowNav} />
            <Nav showNav={showNav} />
            <Main />
            <Footer />
        </>
    );
};

export default App;
