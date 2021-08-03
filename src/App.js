
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from './Form'
import Navigation from "./Navigation";
import './App.css'
import EventData from "./EventData";
import {useState} from 'react'
import About from "./About";


export default function App() {
  const [loggedIn, setloggedIn] = useState(localStorage.getItem('token') ? true : false)
 const [searchString, setSearchString] = useState("California");


  return (
    <div className="App">
      <Navigation loggedIn={loggedIn}/>
      <img src="http://sites.psu.edu/violenceinamerica/wp-content/uploads/sites/23512/2015/02/3.png" alt="pd"/>
      <h1 id="codeblue">Code Blue</h1>
      <Link to="/About">About Us</Link>
     
  
        
         <Form searchString={searchString} setSearchString={setSearchString}/>
        <EventData searchString={searchString} setSearchString={setSearchString}/>
       
    </div>
  );
}