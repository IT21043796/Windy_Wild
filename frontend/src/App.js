import Header from './Components/Header';
import LogUser from './Components/LogUser';
import PictureSlide from './Components/PictureSlide';
import AddUser from './Components/NewUser';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Products from './Components/Products';
import AddProduct from './Components/AddProduct';
import Galary from './Components/Galary';
import FarmGalary from './Components/FarmGalary';
import CustomerGalary from './Components/CustomerGalary';
import DispatchGalary from './Components/DispatchGalary';

function App() {
  return (
    <div>
        <Header/>
          <Routes>
              <Route path="/log" element = {<LogUser/>}/>
              <Route path="/add" element = {<AddUser/>}/>
              <Route path="/product" element = {<Products/>}/>
              <Route path="/addP" element = {<AddProduct/>}/>
              <Route path="/galary" element = {<Galary/>}/>
              <Route path="/disp" element = {<DispatchGalary/>}/>
              <Route path="/farm" element = {<FarmGalary/>}/>
              <Route path="/custo" element = {<CustomerGalary/>}/>

          </Routes>
      
    </div>
  )
}

export default App;
