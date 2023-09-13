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
        return <div id="productList">
            <h2 className='text-center'>ProductList</h2>
            <div className="row">
                {this.renderList()}</div></div>;
    }
}
let mapStateToProps = (state) => {
    return {
        shoeArr: state.shoeReducer.shoeArr,
    };
};
export default connect(mapStateToProps)(ProductList);