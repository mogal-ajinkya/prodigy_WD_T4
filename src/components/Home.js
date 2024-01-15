import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <div className="flex  items-center border-2 text-white border-white h-[85vh] w-5/6 mx-auto px-80">
        <div className="border-2 border-white">
            {/* <p>I'M AJINKYA MOGAL</p> */}
          <div class="wrapper">
            <div class="static-txt">I'M <span className="text-[#B5BDBA] font-bold">AJINKYA MOGAL</span></div>
            <ul class="dynamic-txts">
              <li><span>STUDENT</span></li>
              <li><span>PROGRAMMER</span></li>
              <li><span>ENGINEER</span></li>
              <li><span>DEVELOPER</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center border-2  border-white w-5/6 mx-auto">
        <div className="justify-center items-center border-2  border-white w-2/3 p-10">
          <p>
            I am a 3rd year undergraduate at
            <a
              href="https://en.wikipedia.org/wiki/Pune_Institute_of_Computer_Technology"
              target="_blank"
              rel="noreferrer"
              className="mx-1"
            >
              PICT,Pune
            </a>
          </p>
          <p>
            I have done my SDE Internship at Trilogy Innovations (CodeNation)
            last summer.
          </p>
          <p>I love problem solving and doing competitive programming.</p>
          <p>
            My field of Interest's are building new Web Technologies and
            Products.
          </p>
          <p>I also have knowledge of Web3, Cryptography and Blockchain.</p>
          <p>
            I am a tech geek and always learn and explore things related to
            Technology and Softwares.
          </p>
          <p>
            Currently I'm learning different System Design Concepts to make an
            application fast and scalable.
          </p>
          <p>My hobbies are watching movies, anime and reading manga. </p>
        </div>

        <div className=" justify-center items-center border-2  border-white w-1/3">
          some img
        </div>
      </div>
    </div>
  );
}

export default Home;
