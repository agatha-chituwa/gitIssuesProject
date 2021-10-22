 import Nav from './components/Nav';
import './App.css';
import Repos from './components/searchRepo/Repos';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Listuser from './components/Listuser';



function App() {





  
  return (
    <div>


<Router>
<Nav/>
<br/><br/><br/><br/>

<Switch>
    {/* <Route path="/listUser"> <Listuser/> </Route> */}
  <Route path="/"> <Repos/> </Route>

        
      </Switch>

 </Router>
    </div>
  );
}

export default App;
