import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';

class Skills extends Component {
    render() {
        const skills = [
            {id: 1, name: "HTML", icon: faHtml5},
            {id: 2, name: "CSS", icon: faCss3Alt},
            {id: 3, name: "JavaScript", icon: faJsSquare},
            {id: 4, name: "React", icon: faReact},
            {id: 5, name: "Node.js", icon: faNodeJs}
        ];
        return(
            <div>
                {
                    skills.map((skill) => {
                        return(
                        <p key={skill.id}>{skill.name}<FontAwesomeIcon icon={skill.icon} /></p>
                        );
                    })
                }
            </div>
        );
    }
}

export default Skills;