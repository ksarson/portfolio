import '../../../styles/AboutMe.scss';
import headshot from '../../../assets/headshot.jpg';
import resume from '../../../assets/KSarsonResumeWeb.pdf';
import IconLink from '../../common/IconLink';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    return (
        <section id="aboutMe" className="about-me">
            <h1 className="section-header">
                <img src={headshot} alt="Headshot" className="headshot" />
                {` Hey, I'm `}
                <span className="highlight">Kolby</span>
                {`!`}
                <span className="wave">&#128075;</span>
            </h1>
            <div className="about-me-links">
                <IconLink
                    href="https://www.linkedin.com/in/kolbysarson/"
                    icon={faLinkedin}
                />
                <IconLink href="https://github.com/ksarson" icon={faGithub} />
                <IconLink href="mailto:ksarson10@gmail.com" icon={faEnvelope} />
                <IconLink href={resume} icon={faFilePdf} />
            </div>
            <p className="about-me-paragraph">
                {`A motivated `}
                <span className="highlight">full-stack developer</span>
                {` with both a `}
                <span className="highlight">Bachelor&apos;s</span>
                {` and `}
                <span className="highlight">Master&apos;s</span>
                {` degree in Computer Science. With over a year of real-world experience in the `}
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
            <p className="about-me-paragraph">
                {`I am a passionate individual who enjoys a `}
                <span className="highlight">well-rounded</span>
                {` and `}
                <span className="highlight">active lifestyle</span>
                {`. When I'm not immersed in the world of software
                development, you can find me `}
                <span className="highlight">working out</span>
                {` and maintaining a balanced and healthy lifestyle. `}
                <span className="highlight">Paddleboarding</span>
                {` is my go-to activity for unwinding and staying connected 
                with nature during the summer, and have started `}
                <span className="highlight">bouldering</span>
                {` in the winter. I also thrive on `}
                <span className="highlight">social events</span>,
                {` where I can connect with others and share experiences. These hobbies 
                and interests fuel my creativity and keep me energized, making me a `}
                <span className="highlight">well-rounded individual</span>
                {` not only `}
                <span className="highlight">professionally</span>
                {`, but also `}
                <span className="highlight">personally</span>
                {`.`}
            </p>
        </section>
    );
};

export default AboutMe;
