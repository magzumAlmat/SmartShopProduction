import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 
// import Select from './Select';
import Select from "react-select";
import CustomSelect from './Select'
import { Category } from '@material-ui/icons';

const colorOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];


  
const options = [
    { value: 'vine', label: 'Вино' },
    { value: 'champagne', label: 'Шампанское' },
    { value: 'vodka', label: 'Водка' }
  ]

class CreateProject extends Component {
    state = {
        selectOptions: [],
        cartItems:[],
        title: '',      
        Category:'',
        Region:'',
        Manufacturer:'',
        Brand:'',
        Fortress:'',
        Colour:'',
        Sugar:'',
        Grape:'',
        Serving_temperature:'',
        Vintage:'',
        Products_webpage:'',
        content: '',
        description:'',
        delivery:'',
        img:''
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/');
        
    }

     onChangeInput=(value,e)=> {
        // console.log(e.target.Category)
        // const setCategory=e.target.value.toString()
        this.state.Category=value
        // console.log('Value of Category',typeof(valueString))
        // console.log('Category=',this.props.Category)
        this.state.selectOptions=this.state.Category.value

        // this.setState({selectOptions: options})
        console.log('this is selected options',this.state.selectOptions)
        // this.setState({
        //     [e.target.id]: e.target.valueString
        // })
        
        
        
    }
    
    render() {
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                  
                  
                  
                  
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div >
                    
                        <label htmlFor="Category">Category</label>
                        {/* <Select options={colourOptions} type="text" id="Category" onChange={this.handleChange} /> */}
                        <CustomSelect options={options}  onChange={this.onChangeInput} /> 

                    </div>
                  
                    <br/>
                    <br/>
                  
                  
                  
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    
                    <br/>
                    <br/>
                    
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);