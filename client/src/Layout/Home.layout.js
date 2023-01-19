import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
//Components
import Navbar from "../Components/Navbar/index";
import FoodTab from "../Components/FoodTab/index";

// redux action
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const HomeLayout = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
}, []);

    return (
        <>
        <div className="container mx-auto lg:px-28">
        <Navbar />
        <FoodTab />
         {props.children}
        </div>
        </>
    )
};

export default HomeLayout;
