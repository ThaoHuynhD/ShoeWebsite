import React, { Component } from "react";
import CartShoe from "./CartShoe";
import DetailShoe from "./DetailShoe";
import ProductList from "./ProductList";

export default class ShoeRedux extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <ProductList />
          <CartShoe />
        </div>
        <DetailShoe />
      </div>
    );
  }
}

