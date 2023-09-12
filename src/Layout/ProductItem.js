import React, { Component } from 'react'
import { connect } from "react-redux";
import { ADD_TO_CART, VIEW_DETAIL } from './constant/constant';
class ProductItem extends Component {
    render() {
        let { image, name } = this.props.item;

        return (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <div className="card text-center">
                    <img className="card-img-top" src={image} alt="" />
                    <div className="card-body">
                        <small className="name">{name}</small>
                        <p className="card-text">
                            <button
                                onClick={() => {
                                    this.props.handleAddShoe(this.props.item);
                                }}
                                class="btn btn-primary mr-2"
                            >
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    this.props.handleViewDetail(this.props.item);
                                }}
                                class="btn btn-info" data-toggle="modal" data-target="#exampleModal"
                            >
                                View
                            </button>
                        </p>
                    </div>
                </div></div>
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
