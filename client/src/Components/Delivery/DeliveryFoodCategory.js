import React from 'react'

const DeliverySmCard = ({image,title}) => {
    return(
        <>
        <div className="bg-transparent rounded-md shadow lg:mb-4 md:w-56">
                <div className='w-24 h-24 md:w-full'>
                    <img
                    src={image}
                    alt="food"
                    className="w-full h-full object-cover rounded-t-md"
                    />
                </div>
                <div>
                    <h3 className="my-1 text-sm text-center font-light mx-4">{title}</h3>
                </div>
             </div>
        </>
    )
}

const DeliveryLgCard = ({image,title}) => {
    return(
        <>
        <div className="bg-transparent mb-4 flex flex-wrap gap-1 w-60 h-52">
                <div className='w-72 h-48'>
                    <img
                    src={image}
                    alt="food"
                    className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div>
                    <h3 className="text-gray-600 font-medium text-xl">{title}</h3>
                </div>
             </div>
        </>
    )
}

const DeliveryFoodCategory = (props) => {
    return (
        <>
        <div className="lg:hidden">
             <DeliverySmCard {...props} />
        </div>
        <div className="hidden lg:block">
             <DeliveryLgCard {...props}/>
        </div>
        </>
    )
}

export default DeliveryFoodCategory;
