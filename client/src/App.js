import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Add from "./pages/Add";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
 
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/add" element={<Add/>}/>
</Routes>
<Footer/>
    </div>
    
  );
}

export default App;
