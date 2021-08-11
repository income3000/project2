
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from './Form'
import Navigation from "./Navigation";
import './App.css'
import EventData from "./EventData";
import {useState} from 'react'
import About from "./About";
import PoliceK from "./PoliceK";
import Incidents from "./Incidents";

export default function App() {
  const [loggedIn, setloggedIn] = useState(localStorage.getItem('token') ? true : false)
 const [searchString, setSearchString] = useState("California");


  return (
    <div className="App">
      <Navigation loggedIn={loggedIn}/>
      <span><Link to='/About'>About Us</Link></span>
      <span><Link to='/PoliceK'>Victims</Link></span>
      <span><Link to='/Incidents'>Incidents</Link></span>
      
      <img src="https://images-na.ssl-images-amazon.com/images/I/51m-2Z%2BGuOL._AC_SY450_.jpg" alt="pd"/>
      
     
     
    
      <nav>
      <Form searchString={searchString} setSearchString={setSearchString}/>
      <EventData searchString={searchString} setSearchString={setSearchString}/>
      </nav>
        <Route path='/About' exact component={About}/>
        <Route path='/PoliceK' exact component={PoliceK}/>
        <Route path='/EventData' exact component={EventData}/>
        <Route path='/Incidents' exact component={Incidents}/>
       {/* <PoliceK /> */}
    </div>
  );
}