import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Product from './Product';
import Pagination from './Pagination';
import Spinner from '../layout/Spinner';
import { Container, Row, Col } from 'reactstrap';

import { Nav, NavItem, NavLink,Button } from 'reactstrap';

class Products extends Component {
  state = {
    products: [],
    pageOfItems: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.products });
  }

  
  onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

  selectCategory=(e,props,state)=>{
    
    console.log(e.target.value)

    this.setState({ pickedCategory:[]})
    this.setState({ pickedCategory: e.target.value})

    // this.setState({
    //   pickedCategory: ''
    // });
    
  }
 
  // getFilteredProducts(pickedCategory) {
  //   console.log('Я внутри getFilteredProduycts------------------------------------------')
  //   console.log(' '  ,this.state.pickedCategory)
   
  
  //   const filter = this.props.filter;
  
  //   console.log(this.state.pageOfItems)
                            
  //   // console.log('------------------------------------------')
  //   // console.log('вывод ',(this.state.pageOfItems))
  //   // console.log('------------------------------------------')

  //   const filteredProducts = this.state.pageOfItems.map(obj => {
  //   const filtered = Object.values(obj.Category.value)
  //       let concatedArray=[]
  //       let buffer=''
  //       // console.log('Filtered до цикла  ', filtered)
        
  //       if (!filtered==null){   
  //         console.log('filtered is null', filtered)  
       
  //       }
  //       else{ buffer = filtered.join('')}
       
  //       concatedArray.push(buffer,obj)

  //       // console.log('buffer ',buffer)
  //       // console.log('obj',obj)

  //       console.log('  pickedCategory  ---- ', this.state.pickedCategory)
  //       if (buffer===this.state.pickedCategory.toString()){
  //         this.state.newArray.push(concatedArray[1])
  //         console.log('GG '  ,this.state.newArray)}
     
  //       if (filtered.length === 0) return null;
  //     })
      
  
  getFilteredProducts(pickedCategory) {
    this.state.newArray=[];
    const filter = this.props.filter;
    // console.log(this.state.pageOfItems)
    // console.log('------------------------------------------')
    // console.log('вывод ',(this.state.pageOfItems))
    // console.log('------------------------------------------')
    const filteredProducts = this.state.pageOfItems.map(obj => 
      {
    const filtered = Object.values(obj.Category.value)
    let concatedArray=[]
    let buffer=''
    // console.log('Filtered до цикла  ', filtered)
    buffer = filtered.join('')
    concatedArray.push(buffer,obj)
    // console.log('buffer ',buffer)
    // console.log('obj',obj)
    console.log('3 pickedCategory is ',pickedCategory)
    if (buffer===this.state.pickedCategory.toString()){
          this.state.newArray.push(concatedArray[1])
          console.log('4 NewArray -  '  ,this.state.newArray)}
     // if (newArray.length === 0) return <p>Выберите категорию товара</p>;
})

      return  <>
      {this.state.newArray.map(product => (
        <Product product={product} key={product.id}  />
        ) )}
      </> 
  }
  


  render() {
    const { products } = this.state;
    if (products.length > 0) {
      return (

        <>
        <Container>
          <Nav onClick={this.selectCategory} >

            <NavItem>
              <Button value="smartphone"  >СМАРТФОНЫ</Button>
            </NavItem>
            <NavItem>
              <Button  value="pads" >ПЛАНШЕТЫ</Button>
            </NavItem>
            <NavItem>
              <Button value="notebooks">НОУТБУКИ</Button>
            </NavItem>
            <NavItem>
              <Button value="smartwatches">СМАРТ-ЧАСЫ</Button>
            </NavItem>
            <NavItem>
              <Button value="headphones">НАУШНИКИ</Button>
            </NavItem>
            <NavItem>
              <Button value="accessories">АКСЕССУАРЫ</Button>
            </NavItem>
            <NavItem>
              <Button value="technique">ТЕХНИКА</Button>
            </NavItem>

            </Nav>
          </Container>



          {/* <div className="container">
            <div className="row">
              {this.state.pageOfItems.map(product => (
                <Product product={product} key={product.id} />
              ))}
              <Pagination items={products} onChangePage={this.onChangePage} />
            </div>
          </div> */}




<Container>
          <Row>
          <Col xs="2">
           filter
       
            </Col>
          <Col xs="10">
            <Row>
            
              {/* {this.state.pageOfItems.map(product => (
               
                  <Product product={product} key={product.id}  />
              
              ))} */}
    
   { this.state.pickedCategory ==='smartphone' ? this.getFilteredProducts()
         :this.state.pickedCategory ==='pads' ?  this.getFilteredProducts()
         :this.state.pickedCategory ==='notebooks' ? this.getFilteredProducts()
        
         :this.state.pickedCategory ==='smartwatches' ? this.getFilteredProducts()
         :this.state.pickedCategory ==='headphones' ?  this.getFilteredProducts()
         :this.state.pickedCategory === 'accessories' ? this.getFilteredProducts()
         :this.state.pickedCategory ==='technique' ?  this.getFilteredProducts()

         
         : "Other"
       }
            
              <Pagination items={products} onChangePage={this.onChangePage} />
              
          </Row>
          </Col>
          </Row>
          </Container>
        </>
      )
    } else {
      return <Spinner />;
    }
  }
}

Products.propTypes = {
  firestore: PropTypes.object.isRequired,
  products: PropTypes.array
};

const mapStateToProps = (state) => ({
  products: state.firestore.ordered.products
});

// console.log('this is map state to props',mapStateToProps)


export default compose(
  firestoreConnect(props => [
    {
      collection: 'products',
      orderBy: props.sort
    }
  ]),
  connect(mapStateToProps)
)(Products);
