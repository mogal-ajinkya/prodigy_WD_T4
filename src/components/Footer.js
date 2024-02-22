function Footer() {
  // border-2 border-white
  return (
    <div className="w-5/6 mx-auto p-10">
      <div className="w-2/12 mx-auto flex justify-evenly">
        <div className=" background-black rounded-full p-1">
          <a href="https://www.linkedin.com/in/ajinkya-mogal-887418229/" target="_blank">
            <img
              src={require("../assets/linkedin.png")}
              alt="ln"
              width="30"
              height="30"
            ></img>
          </a>
        </div>
        <div className="background-black rounded-full p-1">
          <a href="mailto:mogalajinkya01@gmail.com" target="_blank">
            <img
              src={require("../assets/email.png")}
              alt="ln"
              width="30"
              height="30"
            ></img>
          </a>
        </div>
        <div className="background-black rounded-full p-1">
          <a href="https://github.com/mogal-ajinkya" target="_blank">
            <img
              className="object-center"
              src={require("../assets/github.png")}
              alt="GH"
              width="30"
              height="30"
            ></img>
          </a>
        </div>
        <div className="background-black rounded-full p-1">
          <a href="https://twitter.com/mogal_ajinkya" target="_blank">
            <img
              src={require("../assets/x.png")}
              alt="tw"
              width="30"
              height="30"
            ></img>
          </a>
        </div>
      </div>
      <div className="text-right">
        <p>Say hello</p>
        <a href="mailto:mogalajinkya01@gmail.com" target="_blank">
          mogalajinkya01@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Footer;
