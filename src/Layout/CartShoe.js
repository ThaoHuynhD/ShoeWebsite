import React, { Component } from "react";
import { connect } from "react-redux";
import { UPDATE_QUANTITY, LOWER_NUMBER, RAISE_NUMBER, REMOVE_ITEM } from "./constant/constant";
class CartShoe extends Component {
  renderCart = () => {
    let { cart } = this.props;

    return cart.map((item, index) => {
      let { name, price, image, soLuong, id } = item;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <img width={100} src={image} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleUpdateQuantity(id, LOWER_NUMBER);
              }}
              className="btn btn-dark"
            >
              -
            </button>

            <strong className="mx-3">{soLuong}</strong>
            <button
              onClick={() => {
                this.props.handleUpdateQuantity(id, RAISE_NUMBER);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Pice</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </thead>
          <tbody>{this.renderCart()}</tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return { cart: state.shoeReducer.cart };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateQuantity: (id, option) => {
      let action = {
        type: UPDATE_QUANTITY,
        payload: {
          id,
          option,
        },
      };
      dispatch(action);
    },
    handleRemove: (id) => {
      let action = {
        type: REMOVE_ITEM,
        payload: {
          id,
        },
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
