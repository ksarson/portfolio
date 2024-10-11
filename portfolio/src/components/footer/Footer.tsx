import '../../styles/Footer.scss';
import Logo from '../../assets/logo.png';
import resume from '../../assets/KSarsonResumeWeb.pdf';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Logo" className="footer-logo" />
            <ul>
                <li>
                    <a
                        href="https://github.com/ksarson"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/sarsonk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:ksarson10@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Email
                    </a>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        Resumé
                    </a>
                </li>
            </ul>
            <div className="copyright">Copyright Ⓒ 2024 Kolby Sarson</div>
        </footer>
    );
};

export default Footer;
