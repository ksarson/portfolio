import '../../../styles/AboutMe.scss';
import headshot from '../../../assets/headshot.jpg';
import resume from '../../../assets/KSarsonResumeWeb.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    return (
        <section className="about-me">
            <h1 className="about-me-header">
                <img src={headshot} alt="Headshot" className="headshot" /> Hey,
                I&apos;m <span className="highlight">Kolby</span>!{' '}
                <span className="wave">👋</span>
            </h1>
            <div className="about-me-links">
                <a
                    href="https://www.linkedin.com/in/sarsonk/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="icon-img" />
                </a>
                <a
                    href="https://github.com/ksarson"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} className="icon-img" />
                </a>
                <a
                    href="mailto:ksarson10@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faEnvelope as IconDefinition}
                        className="icon-img"
                    />
                </a>
                <a href={resume} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon
                        icon={faFilePdf as IconDefinition}
                        className="icon-img"
                    />
                </a>
            </div>
            <p className="about-me-paragraph">
                {`A motivated `}
                <span className="highlight">full-stack developer</span>
                {` with both a Bachelor's and Master's degree in Computer Science.
                With over a year of real-world experience in the `}
                <span className="highlight">.NET/React</span>
                {` stack, I've developed a knack for crafting `}
                <span className="highlight">elegant solutions</span>
                {` and `}
                <span className="highlight">adding customer value</span>
                {`. I thrive in dynamic environments, where my strong `}
                <span className="highlight">communication skills</span>
                {` and passion for `}
                <span className="highlight">collaboration</span>
                {` shine. Eager to embark on the next chapter of my software engineering
                journey, I'm excited to leverage my expertise to contribute to `}
                <span className="highlight">impactful projects</span>
                {` and drive `}
                <span className="highlight">innovation</span>
                {` in the tech industry.`}
            </p>
        </section>
    );
};

export default AboutMe;
