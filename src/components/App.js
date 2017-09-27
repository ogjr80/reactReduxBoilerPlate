import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import ProductList from './ProductList';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';




class App extends Component{
  componentDidMount() {
  this.props.fetchData();
}
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path='/productList' component={ProductList} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App);
