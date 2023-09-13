import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
  render() {
    let { image, name,description,price } = this.props.detail;
    return (
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Shoe Details</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <h3>{name}</h3>
        <h2>{price}$</h2>
        <img src={image} alt="" />
        <p>{description}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    );
  }
}
let mapStateToProps = (state) => {
  return {
    detail: state.shoeReducer.detail,
  };
};
export default connect(mapStateToProps)(DetailShoe);
