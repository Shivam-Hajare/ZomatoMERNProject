import React from 'react';
import Slider from 'react-slick';

//Icons
import { RiSearchLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

//Components
import DeliveryFoodCategory from './DeliveryFoodCategory'
import { NextArrow,PrevArrow } from '../Carousal/CarousalArrows';


const categories = [
{
    image:"https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
    title: "Biriyani",
},
{
   image: "https://b.zmtcdn.com/data/pictures/chains/0/18260780/a0f1e5364c8b52b02bf0df7df7022539_featured_v2.jpg",
   title: "Benne Dosa",
},
{
    image: "https://b.zmtcdn.com/data/pictures/2/19107622/5794d9e96f11ad3144ab8cd795b3b290_featured_v2.jpg",
    title: "La  Alta Vita",
},
{
    image: "https://b.zmtcdn.com/data/pictures/2/18453992/434b8d2addbc8c389958f67def516c2e_featured_v2.jpg",
    title: "Sea Food",
},
{
    image: "https://b.zmtcdn.com/data/pictures/8/18590338/017be29970cc02a6a50a06d9a369566c_featured_v2.jpg",
    title: "Toasties",
},
{
    image: "https://b.zmtcdn.com/data/pictures/4/19351014/05fba2ac02b3737335d0dffff265eb5b_featured_v2.jpg",
    title: "Pizzas",
},
{
    image: "https://b.zmtcdn.com/data/pictures/3/18308793/dda0a8d19448adf672c0905f68c1afb2_featured_v2.jpg",
    title: "Curry Roti",
},
];
const settings = {
arrows: true,
infinite: true,
speed: 500,
slidesToShow: 4,
slidesToScroll: 1,
nextArrow:<NextArrow/>,
prevArrow:<PrevArrow/>,
};

const DeliverySm = () => {
    return(
        <>
            <div className="flex items-center justify-between border-b-2 pb-2 border-gray-100">
                <div className="flex gap-1 text-gray-500 px-2">
                    <span className="h-6 w-6 text-zomato-300"><MdLocationOn className="w-full h-full" /></span>
                    <input type="text" placeholder="Nagpur" className="outline-none"/>
                </div>
                <div className="h-10 w-10 text-gray-600 bg-gray-50 border-2 border-gray-100 flex items-center justify-center rounded-full">
                    <RiSearchLine className="w-5 h-5"/>
                </div>
            </div>
           <h1 className="text-xl md:text-2xl text-gray-800 m-3 md:ml-4">Inspiration for your first order</h1>
           <div className="flex flex-wrap justify-evenly gap-1 mb-5">
           {categories.map((food) => (<DeliveryFoodCategory {...food}/>))}
           </div>
        <div className="lg:hidden">
               <img 
               className="w-full h-full rounded-lg"
               src="https://b.zmtcdn.com/web/assets/8d13109e07c5d49d54427f044d7b7d281620042855.png?output-format=webp"
               alt="ads"
               />
        </div>
        </>
    )
}

const DeliveryLg = () => {
    return(
        <>
        <div className="py-6 px-24 w-6/5">
           <h1 className="text-3xl text-gray-800 font p-4 px-0 py-6">Inspiration for your first order</h1>
           <div>
           <Slider {...settings}>
                   {categories.map((food) => (
                       <DeliveryFoodCategory {...food}/>
                   ))}
            </Slider>
           </div>
        </div>
        </> 
    )
}

const DeliveryCorousal = () => {
    return (
        <>
        <div className="lg:hidden">
         <DeliverySm />
        </div>
        <div className="hidden lg:block">
         <DeliveryLg />
        </div>
        </>
    )
};

export default DeliveryCorousal;
