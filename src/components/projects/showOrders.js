
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'; 
import Pagination from './Pagination';
import Spinner from '../layout/Spinner';
import moment from 'moment';
import {Table} from 'reactstrap'


class showOrders extends React.Component {
    state = {
      orders: [],
      pageOfItems: []
    };
  
    componentWillReceiveProps(nextProps) {
      this.setState({ orders: nextProps.orders });
    }
  
    onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });
  
    render() {
      const { orders } = this.state;
      console.log('orders from show orders',orders)
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/products' />
      if (orders.length > 0) {
        return (
            <div className="project-list section">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
               
                  <th>Order</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Comment</th>
                  <th>Total Price</th>
                  <th>Pay option</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
               
                 
             
                {this.state.pageOfItems.map((product, index) => (
                     
                     <tr>
                        <td>
                             {product.order.map(item=>(
                           <h6>
                              
                                {/* <img src={item.picture} /> */}
                                <p>|Наименование - {item.name } | Цена - {item.price} | Кол-во - {item.qty}| TOTAL PRICE - {Number(item.qty*item.price)} </p>
                               
                                    
                            </h6>

                                 ))}
                        </td>
                        {/* <img src={product.order.cartItems.picture} key={picture}/>
                        
                        <p key={name} >{product.order.cartItems }</p>
                        <p key={price} >{product.order.cartItems}</p>
                        <span key={index} >{product.order.cartItems.qty}</span> */}
                         <td>{product.name}</td>
                         <td>{product.phone}</td>
                         <td>{product.adress}</td>
                         <td>{product.comment}</td>
                         <td>{product.totalPr}</td>
                         <td>{product.pay.label}</td>

                         
                         
                       
                         <td >{ moment(product.createdAt.toDate()).calendar() }</td>
                     
                     
                    
                
                 </tr>
                ))}
             
         
              
               
             
              </tbody>
              <Pagination items={orders} onChangePage={this.onChangePage} />
            </Table>
        
          </div>
        );
      } else {
        return <Spinner />;
      }
    }
  }
  
  showOrders.propTypes = {
    firestore: PropTypes.object.isRequired,
    orders: PropTypes.array
  };


  

const mapStateToProps = (state) => ({
    orders: state.firestore.ordered.orders,
    auth:state.firebase.auth
  });
  
  // console.log('this is map state to props',mapStateToProps)
  
  
  export default compose(
    firestoreConnect(props => [
      {
        collection: 'orders',
        orderBy: props.sort
      }
    ]),
    connect(mapStateToProps)
  )(showOrders);
  