import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./Images/Images.reducer";
import reviews from "./Reviews/Reviews.reducer";
import user from "./User/User.reducer";
import food from "./Food/Food.reducer";
import cart from "./Cart/Cart.reducer";
import order from "./Order/Order.reducer";

const rootReducer = combineReducers({
  restaurant,
  image,
  reviews,
  user,
  food,
  cart,
  order,
});

export default rootReducer;