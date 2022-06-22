import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem, addItem, decrement } from '../../store/actions/cartActions';

// export class passCart extends React.Component{
//   render(){
//     const { item } = this.props;
//     console.log('Вот это все на данный момент в корзине',item)
//     const summ=(item.price * Number(item.qty)).toFixed(2)
//     console.log('Сумма = ',summ )
//       return (
//           <h1>{summ}</h1>
//       )
//    }
// }

class CartItem extends Component {
  onClick = id => {
    const { deleteItem } = this.props;
    deleteItem(id);
  };

  increment = () => {
    const { addItem } = this.props;
    addItem(this.props.item);
  };

  decrement = id => {
    const { item } = this.props;
    if (item.qty > 1) {
      const { decrement } = this.props;
      decrement(this.props.item);
    } else {
      const { deleteItem } = this.props;
      deleteItem(id);
    }
  };

 
  // passCart(item){
  //   console.log('Вот это все на данный момент в корзине',item)
  //   const summ=(item.price * Number(item.qty)).toFixed(2)
  //   console.log('Сумма = ',summ )
  // }


  render() {
    const { item } = this.props;
    // console.log('CartITEM PROPS',item)
   
    return (<>
      <React.Fragment>
        <div className="img-wrapper">
         
          <img className="img-fluid" src={item.picture} alt={item.name} />
        </div>
        <h4 className="name">{item.name}</h4>
        <div className="quantity">
          <p>
            Quantity:{' '}
            <button
              className="btn subtract"
              onClick={this.decrement.bind(this, item.id)}
            >
              -
            </button>
            {item.qty}
            
            <button className="btn add" onClick={this.increment.bind(this)}>
              +    
            </button>  

          </p>
        </div>
        <small className="price">{(item.price * Number(item.qty)).toFixed(2)} T</small>
        <button
          type="button"
          className="close"
          onClick={this.onClick.bind(this, item.id)}
        >
          &#xd7;    
         
        </button>
        
        


      </React.Fragment>
     
      </>
      
    );
  }
}

export default connect(
  null,
  { deleteItem, addItem, decrement}
)(CartItem);



