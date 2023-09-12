import { ADD_TO_CART, UPDATE_QUANTITY, VIEW_DETAIL, RAISE_NUMBER, LOWER_NUMBER, REMOVE_ITEM } from "../constant/constant";
import { shoeArr } from "../data";

const initialState = {
  shoeArr: shoeArr,
  cart: [],
  detail: shoeArr[0],
};

export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_DETAIL: {
      state.detail = payload;
      return { ...state };
    }
    case ADD_TO_CART: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id === payload.id;
      });
      if (index === -1) {
        let newShoe = { ...payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].soLuong++;
      }
      return { ...state, cart: cloneCart };
    }
    case REMOVE_ITEM: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id === payload.id;
      });
      cloneCart.splice(index, 1);
      return { ...state, cart: cloneCart };
    }

    case UPDATE_QUANTITY: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id === payload.id;
      });
      payload.option === RAISE_NUMBER && cloneCart[index].soLuong++;
      payload.option === LOWER_NUMBER && cloneCart[index].soLuong--;
      if (cloneCart[index].soLuong === 0) {
        cloneCart.splice(index, 1);
      }
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
