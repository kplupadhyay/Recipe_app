
import './App.css';
import Home from "./pages/home.js";
import Create from "./pages/create-recipe.js"
import Saved from "./pages/saved-recipe.js";
import Auth from "./pages/auth.js";

import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Navbar from './components/navbar.js';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/saved" element={<Saved/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
