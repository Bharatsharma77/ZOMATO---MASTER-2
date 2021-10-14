import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

  const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/2/19618832/387508b5afe1fd212210e74c30eec8bd.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "Somosa Party",
      cuisine: ["Street Food", "Beverages", "Tea"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 80,
      restaurantReviewValue: 4.1,
    },

    {
      _id: "123456-2",
      photos: [
        "https://b.zmtcdn.com/data/pictures/8/19089758/79442511f33f8a276dca541906f18cd1.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "Bikkgane Biryani",
      cuisine: ["Biryani", "North Indian", "Andhra", "Kebab"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 80,
      restaurantReviewValue: 4.1,
    },

    {
      _id: "123456-3",
      photos: [
        "https://b.zmtcdn.com/data/pictures/8/19089758/79442511f33f8a276dca541906f18cd1.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "Bikkgane Biryani",
      cuisine: ["Biryani", "North Indian", "Andhra", "Kebab"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 80,
      restaurantReviewValue: 4.1,
    },

  ]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect(() => {
    setRestaurantList(reduxState.restaurants);
  }, [reduxState.restaurants]);

  return (
    <>
      <DeliveryCarousal />
      {/* <Brand /> */}
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in Vijay Nagar
       </h1>
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            {...restaurant}
            key={restaurant._id}
            whereIsthisres="asf"
          />
        ))}
      </div>
    </>
  );
};

export default Delivery;