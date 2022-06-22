import React from 'react';
import moment from 'moment';
// import Products from './Products';

// import { connect } from 'react-redux';
// import OptionsPanel from '../options/SortPrices';



const ProjectSummary = ({project}) => {
    // const { sortingType } = this.props.sorting;
    return (
        <div>
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</p>
            </div>
            
            {/* <button onClick={()=>addToCart(project)}>
                         add to card
            </button> */}
            
       
        </div>
       
        </div>

            );
}

// const mapStateToProps = state => ({
//     sorting: state.sorting
//   });
  
export default (ProjectSummary);