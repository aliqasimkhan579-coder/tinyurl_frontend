import{Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Features from "./pages/Features";
import Domains from "./pages/Domains";
import Resources from"./pages/Resources";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './App.css'
function App(){
  return(
    <div className="tiny-container">
      <Navbar/>
      <Routes>
<Route path="/"element={<Home/>}/>
<Route path="/plans"element={<Plans/>}/>
<Route path="/features"element={<Features/>}/>
<Route path="/domains"element={<Domains/>}/>
<Route path="/resources"element={<Resources/>}/>
<Route path="/login"element={<Login/>}/>
<Route path="/signup"element={<Signup/>}/>
      </Routes>
    </div>
  )
}
export default App;