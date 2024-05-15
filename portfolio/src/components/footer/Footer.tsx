import '../../styles/Footer.scss';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Logo" className="footer-logo" />
            <ul>
                <li>
                    <a href="#github">GitHub</a>
                </li>
                <li>
                    <a href="#linkedin">LinkedIn</a>
                </li>
                <li>
                    <a href="#email">Email</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
            <div className="copyright">Copyright Ⓒ 2024 Kolby Sarson</div>
        </footer>
    );
};

export default Footer;
