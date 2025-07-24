// add to wishlist
export const addToWishlist = (data) => async (dispatch, getState) => {
  dispatch({
    type: "addToWishlist",
    payload: data,
  });

  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlist)
  );
  return data;
};

// remove from wishlist
export const removeFromwWishlist = (data) => async (dispatch, getState) => {
  dispatch({
    type: "removeFromWishlist",
    payload: data._id,
  });

  localStorage.setItem("wishlistItems", JSON.stringify(getState().cart.cart));
  return data;
};
