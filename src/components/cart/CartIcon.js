import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCart, updatePrice } from '../../store/actions/cartActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class CartIcon extends Component {
  showCart = () => {
    const { showCart } = this.props;
    showCart();
  
  };


  render() {
    const { cartItems, totalPrice } = this.props.cart;
    return (
      <div className="cart-icon ml-auto">
        <button type="button" onClick={this.showCart}>
          <i className="fas fa-shopping-cart" />
          <span className="badge badge-primary">
            {cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
          </span>
          <span className="sr-only">products</span>
        </button>
        <p>{totalPrice} T</p>
      </div>
    );
  }
}


CartIcon.propTypes = {
  showCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { showCart, updatePrice }
)(CartIcon);
