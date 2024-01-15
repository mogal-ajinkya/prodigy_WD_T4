function Footer()
{
    return (
        <div className="border-2 border-white w-5/6 mx-auto p-10">
            <h1>footer</h1>
            <div className="border-2 border-white w-2/12 mx-auto flex justify-evenly">
                <div  className="border-2 border-white background-black rounded-full p-1">
                    <img src={require('../assets/linkedin.png')} alt="ln" width="30" height="30"></img>
                </div>
                <div  className="border-2 border-white background-black rounded-full p-1">
                    <img src={require('../assets/email.png')} alt="ln" width="30" height="30"></img>
                </div>
                <div  className="border-2 border-white background-black rounded-full p-1">
                    <img className='object-center' src={require('../assets/github.png')} alt="GH" width="30" height="30"></img>
                </div>
                <div className="border-2 border-white background-black rounded-full p-1">
                    <img src={require('../assets/x.png')} alt="tw" width="30" height="30"></img>
                </div>
            </div>
            <div className="text-right border-2 border-white ">
                <p>Say hello</p>
                <a href="mailto:mogalajinkya01@gmail.com"  target="_blank">mogalajinkya01@gmail.com</a>  
            </div>
        </div>
    )
}

export default Footer;