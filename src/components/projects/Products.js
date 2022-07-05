import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Product from "./Product";
import Pagination from "./Pagination";
import Spinner from "../layout/Spinner";
import { Container, Row, Col } from "reactstrap";

import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Text,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Products extends Component {
  state = {
    products: [],
    pageOfItems: [],
    checked:false,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.products });
  }

  onChangePage = (pageOfItems) => this.setState({ pageOfItems: pageOfItems });

  selectCategory = (e, props, state) => {
    console.log(e.target.value);

    this.setState({ pickedCategory: [] });
    this.setState({ pickedCategory: e.target.value });

    // this.setState({
    //   pickedCategory: ''
    // });
  };

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
    this.state.newArray = [];
    const filter = this.props.filter;
    // console.log(this.state.pageOfItems)
    // console.log('------------------------------------------')
    // console.log('вывод ',(this.state.pageOfItems))
    // console.log('------------------------------------------')
    const filteredProducts = this.state.pageOfItems.map((obj) => {
      const filtered = Object.values(obj.Category.value);
      let concatedArray = [];
      let buffer = "";
      // console.log('Filtered до цикла  ', filtered)
      buffer = filtered.join("");
      concatedArray.push(buffer, obj);
      // console.log('buffer ',buffer)
      // console.log('obj',obj)
      console.log("3 pickedCategory is ", pickedCategory);
      if (buffer === this.state.pickedCategory.toString()) {
        this.state.newArray.push(concatedArray[1]);
        console.log("4 NewArray -  ", this.state.newArray);
      }
      // if (newArray.length === 0) return <p>Выберите категорию товара</p>;
    });

    return (
      <>
        {this.state.newArray.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </>
    );
  }

  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked });

  render() {

    const Checkbox = (props) => <input type="checkbox" {...props} />;

    const { products } = this.state;


    if (products.length > 0) {
      return (
        <>
          <Container style={{ "padding-left": "0px" }}>
            <br />
            <Nav onClick={this.selectCategory}>
              <NavItem>
                <Button value="smartphone" color="secondary" size="sm">
                  СМАРТФОНЫ
                </Button>{" "}
              </NavItem>

              <NavItem>
                <Button value="pads" color="secondary" size="sm">
                  ПЛАНШЕТЫ
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="notebooks" color="secondary" size="sm">
                  НОУТБУКИ
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="smartwatches" color="secondary" size="sm">
                  СМАРТ-ЧАСЫ
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="headphones" color="secondary" size="sm">
                  НАУШНИКИ
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="accessories" color="secondary" size="sm">
                  АКСЕССУАРЫ
                </Button>{" "}
              </NavItem>
              <NavItem>
                <Button value="technique" color="secondary" size="sm">
                  ТЕХНИКА
                </Button>
              </NavItem>
              <NavItem></NavItem>
            </Nav>
          </Container>{" "}
          <br />
          <Container>
            <Row >
              <Col xs="2" >
                <div className="verticleLine" >
                
                  <span>Цена</span>
                  <br />  
                  <label>
                    <Checkbox
                      checked={this.state.checked}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>50 000 - 99 999 Т</span>
                  </label>

                  <br />
                </div>
              </Col>
              <Col xs="10">
                <Row>
                  {/* {this.state.pageOfItems.map(product => (
            
                <Product product={product} key={product.id}  />

            ))} */}

                  {this.state.pickedCategory === "smartphone" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "pads" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "notebooks" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "smartwatches" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "headphones" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "accessories" ? (
                    this.getFilteredProducts()
                  ) : this.state.pickedCategory === "technique" ? (
                    this.getFilteredProducts()
                  ) : (
                    <h1>
                      <img
                        style={{ width: "70rem" }}
                        src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/01/the-best-smartphones-in-the-2000-2500-tl-price-range-january-2022-G7EzkPc6.jpg?fit=1280%2C720&ssl=1"
                      />
                    </h1>
                  )}

                  <Pagination
                    items={products}
                    onChangePage={this.onChangePage}
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      return <Spinner />;
    }
  }
}

Products.propTypes = {
  firestore: PropTypes.object.isRequired,
  products: PropTypes.array,
};

const mapStateToProps = (state) => ({
  products: state.firestore.ordered.products,
});

// console.log('this is map state to props',mapStateToProps)

export default compose(
  firestoreConnect((props) => [
    {
      collection: "products",
      orderBy: props.sort,
    },
  ]),
  connect(mapStateToProps)
)(Products);
