import Header from './Components/Header';
import AddUser from './Components/addUser';
import Counter from './Components/Counter';
import PictureSlide from './Components/PictureSlide';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      
        <Header/>
          <Routes>
              <Route path="/add" element = {<AddUser/>}/>
              <Route path="/Counter" element = {<Counter/>}/>
              <Route path="/" element= {<PictureSlide/>}/>
          </Routes>
      
    </div>
  )
}

export default App;
