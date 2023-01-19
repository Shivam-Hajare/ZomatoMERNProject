import React from "react";
import { useLocation } from "react-router-dom";

export const Temp = () => {
    const loc = useLocation();
    return <div> This is a temporary comp {loc.pathname}</div>
}

export default Temp;