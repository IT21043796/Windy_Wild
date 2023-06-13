import Header from './Components/Header';
import LogUser from './Components/LogUser';
import PictureSlide from './Components/PictureSlide';
import AddUser from './Components/NewUser';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Products from './Components/Products';
import AddProduct from './Components/AddProduct';

function App() {
  return (
    <div>
        <Header/>
          <Routes>
              <Route path="/log" element = {<LogUser/>}/>
              <Route path="/add" element = {<AddUser/>}/>
              <Route path="/product" element = {<Products/>}/>
              <Route path="/addP" element = {<AddProduct/>}/>

          </Routes>
      
    </div>
  )
}

export default App;
