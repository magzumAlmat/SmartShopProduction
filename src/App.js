import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import EditProject from './components/projects/EditProject'
import Profile from './components/profile/Profile'
// import ProjectListWithoutAuth from './components/projects/ProjectListWithoutAuth';
// import Product from './components/projects/Product';
import Products from './components/projects/Products';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Cart from './components/cart/Cart';
import CreateProduct from './components/projects/CreateProduct';
import CreateOrder from './components/layout/CreateOrder';
import showOrders from './components/projects/showOrders';
var selectedTab;
class App extends Component {
  render() { 
    return (  
      <BrowserRouter>
        <div className="App">
        <header className="header">
              <Navbar />
            
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/createproduct' component={CreateProduct} />
            <Route path='/project/:id/edit' component={EditProject} />
            <Route path='/profile' component={Profile} />
            <Route path='/products' component={Products} />
            <Route path='/cart' component={Cart} curTab={selectedTab}/>
            <Route path='/createorder' component={CreateOrder} />
            <Route path='/showorders' component={showOrders} />
            
          </Switch>
       
          </header>
          <Cart/>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default App;
