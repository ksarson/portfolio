import '../../../styles/TechStack.scss';
import TechIcon from '../../common/TechIcon';
import cssIcon from '../../../assets/logo_css.svg';
import dotNetCoreIcon from '../../../assets/logo_dotNetCore.svg';
import htmlIcon from '../../../assets/logo_html.svg';
import jsIcon from '../../../assets/logo_js.svg';
import nodeJsIcon from '../../../assets/logo_nodeJs.svg';
import reactIcon from '../../../assets/logo_react.svg';
import sqlIcon from '../../../assets/logo_sql.svg';
import tsIcon from '../../../assets/logo_ts.svg';

const TechStack = () => {
    return (
        <section id="techStack" className="tech-stack">
            <h1 className="section-header">
                My <span className="highlight">Tech Stack</span>
            </h1>
            <TechIcon iconUrl={cssIcon} />
            <TechIcon iconUrl={htmlIcon} />
            <TechIcon iconUrl={jsIcon} />
            <TechIcon iconUrl={tsIcon} />
            <TechIcon iconUrl={reactIcon} />
            <TechIcon iconUrl={nodeJsIcon} />
            <TechIcon iconUrl={dotNetCoreIcon} />
            <TechIcon iconUrl={sqlIcon} />
        </section>
    );
};

export default TechStack;
