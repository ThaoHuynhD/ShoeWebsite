import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
  render() {
    let { image, name,description,price } = this.props.detail;
    return (
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Shoe Details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h3>{name}</h3>
              <h2>{price}$</h2>
              <img src={image} alt="" />
              <p>{description}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
