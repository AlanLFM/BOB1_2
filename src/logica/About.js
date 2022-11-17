import React from 'react';  
import { Outlet } from 'react-router-dom';
function About () {  
    return <div>  
        <h2> jAVAtPOINT is a computer science portal for TUTORIALS!</h2>  
   Read more about us at :  
        <a href="https://www.javatpoint.in/about/">  
            https://www.javatpoint.in/about/  
        </a>
        <Outlet/>  
    </div>  
}  
export default About;  