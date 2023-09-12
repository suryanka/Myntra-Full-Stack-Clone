import "./App.css";
import Bag from "./Components/Bag/Bag";
import Detailview from "./Components/Details/Detailview";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import DataProvider from "./Context/DataProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products/:id' element={<Detailview/>}/>
          <Route path="/bag" element={<Bag/>} />
        </Routes>
      </div>
      </Router>
    </DataProvider>
  );
}

export default App;
