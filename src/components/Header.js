import React, {Component} from 'react';
import {withRoute} from 'react-router-dom';

class Header extends Component{
  render(){
      return(
        <nav className="navbar navbar-inverse">
          <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
              <li><a href="sass.html">Login</a></li>
              <li><a href="signup.html">SignUp</a></li>
              <li><a href="/productList">Products</a></li>
              </ul>
            </div>
        </div>
</nav>
      )
  }
}
export default Header;
