
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
function App() {
  return (
    <Router>
 <div className="app">
      < Header />
      <Switch>
        <Route path="/Women">
         Women category
          
        </Route>
        <Route path="/Men">
         Men category
          
        </Route>
        <Route path="/Kids">
         Kids category
          
        </Route>

      </Switch>
    </div>

    </Router>
   
  );
}

export default App;
