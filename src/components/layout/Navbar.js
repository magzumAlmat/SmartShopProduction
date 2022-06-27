import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import CartIcon from '../cart/CartIcon'
import Cart from '../cart/Cart';
import { useHistory } from "react-router-dom";
import {
    Collapse,
  
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

// import Cart from '../cart/Cart'


const Navbar = (props) => {
    // console.log('this is cardItem from navbar',props);
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <>
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className="brand-logo"></Link>
               
                {/* <CartIcon/> */}
                {links}  
                
                <CartIcon />
              
               
                
                

                
                            

            </div>
           
        </nav>

       
    
        </>
            
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        cart:state.cart
    }
}

export default connect(mapStateToProps)(Navbar);