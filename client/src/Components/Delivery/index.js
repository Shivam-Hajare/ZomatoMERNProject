import React, {useState,useEffect} from 'react'
import { useSelector } from 'react-redux';

//components
import DeliveryCarousal from './DeliveryCorousal'
import Brand from './Brand';
// import RestaurantCard from '../RestaurantCard';

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([]);

      const reduxState = useSelector(
          (globalStore) => globalStore.restaurant.restaurants);

    useEffect(() => {
    reduxState?.restaurants &&  setRestaurantList(reduxState?.restaurants);
    },[reduxState?.restaurants])
    console.log({restaurantList});
    return (
        <>
        <DeliveryCarousal/>
        <Brand />
        {/* <div className="text-gray-800 font-semibold text-2xl my-5">Delivery Restaurants Near Your Presence</div>
        <div className="flex justify-between flex-wrap">
            {restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant} key={restaurant._id}/>
            ))}
        </div> */}
        </>
    );
};

export default Delivery;
