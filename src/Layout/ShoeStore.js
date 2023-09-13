import React, { Component } from "react";
import CartShoe from "./CartShoe";
import DetailShoe from "./DetailShoe";
import ProductList from "./ProductList";

export default class ShoeStore extends Component {
  state = {
    displayComponent: 'ProductList', 
  };

  showProductList = () => {
    this.setState({ displayComponent: 'ProductList' });
  };

  showCart = () => {
    this.setState({ displayComponent: 'CartShoe' });
  };

  render() {
    const { displayComponent } = this.state;

    return (
      <div className="row">
        <h1>SHOE SHOP</h1>
        <div className='col-3'>
          <div className="taskbar">
            <button className='btn btn-light' onClick={this.showProductList}>Home</button>
            <button className='btn btn-light' onClick={this.showCart}>Cart</button>
          </div>
        </div>
        <div className='col-9'>
          <div className="container mainlist">
            {displayComponent === 'ProductList' && <ProductList />}
            {displayComponent === 'CartShoe' && <CartShoe />}
            <DetailShoe />
          </div>
        </div>
      </div>
    );
  }
}
