import '../../styles/IconLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import PropTypes, { Validator } from 'prop-types';

interface IconLinkProps {
    icon: IconDefinition;
    href: string | undefined;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, href }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} className="icon-img" />
        </a>
    );
};

IconLink.propTypes = {
    icon: PropTypes.object.isRequired as Validator<IconDefinition>,
    href: PropTypes.string.isRequired,
};

export default IconLink;
