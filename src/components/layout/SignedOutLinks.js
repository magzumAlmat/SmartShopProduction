import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
             <li>
                <NavLink to="/">PRODUCTS</NavLink>
            </li>
            <li>
                <NavLink to="/signup">SIGN UP</NavLink>
            </li>
            <li>
                <NavLink to="/signin">LOGIN</NavLink>
            </li>
            {/* <li>
                <NavLink to="/"> Projects</NavLink>
            </li> */}
           
        </ul>
    );
}

export default SignedOutLinks;