import '../../styles/Footer.scss';
import Logo from '../../assets/logo.png';
import resume from '../../assets/KSarsonResumeWeb.pdf';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Logo" className="footer-logo" />
            <ul>
                <li>
                    <a href="https://github.com/ksarson">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sarsonk/">LinkedIn</a>
                </li>
                <li>
                    <a href="mailto:ksarson10@gmail.com">Email</a>
                </li>
                <li>
                    <a href={resume}>Resumé</a>
                </li>
            </ul>
            <div className="copyright">Copyright Ⓒ 2024 Kolby Sarson</div>
        </footer>
    );
};

export default Footer;
