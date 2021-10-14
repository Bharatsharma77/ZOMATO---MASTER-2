import React, { useEffect } from "react";
import { useParams} from "react-router-dom";
import { useDispatch } from "react-router";

// Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

// redux action
//import { getCart } from "../Redux/Reducer/Cart/Cart.action";
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const HomeLayout = (props) => {
  const dispatch = useDispatch();

useEffect(()=> {
  dispatch(getRestaurant());
}, []
);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>
      <FoodTab />
     
    </>
  );
};

export default HomeLayout;