import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePrice } from '../../store/actions/cartActions';

import PassOrder from './PassOrder';
import {closeCart} from './Cart';


class TotalAmount extends Component {
  // handleSubmit(props){
  //   // console.log('Button clicked')
  //   console.log('Вот это все на данный момент в корзине',this.props.price)
  //   console.log('Сумма = ',this.props.price*this.props.qty)
    

  // }

 
   
    //(document).getElementsByClassName('cart-inside active').addClass('');
  
  render() {
    const {prod}=this.props
    const { totalPrice } = this.props.cart;
   
    return (
      <div className="total-amount">
        <p>
          <strong>Delivery</strong>
          <span>Free</span>
        </p>
        <p>
          <strong>Total</strong>
          {totalPrice} Т
        </p>
        <div className="text-center">
         

          
        </div>
      
        <div>
      {/* <h1>111111111111111{console.log(prod)}</h1>
      <h1>2222222222222{console.log(this.props.cart)}</h1> */}
      {/* {this.props.cart
          .map(t => <span>{t}</span>)
          .reduce((prev, curr) => [prev, ', ', curr])}
       
        */}
       
       
          {/* {console.log(prod)}
          <p>Сумма {totalPrice}</p> */}
        </div>
      
      
      
    
      <PassOrder prod={this.props.cart}  />
      {/* <button onClick={closeCart()}>close</button>
           */}
    
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { updatePrice }
)(TotalAmount);
