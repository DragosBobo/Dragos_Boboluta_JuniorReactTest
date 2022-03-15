
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import ContentCard from './components/ContentCard';
import React, {useEffect,useState} from 'react';

const Categories=`{
    categories{
      name
    }
}`;
function App() {
 const [categoriesNames,setCategoriesNames]=useState([{name:'All'},{name:"All"},{name:"All"}]);

  React.useEffect(()=>{

    fetch('http://localhost:4000/',{
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify({query:Categories})
   }).then(response=>response.json()).then(data=>setCategoriesNames(data.data.categories))
  },[]);
  

  return (
    
    <Router>
 <div className="app">
      < NavBar/>
      
      <Switch>
        <Route path="/All">
         <ContentCard title={categoriesNames[0].name}/> 
          
        </Route>
        <Route path="/Clothes">
        <ContentCard title={categoriesNames[1].name}/> 
          
        </Route>
        <Route path="/Tech">
        <ContentCard title={categoriesNames[2].name}/> 
          
        </Route>

      </Switch>
    </div>

    </Router>
   
  );
}

export default App;
