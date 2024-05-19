import '../../styles/Header.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    showNav: boolean;
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ showNav, setShowNav }) => {
    const handleClick = () => {
        setShowNav(!showNav);
    };

    return (
        <header>
            <button className="nav-open-button" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            Kolby Sarson
        </header>
    );
};

Header.propTypes = {
    showNav: PropTypes.bool.isRequired,
    setShowNav: PropTypes.func.isRequired,
};

export default Header;
