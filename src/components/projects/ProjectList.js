import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
// import Products from './Products';
const ProjectList = ({projects},props) => {
    return (
        <div className="project-list section">
            {
                projects && projects.map(project => {
                    return(<div>
                        <Link to={'/project/' + project.id} key={project.id}>
                            <ProjectSummary project={project} props={props}/>
                         
                        </Link>
                        <div>
                        {/* <Products/> */}
                        </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ProjectList;