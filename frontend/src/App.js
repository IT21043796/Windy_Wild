import Header from './Components/Header';
import addUser from './Components/addUser';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Route>
      <div className="App">
        <Header/>
          <Route path="/add" exact componenet ={addUser}/>
        <addUser/>
      </div>
    </Route>
  );
}

export default App;
