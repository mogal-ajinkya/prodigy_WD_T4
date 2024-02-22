function Project() {
  return (
    <div className="mx-8 my-4  w-5/6 mx-auto">
      <p className="flex mx-8 mt-6 mb-2 text-xl">Projects</p>
      <div className="w-[95%] h-1 mt-4 mx-auto bg-white"></div>




      {/* weather */}
      <div className=" mt-6  mx-8">
        <div className=" flex">
        {/* logo  */}
        <img
          className="mt-4 mx-4 w-14 my-2 "
          src={require("../assets/weather-image1.png")}
          alt="tw"
          width="50"
          height="30"
        ></img>

        <div>
          {/* name link  */}
          <div className="flex  mt-2 text-xl">
            <p className="my-2">Weather App</p>
            <a href="https://fetch-weather-app.netlify.app/" target="_blank">
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
            <p>HTML , CSS , JavaScript </p>
          </div>
        </div>
        
      </div >
      <div className="w-[100%] ">
        <img
          className="mt-2 mx-4 w-14 my-2 border-2 border-white mx-auto w-[32rem] h-[17rem] "
          src={require("../assets/weather-image1.png")}
          alt="tw"
          width=""
          height=""
        ></img>
      </div>
      </div>
      

       {/* tic-tac-toe */}
      <div className=" mt-6  mx-8">
        <div className=" flex">
        {/* logo  */}
        <img
          className="mt-4 mx-4 w-14 my-2 "
          src={require("../assets/tic-tac-toe-image1.png")}
          alt="tw"
          width="50"
          height="30"
        ></img>

        <div>
          {/* name link  */}
          <div className="flex  mt-2 text-xl">
            <p className="my-2">Tic Tac Toe App</p>
            <a href="https://fetch-weather-app.netlify.app/" target="_blank">
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
            <p>HTML , CSS , JavaScript </p>
          </div>
        </div>
        
      </div >
      <div className="w-[100%] ">
        <img
          className="mt-2 mx-4 w-14 my-2 border-2 border-white mx-auto w-[32rem] h-[17rem] "
          src={require("../assets/tic-tac-toe-image1.png")}
          alt="tw"
          width=""
          height=""
        ></img>
      </div>
      
      </div>

      {/* password generator */}
      <div className=" mt-6  mx-8">
        <div className=" flex">
        {/* logo  */}
        <img
          className="mt-4 mx-4 w-14 my-2 "
          src={require("../assets/password-generator-image1.png")}
          alt="tw"
          width="50"
          height="30"
        ></img>

        <div>
          {/* name link  */}
          <div className="flex  mt-2 text-xl">
            <p className="my-2">password generator App</p>
            <a href="https://timely-gelato-7a8fcf.netlify.app/" target="_blank">
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
            <p>HTML , CSS , JavaScript </p>
          </div>
        </div>
        
      </div >
      <div className="w-[100%] ">
        <img
          className="mt-2 mx-4 w-14 my-2 border-2 border-white mx-auto w-[32rem] h-[17rem] "
          src={require("../assets/password-generator-image1.png")}
          alt="tw"
          width=""
          height=""
        ></img>
      </div>
      
      </div>

      {/* portfolio website  */}
      <div className=" mt-6  mx-8">
        <div className=" flex">
        {/* logo  */}
        <img
          className="mt-4 mx-4 w-14 my-2 "
          src={require("../assets/portfolio-image1.png")}
          alt="tw"
          width="50"
          height="30"
        ></img>

        <div>
          {/* name link  */}
          <div className="flex  mt-2 text-xl">
            <p className="my-2">Portfolio Website</p>
            <a href="https://fetch-weather-app.netlify.app/" target="_blank">
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
            <p>HTML , CSS , JavaScript , REACT </p>
          </div>
        </div>
        
      </div >
      <div className="w-[100%] ">
        <img
          className="mt-2 mx-4 w-14 my-2 border-2 border-white mx-auto w-[32rem] h-[17rem] "
          src={require("../assets/portfolio-image1.png")}
          alt="tw"
          width=""
          height=""
        ></img>
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

export default Project;
