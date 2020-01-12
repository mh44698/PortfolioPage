import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
 <nav>
       <ul className="nav-links">
         <Link style={navStyle} to="/">
               <p>Home</p>
           </Link>

           <Link style={navStyle} to="/ContactInfo">
               <p>ContactInfo</p>
           </Link>

           <Link style={navStyle} to="/OnlineResume">
               <p>Online Resume</p>
           </Link>

           <Link style={navStyle} to="/Projects">
               <p>Projects</p>
           </Link>
       </ul>
   </nav>
  );
}

export default  Nav;