import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
// import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteProject } from '../../store/actions/projectActions'
// import Products from './Products'
// const [cart,setCart]=useState([])



const ProjectDetails = (props) => {
    const { project, auth } = props;
    

    

    const handleClick = (e) =>{
        e.preventDefault();
        const id = props.match.params.id;
        props.deleteProject(id, auth.uid);
        props.history.push('/');
    }

    const handleEditClick = (e) =>{
        console.log(props.id)
        e.preventDefault();
        props.history.push(`/project/${props.match.params.id}/edit`);
    }

    console.log('project from project details',project)
    if(!auth.uid) return (
        
        <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <p>{project.Category.label}</p>
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>

                      

                        {/* <button className="button waves-effect waves-light btn indigo darken-2"
                        disabled={disabledBool}
                        onClick={handleEditClick}>
                            Edit
                        </button>
                        <button 
                            onClick={handleClick}
                            className="button waves-effect waves-light btn red darken-4"
                            disabled={disabledBool}>
                            Delete
                        </button> */}
                    </div>
                    
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                    {/* <div>
                        <Cart cartItems={cartItems }/>
                    </div> */}
               
                </div>
            </div>
    )

    if (project) {

        const disabledBool = project.authorId !== auth.uid;
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                        <button className="button waves-effect waves-light btn indigo darken-2"
                        disabled={disabledBool}
                        onClick={handleEditClick}>
                            Edit
                        </button>
                        <button 
                            onClick={handleClick}
                            className="button waves-effect waves-light btn red darken-4"
                            disabled={disabledBool}>
                            Delete
                        </button>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                    
                </div>
            </div>
        )
    }else{
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteProject: (projectId, userId) => dispatch(deleteProject(projectId, userId))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
         {collection: 'projects' }
    ])
)(ProjectDetails)
