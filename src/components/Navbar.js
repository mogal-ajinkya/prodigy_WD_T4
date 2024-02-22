import React from "react";
import { Link } from "react-router-dom";


function Navbar() 
{   
    return (
        <>
        <div className="flex justify-between mx-8 my-4  w-5/6 mx-auto">
            <p className="p-4 px-4 font-extrabold ">
                <Link to={"/portfolio/"}><p>AJINKYA</p></Link>
            </p >
            
                <ul className="flex ">
                    <li className="p-4 px-6"><Link to={"/portfolio/"}><p>home.</p></Link></li>
                    <li className="p-4 px-6"><Link to={"/profile"}><p>profile.</p></Link></li>
                    <li className="p-4 px-6"><Link to={"/project"}><p>project.</p></Link></li>
                    <li className="p-4 px-6"><Link to={"/contact"}><p>contact me.</p></Link></li>
                </ul>
        </div>
            
        </>
    )
}

export default Navbar;