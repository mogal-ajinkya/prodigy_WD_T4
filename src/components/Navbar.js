import React from "react";
import { Link } from "react-router-dom";


function Navbar() 
{   
    return (
        <>
        <div className="flex justify-between mx-8 my-4 border-2 border-white w-5/6 mx-auto">
            <p className="p-4 px-4 border-2 border-white font-extrabold ">
                <Link to={"/"}><p>AJINKYA</p></Link>
            </p >
            
                <ul className="flex border-2 border-white ">
                    <li className="p-4 px-6"><Link to={"/"}><p>home.</p></Link></li>
                    <li className="p-4 px-6"><Link to={"/profile"}><p>about.</p></Link></li>
                    <li className="p-4 px-6"><Link to={"/project"}><p>project.</p></Link></li>
                    <li className="p-4 px-6"><Link to={"/contact"}><p>contact me.</p></Link></li>
                </ul>
        </div>
            
        </>
    )
}

export default Navbar;