import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter , Route , Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contect";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/profile" element={<Profile/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/project" element={<Project/>}/> 
        </Routes>
        
        <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
