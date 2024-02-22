import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function getleetcode() {
  // https://leetcode-api-faisalshohag.vercel.app/mogal_ajinkya
}
function Profile() {
    const [val , setval] = useState(300);
  return (
    <div className="mx-8 my-4 w-5/6 mx-auto">
      <p className="flex mx-8 mt-6 mb-2 text-xl">Coding Profiles</p>
      <div className="w-[95%] h-1 mt-4 mx-auto bg-white"></div>

      {/* leetcode */}
      <div className=" flex mt-6  mx-8">
        {/* logo  */}
        <img
          className="mt-4 mx-4 w-14 my-2 "
          src={require("../assets/lc.png")}
          alt="tw"
          width="50"
          height="30"
        ></img>

        <div>
            {/* name link  */}
            <div className="flex  mt-2 text-xl">
            <p className="my-2">leetcode</p>
            <a href="https://leetcode.com/mogal_ajinkya/" target="_blank" >
            <img
                className="w-4 h-4 mx-1 my-4"
                src={require("../assets/link-logo.png")}
                alt="tw"
                width="8"
                height="8"
            ></img>
            </a>
            </div>

            {/* description */}
            <div className="flex text-sm ">
                <p>{val}+ Problems [KNIGHT] 1680(max)</p>
            </div>
        </div>
      </div>

      {/* Codechef */}
      <div className=" flex mt-6  mx-8 ">
        {/* logo  */}
        <img
          className="mt-4 mx-4 w-14 my-2 "
          src={require("../assets/Codechef.png")}
          alt="tw"
          width="50"
          height="30"
        ></img>

        <div>
            {/* name link  */}
            <div className="flex  mt-2 text-xl">
            <p className="my-2">Codechef</p>
            <a href="https://www.codechef.com/users/mogal_ajinkya" target="_blank" >
            <img
                className="w-4 h-4 mx-1 my-4"
                src={require("../assets/link-logo.png")}
                alt="tw"
                width="8"
                height="8"
            ></img>
            
            </a>
            </div>

            {/* description */}
            <div className="flex text-sm ">
                <p>150+ Problems [2 star] 1433(max)</p>
            </div>
        </div>
      </div>

      {/* gfg */}
      <div className=" flex mt-6  mx-8 ">
        {/* logo  */}
        <img
          className="mt-4 mx-4 w-14 my-2 "
          src={require("../assets/GeeksforGeeks.png")}
          alt="tw"
          width="50"
          height="30"
        ></img>

        <div>
            {/* name link  */}
            <div className="flex  mt-2 text-xl">
            <p className="my-2">Codeforces</p>
            <a href="https://auth.geeksforgeeks.org/user/mogalajinkya01" target="_blank" >
            <img
                className="w-4 h-4 mx-1 my-4"
                src={require("../assets/link-logo.png")}
                alt="tw"
                width="8"
                height="8"
            ></img>
            </a>
            </div>

            {/* description */}
            <div className="flex text-sm ">
                <p>130+ Problems [NEWBIE] 1100(max)</p>
            </div>
        </div>
      </div>

      {/* Codeforces */}
      <div className=" flex my-6  mx-8 ">
        {/* logo  */}
        <img
          className="mt-4 mx-4 w-14 my-2 "
          src={require("../assets/cf.png")}
          alt="tw"
          width="50"
          height="30"
        ></img>

        <div>
            {/* name link  */}
            <div className="flex  mt-2 text-xl">
            <p className="my-2">Codeforces</p>
            <a href="https://codeforces.com/profile/Ajinkya2901" target="_blank" >
            <img
                className="w-4 h-4 mx-1 my-4"
                src={require("../assets/link-logo.png")}
                alt="tw"
                width="8"
                height="8"
            ></img>
            </a>
            </div>

            {/* description */}
            <div className="flex text-sm ">
                <p>120+ Problems [NEWBIE] 1100(max)</p>
            </div>
        </div>
      </div>


      {/* <div className="w-[95%] h-1 mt-4 mx-auto bg-white"></div> */}
      {/* <div className="mt-6  mx-8"> */}
        {/* <p  className="m-2">I Participate in every contest for improving my Problem Solving Skils 😀</p> */}
        {/* <p  className="m-2">Results may or may not be in my favour but I can't stop trying 🎯</p> */}
      {/* </div> */}
    </div>
  );
}

export default Profile;
