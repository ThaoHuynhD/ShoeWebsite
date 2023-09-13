import React, { Component } from 'react'
import { connect } from "react-redux";
import { ADD_TO_CART, VIEW_DETAIL } from './constant/constant';
class ProductItem extends Component {
    render() {
        let { image, name, price } = this.props.item;

        return (
            <div className='col-6 col-lg-3'>
                <div className="card text-center">
                    <div className="card-body" onClick={() => {
                        this.props.handleViewDetail(this.props.item);
                    }}
                        data-toggle="modal" data-target="#exampleModal"
                    >
                        <img className="card-img-top" src={image} alt="" />
                        <small className="name">{name}</small>
                        <p className="price">{price}$</p>

                    </div>
                    <button
                        onClick={() => {
                            this.props.handleAddShoe(this.props.item);
                        }}
                        className="btn btn-dark"
                    >
                        Add to Cart
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleViewDetail: (shoe) => {
            let action = {
                type: VIEW_DETAIL,
                payload: shoe,
            };
            dispatch(action);
        },
        handleAddShoe: (shoe) => {
            let action = {
                type: ADD_TO_CART,
                payload: shoe,
            };
            dispatch(action);
        },
    };
};
export default connect(null, mapDispatchToProps)(ProductItem);
