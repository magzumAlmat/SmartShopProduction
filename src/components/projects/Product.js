import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cartActions';
// import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { showCart } from '../../store/actions/cartActions';
import PropTypes from 'prop-types';

import {Col} from 'reactstrap'
import { Card, CardImg, CardText, CardBody,CardLink,
  CardTitle, CardSubtitle, Button,Row } from 'reactstrap';
const styles = theme => ({
  // close: {
  //   width: theme.spacing.unit * 4,
  //   height: theme.spacing.unit * 4
  // }
});

class Product extends Component {
  state = {
    open: false
  };
  
  addClick = product => {
    this.setState({ open: true });
    const { addItem } = this.props;
    addItem(product);
    // console.log('product from addClick 111111111111111111',product)
    // console.log('item from addClick 111111111111111111',addItem)
    const { showCart } = this.props;
    console.log('after button clicked to that ------',showCart)
    showCart(product);
    
 
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleRedirect = product => {
    console.log('id of product',product.id)
    const {addID}=this.props
    // addID(product)
    // console.log('id from props',addID)

    //this.props.history.push(`/product/${id}`)
    
    // console.log('product from addClick 111111111111111111',product)
    // console.log('item from addClick 111111111111111111',addItem)
  };

  

  render() {
    const { product } = this.props;
    const { classes } = this.props;
    // console.log('categorys',product.Category.value)
    
 
    return (
   
      <>
           
        
{/*      
        <div className="card">
          <img
            className="card-img-top img-fluid "
            src={product.url}
            alt={product.name}
           
          />
          <div className="card-body">
            <p>{product.Category.value}</p>
            <h6 className="card-title">{product.name}</h6>
            <p className="price">{product.price} T</p>
            
            <div className="text-center">
              <button
                className="btn-custom"
                onClick={this.addClick.bind(this, product)}>
                Add to cart
              </button>
             
           
              <Link to={
                { 
                    pathname: "/product/" + this.props.product.Id,
                    myCustomProps: product
                }
            }>
                   <button>  Подробнее </button>
            </Link>
            </div>
          </div>
        </div>
 */}


         
          <Col xs="3">



        <Card>
        {/* {product} */}
          <CardImg top
          style={{'width':'14rem','margin-top':'1rem'}}
            className="card-img-top img-fluid "
            src={product.url}
            alt={product.name}
           
          />
          <hr/>
          <CardBody>
          <CardTitle>{product.Category.value}</CardTitle>
          <CardSubtitle>{product.name}</CardSubtitle>
          <CardText className="price">{product.price} T</CardText>

                   
            <CardText className="text-center">
             

            </CardText>
            <Button
                className="btn-custom"
                onClick={this.addClick.bind(this, product)}>
                В корзину
              </Button>
             
            

              <Link to={
                { 
                    pathname: "/product/" + this.props.product.Id,
                    myCustomProps: product
                }
            }>
                   <Button  className="btn-custom">  Подробнее </Button>
            </Link>

          </CardBody>
        </Card>








      </Col>


      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Item added!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </>

    );
  }
}


Product.propTypes = {
  showCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});



export default connect(
  mapStateToProps,
  { addItem,showCart }
)(withStyles(styles)(Product));