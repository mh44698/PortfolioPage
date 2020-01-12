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
               <p>Contact Infomation</p>
           </Link>

           <Link style={navStyle} to="/OnlineResume">
               <p>Online Resume</p>
           </Link>

           <Link style={navStyle} to="/Projects">
               <p>Projects</p>
           </Link>
       </ul>
       <div className="imgs-for-reference">
           <hr></hr>
       <img src={"/HTML5.png"} alt="Logo" />
       <img src={"/css.png"} alt="Logo" />
       <img src={"/react.png"} alt="Logo" />
       <img src={"/VanillaJS.jpeg"} alt="Logo" />
       <img src={"/Node.png"} alt="Logo" />
       <img src={"/Python.jpeg"} alt="Logo" />
       <img src={"/Rcran.jpeg"} alt="Logo" /> 
       <img src={"/MongoDB.png"} alt="Logo" />
       <img src={"/github.jpeg"} alt="Logo" />
       <img src={"/Hana.jpeg"} alt="Logo" />
       <img src={"/SQLlight.jpeg"} alt="Logo" />
       {/* <img src={logo} alt="Logo" /> */}
       {/* <img src={logo} alt="Logo" /> */}
       </div>
   </nav>
  );
}

export default  Nav;