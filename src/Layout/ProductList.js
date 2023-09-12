import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { connect } from "react-redux";
class ProductList extends Component {
    renderList = () => {
        return this.props.shoeArr.map((item, index) => {
            return <ProductItem item={item} key={index} />
        })
    }
    render() {
        return <div className="col-6 row">{this.renderList()}</div>;
    }
}
let mapStateToProps = (state) => {
    return {
        shoeArr: state.shoeReducer.shoeArr,
    };
};
export default connect(mapStateToProps)(ProductList);