import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import {withRouter} from 'react-router-dom';

class ProductList extends Component{
  render(){
    const Productsearch =
      this.props.auth.map((product) =>
        <Product
        key = {product.id}
        id={product.id}
        name={product.name}
        address = {product.address}
        />
    )
    const backToHome = () => {
           this.props.history.push('/');
    }
    return(
      <div>
        <h1>Product List</h1>
        {Productsearch}
        <button className="btn" onClick={backToHome.bind()}>Back to Home</button>
      </div>
    )
  }
}

function mapStateToProps({auth}){
  return {auth}
}
export default connect(mapStateToProps)(ProductList);
