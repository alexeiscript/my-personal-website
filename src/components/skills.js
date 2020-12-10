import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import '../styles/skills.css';

function Skills() {
    
    const skills = [
        {id: 1, name: "HTML", icon: faHtml5},
        {id: 2, name: "CSS", icon: faCss3Alt},
        {id: 3, name: "JavaScript", icon: faJsSquare},
        {id: 4, name: "React", icon: faReact},
        {id: 5, name: "Node.js", icon: faNodeJs}
    ];

    return(
        <div className="skills">
            {
                skills.map((skill) => {
                    return(
                    <h4 key={skill.id}><span>{skill.name}</span><FontAwesomeIcon icon={skill.icon} size="lg" className="icons"/></h4>
                    );
                })
            }
        </div>
    );
   
}

export default Skills;
