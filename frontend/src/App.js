import Header from './Components/Header';
import LogUser from './Components/LogUser';
import PictureSlide from './Components/PictureSlide';
import AddUser from './Components/AddUser';

import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      
        <Header/>
          <Routes>
              <Route path="/log" element = {<LogUser/>}/>
              <Route path="/add" element = {<AddUser/>}/>
          </Routes>
      
    </div>
  )
}

export default App;
