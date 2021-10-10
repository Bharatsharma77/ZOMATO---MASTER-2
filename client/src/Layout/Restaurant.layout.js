import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";


// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import InfoButtons from "../Components/restaurant/InfoButtons";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
const RestaurantLayout = () => {
    return (
        <>
        {" "}
        <RestaurantNavbar />
     <div className="container mx-auto px-4 lg:px-20">
           <ImageGrid 
            images={[
                "https://b.zmtcdn.com/data/pictures/chains/3/17953943/6a5fad222f652d370afef69a765c0a09_featured_v2.jpg?output-format=web",
                "https://b.zmtcdn.com/data/pictures/chains/3/17953943/6a5fad222f652d370afef69a765c0a09_featured_v2.jpg?output-format=web",
                "https://b.zmtcdn.com/data/pictures/chains/3/17953943/6a5fad222f652d370afef69a765c0a09_featured_v2.jpg?output-format=web",
                "https://b.zmtcdn.com/data/pictures/chains/3/17953943/6a5fad222f652d370afef69a765c0a09_featured_v2.jpg?output-format=web",
                "https://b.zmtcdn.com/data/pictures/chains/3/17953943/6a5fad222f652d370afef69a765c0a09_featured_v2.jpg?output-format=web",
            ]}
            />
           <RestaurantInfo
           name="The Burger Club"
           restaurantRating="4.3"
           deliveryRating="4.1"
           cuisine="Burger, Fast Food, Beverages"
           address="Delhi University-GTB Nagar, New Delhi"

           />
            <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
    </div>


</>
    );
};

export default RestaurantLayout;