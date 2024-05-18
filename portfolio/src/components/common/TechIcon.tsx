import '../../styles/TechIcon.scss';
import PropTypes from 'prop-types';

interface TechIconProps {
    iconUrl: string | undefined;
}

const TechIcon: React.FC<TechIconProps> = ({ iconUrl }) => {
    return <img src={iconUrl} alt="Tech Icon" className="tech-icon-img" />;
};

TechIcon.propTypes = {
    iconUrl: PropTypes.string.isRequired,
};

export default TechIcon;
