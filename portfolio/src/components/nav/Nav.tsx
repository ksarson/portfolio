import '../../styles/Nav.scss';
import React from 'react';
import PropTypes from 'prop-types';

interface NavProps {
    showNav: boolean;
}

const Nav: React.FC<NavProps> = ({ showNav }) => {
    const handleOnClick = () => {
        const navElement = document.querySelector('nav');
        if (navElement) {
            navElement.className = 'nav';
        }
    };

    return (
        <nav className={`nav${showNav ? '-show' : ''}`}>
            <ul>
                <li>
                    <a href="#aboutMe" onClick={handleOnClick}>
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#techStack" onClick={handleOnClick}>
                        Tech Stack
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={handleOnClick}>
                        Projects
                    </a>
                </li>
            </ul>
        </nav>
    );
};

Nav.propTypes = {
    showNav: PropTypes.bool.isRequired,
};

export default Nav;
