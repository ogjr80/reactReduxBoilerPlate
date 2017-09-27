import React, {Component} from 'react';


class Product extends Component{
  render(){
    return(

        <div>
          <h3>{this.props.id}</h3>
          <h4>{this.props.name}</h4>
          <h5>{this.props.address}</h5>
        </div>
    )
  }
}

export default Product;
