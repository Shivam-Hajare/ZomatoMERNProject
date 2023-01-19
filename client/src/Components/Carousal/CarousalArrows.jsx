import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

export const PrevArrow = (props) => {
  return (
    <>
      <div
      className="border-2 border-red-100 shadow-lg"
        style={{
          ...props.style,
          fontSize: "20px", display: 'block', left:"-15px", top: "90px",zIndex:"15", height:"30px", width:"30px", opacity:"0.9", color:"black", backgroundColor:"white", position:"absolute", borderRadius: "50%", padding:"5px", paddingTop:"3px", paddingLeft:"3px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowBack"><IoIosArrowBack/></span>
      </div>
    </>
  );
};

export const NextArrow = (props) => {
  return (
    <>
      <div
         className="border-2 border-red-100 shadow-lg"
        style={{
          ...props.style,
          fontSize: "20px", display: 'block', right:"16px", top: "90px",zIndex:"15", height:"30px", width:"30px", opacity:"0.9", color:"black", backgroundColor:"white", position:"absolute", borderRadius: "50%", padding:"5px", paddingTop:"3px", paddingLeft:"3px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowForward"><IoIosArrowForward/></span>
      </div>
    </>
  );
};
export const PrevArrowB = (props) => {
  return (
    <>
      <div
      className="border-2 border-red-100 shadow-lg"
        style={{
          ...props.style,
          fontSize: "20px", display: 'block', left:"-15px", top: "30px",zIndex:"15", height:"30px", width:"30px", opacity:"0.9", color:"black", backgroundColor:"white", position:"absolute", borderRadius: "50%", padding:"5px", paddingTop:"3px", paddingLeft:"3px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowBack"><IoIosArrowBack/></span>
      </div>
    </>
  );
};

export const NextArrowB = (props) => {
  return (
    <>
      <div
         className="border-2 border-red-100 shadow-lg"
        style={{
          ...props.style,
          fontSize: "20px", display: 'block', right:"-15px", top: "30px",zIndex:"15", height:"30px", width:"30px", opacity:"0.9", color:"black", backgroundColor:"white", position:"absolute", borderRadius: "50%", padding:"5px", paddingTop:"3px", paddingLeft:"3px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowForward"><IoIosArrowForward/></span>
      </div>
    </>
  );
};