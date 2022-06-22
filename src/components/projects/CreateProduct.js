import React,{ Component,useState } from 'react';
// import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 
// import Select from './Select';
// import Select from "react-select";
import CustomSelect from './Select'
// import { Category } from '@material-ui/icons';
import {createProductAction} from '..//../store/actions/productActions';
import firebase from 'firebase';
import { storage } from '../../config/fbConfig';

const options = [
   
  { value: 'smartphones',  label: 'СМАРТФОНЫ'},
  { value: 'pads',  label: 'ПЛАНШЕТЫ'},
  { value: 'notebooks',   label: 'НОУТБУКИ'},
  { value: 'smartwatches',   label: 'СМАРТ-ЧАСЫ'},
  { value: 'headphones',   label: 'НАУШНИКИ'},
  { value: 'accessories', label: 'АКСЕССУАРЫ'},
  { value: 'technique',   label: 'ТЕХНИКА'},

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
        img:'',
        name:'',
        picture:'',
        price:0,
        sizes:[],
        defaultQty:0,
        url:''
        
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })
       
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('state from CREATEPRODUCT',this.state);
        this.props.createProductAction(this.state)
        this.props.history.push('/products');
        
        
       
    }
    


     onChangeInput=(value,e)=> {
        this.state.Category=value
        this.state.selectOptions=this.state.Category.value           
    }


    //-------------------------------------------------------------------------
    
 ReactFirebaseFileUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              this.setState({url})
            });
        }
      );
    };
  
    console.log("URL ", this.state.url);
  
    return (
      <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange}  />
        <a onClick={handleUpload}>Загрузить</a>
        
        <br />
        {url}
        <br />
        <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
      </div>
    );
  };
  
 
   
    //------------------------------------------------------------------------
    
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

                    <div>
                       <this.ReactFirebaseFileUpload/>
                    </div>
                    



                  

                    {/* <div className="input-field">
                        <label htmlFor="picture">IMAGE LINK</label>
                        <input type="text" id="picture" onChange={this.handleChange} />
                    </div>
                     */}
                    <br/>
                    <br/>
                    

                    <div className="input-field">
                        <label htmlFor="name">name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    
                    <br/>
                    <br/>

                    <div className="input-field">
                        <label htmlFor="price">price</label>
                        <input type="number" id="price" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="default qty">default qty</label>
                        <input type="number" id="default qty" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <br/>
                    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" >Create Project</button>
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
        createProductAction: (product) => dispatch(createProductAction(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);