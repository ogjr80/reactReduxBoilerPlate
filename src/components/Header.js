import React, {Component} from 'react';
import {withRoute} from 'react-router-dom';

class Header extends Component{
  render(){

      return(
        <nav>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo" style={{marginLeft: '10px'}}>Logo</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="sass.html">Login</a></li>
             <li><a href="signup.html">SignUp</a></li>
             <li><a href="/productList">Products</a></li>
           </ul>
         </div>
        </nav>
      )
  }
}
export default Header;
