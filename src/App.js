import './App.css';
import Bookticket from './component/Bookticket';
import Details from './component/Details';
import Header from './component/Header';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"> <Home /></Route>
          <Route exact path="/movie/:id"><Details /></Route>
          <Route exact path="/bookticket/:id"><Bookticket/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
