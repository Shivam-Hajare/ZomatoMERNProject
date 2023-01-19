import React from 'react';
import Slider from 'react-slick';
import { NextArrowB,  PrevArrowB } from '../Carousal/CarousalArrows';

const Brand = (props) => {
    const logos = [
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/5bfbd8dfec807f55def6257118c7bf67_1600755551.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/852ecb32ce69b6a3dd2e7ed9ec2f5dc5_1583320249.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/878a69aaa88728f7073d1e3d13a5a047_1628324346.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155163.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/78b776a93a1f8ed32dc0c876cf1ff743_1493958296.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/e58364e86ce96c4b9c798bc25c8a7c42_1629952929.png?output-format=webp",
    ];
    const settings ={
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        SliderToScroll: 1,
        nextArrow: <NextArrowB />,
        prevArrow: <PrevArrowB />
    };
    const settingsSm ={
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        SliderToScroll: 1,
        autoplay: true,
    };
    return (
        <>
        <div className="my-5 lg:py-6 lg:px-24 w-6/5 mb-40">
        <div className="lg:text-3xl md:text-2xl text-xl text-gray-800 md:py-5 px-5 lg:py-6">Top Brands for you</div>
            <div className="lg:hidden mx-5 overflow-x-auto">
            <Slider {...settingsSm}>
            {logos.map((logo) => (
                     <div className="h-28 w-0 rounded-md bg-white">
                     <img src={logo} alt="brand" className="w-full h-full object-center"/>
                     </div>
                ))}
            </Slider>
            </div>
           <div className="hidden lg:block">
               <Slider {...settings}>
                {logos.map((logo) => (
                     <div className="h-24 w-6 mx-5 rounded-md px-4 bg-white">
                     <img src={logo} alt="brand" className="w-full h-full"/>
                     </div>
                ))}
            </Slider>
        </div>
        </div>
           </>
    );
};

export default Brand;