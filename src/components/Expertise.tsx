import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faReact, faJava} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const WEB_STACK = [
    "Spring Boot",
    "React",
    "Java",
    "TypeScript",
    "PostgreSQL",
    "SQL",
    "Postman",
    "FastAPI",
    "Python",
];

const DEVOPS_STACK = [
    "Git",
    "Docker",
    "AWS",
    "Linux",
    "Pandas",
];

const MOBILE_STACK = [
    "React Native",
    "Flutter",
];

function Expertise(){
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Competências</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Desenvolvi uma variedade de aplicações web do zero utilizando tecnologias modernas como Spring Boot e React. Possuo forte domínio do ciclo de vida de desenvolvimento de software (SDLC).</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {WEB_STACK.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Após a conclusão do desenvolvimento, apoio na estruturação de práticas DevOps, incluindo testes automatizados, pipelines de CI/CD e automação de deploy, assegurando um Go-Live estável e escalável.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {DEVOPS_STACK.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Mobile Development</h3>
                    <p>Mantenho meus projetos alinhados às tendências do mercado ao integrar aplicações mobile. Possuo experiência profissional no desenvolvimento de aplicações mobile de nível corporativo, voltadas para apoiar decisões inteligentes e orientadas por dados.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {MOBILE_STACK.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;