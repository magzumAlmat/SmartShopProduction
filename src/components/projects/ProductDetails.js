import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
// import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteProject } from '../../store/actions/projectActions'
// import Products from './Products'
// const [cart,setCart]=useState([])

// const {auth}=props
// const { product } = this.props;
import {Container} from 'reactstrap'
import {Row} from 'reactstrap'

import {Col} from 'reactstrap'
import {Media} from 'reactstrap'
import {Alert} from 'reactstrap'
const ProductDetails = (props) => {
    const { product} = props.location.myCustomProps;
    const {auth}=props
    console.log('productDetail--',product,'AUTH--',auth)
    

    

    const handleClick = (e) =>{
        // e.preventDefault();
        // const id = props.match.params.id;
        // props.deleteProject(id, auth.uid);
        // props.history.push('/');
    }

    const handleEditClick = (e) =>{
        // console.log(props.id)
        // e.preventDefault();
        // props.history.push(`/project/${props.match.params.id}/edit`);
    }

    console.log('proDDDUCT from project details',props.location.myCustomProps)

    //if(!auth.uid)
    return (
        
        // <div className="container section project-details">
        //         <div className="card z-depth-0">
        //             <div className="card-content">

        //             <img
        //                 className="card-img-top "
        //                 src={props.location.myCustomProps.url}
        //                 alt={props.location.myCustomProps.name}
        //                 width='600'
        //                 height='600'
        //                 style={{ 
        //                 paddingTop:'5%'
        //                 }}
        //             />
        
          
        //     <h5 className="card-title">{props.location.myCustomProps.name}</h5>
        //     <p className="price">{props.location.myCustomProps.price} T</p>
                     
                   
                      
        //             </div>
                    
        //             <div className="card-action grey lighten-4 grey-text">
        //                 <div>Posted by {props.location.myCustomProps.authorFirstName} {props.location.myCustomProps.authorLastName}</div>
        //                 {/* <div>{moment(product.createdAt.toDate()).calendar()}</div> */}
        //             </div>
        //             {/* <div>
        //                 <Cart cartItems={cartItems }/>
        //             </div> */}
               
        //         </div>
        //     </div>

        <div className='container'>
            <Container>
            <Row>
                <Col> 
                <img width={300}
                     height={300}
                     className="mr-3"
                     src={props.location.myCustomProps.url}
                     alt={props.location.myCustomProps.name}
                />
                </Col>

                <Col> 
                <h3>{props.location.myCustomProps.title}</h3>
                <h5>Категория: {props.location.myCustomProps.Category.label}</h5>
                {/* <h6>{props.location.myCustomProps.content}</h6> */}
                <div variant="success">
                    <div>
                     <h4>{props.location.myCustomProps.price} &#8376;</h4>
                    </div>
                    <h6>
                       1 x {props.location.myCustomProps.title}   
                       
                       <span className='float-right'>
                       {props.location.myCustomProps.price}
                       </span>
                    </h6>

                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                    </div>
                <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
                </Col>
            </Row>
            
            </Container>
        </div>
        
        

            // <Media >
           
            //  <div>Posted by {props.location.myCustomProps.authorFirstName} {props.location.myCustomProps.authorLastName}</div>
            // <div>{moment(props.location.myCustomProps.createdAt.toDate()).calendar()}</div>
            // <Media.Body>
            //     <h5></h5>
            //     <p>
            //     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            //     ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            //     tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            //     Donec lacinia congue felis in faucibus.
            //     </p>
            // </Media.Body>
            // </Media>
    )

    if (product) {

        const disabledBool = product.authorId !== auth.uid;
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    {/* <div className="card-content">
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
                     */}
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
         {collection: 'products' }
    ])
)(ProductDetails)