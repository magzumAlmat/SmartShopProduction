import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
// import { Redirect } from 'react-router-dom';
import ProjectListWithoutAuth from '../projects/ProjectListWithoutAuth';
import Products from '../projects/Products';
// import OptionsPanel from '../layout/OptionsPanel';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Dashboard extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.q !== this.props.q){
            return true;
        }
        else if(this.props.projects){
            return true;
        }
        else{
            return false;
        }
    }

    componentWillUpdate(){
        this.props.projects.filter(el =>{
            el.title.includes(this.props.q)
        })
    }

    render() { 
        //console.log(this.props);
        const { products,projects, auth, notifications, q } = this.props;

        let filteredProjects = projects;
        
        if(!auth.uid) return (
       
       <section name="products" className="products" id="products">
            <div className="dashboard container">
        
            <div className="row">
                <div className="col s12 m6">
                    <ProjectListWithoutAuth projects={this.props.projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications notifications={notifications}/>
                </div>
                <div>
            
                    {/* <OptionsPanel />
                    <Products products={this.props.products} /> */}
                    
                    </div>
            </div>
            </div>
    </section>)
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={this.props.projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        );
    }
}

const getSearchedProjects = (projects, q) => {
    if(q){
        return projects.filter(p => p.title.toLowerCase().startsWith(q.toLowerCase()));
    }
    else{
        return projects
    }
}

Products.propTypes = {
    firestore: PropTypes.object.isRequired,
    products: PropTypes.array
  };

const mapStateToProps = (state) => {
    return {
        projects: getSearchedProjects(state.firestore.ordered.projects, state.search.q),
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
      
    }
};
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy:['createdAt', 'desc']},
        { collection: 'notifications', limit: 3, orderBy:['time', 'desc']},
       
    ])
)(Dashboard);