import React from 'react'
import './EventData.css'
import  {Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Form from './Form';
export default function EventData({searchString, setSearchString}) {
   
    const API_URL =
    "https://api.846policebrutality.com/api/incidents?&filter%5Bstate%5D=";
    
    
    const [results, setResults] = useState([]);
    const getData = async () => {
        // const {id} = props.match.params;
        try {
        const response = await fetch(API_URL + searchString);
        const data = await response.json();
        setResults(data.data);
        console.log(data.data)
        }catch(err){
            console.log(err);
        }
      };
  
      
      useEffect(() => {
        getData(searchString);
      }, [searchString]);

    return (
<div>
 

  <Carousel variant='dark'> {    
           results.length &&
           results.map((ele, i) => {
               return (
         <Carousel.Item key={i} interval={5000}>
             <div className="d3">
                 <p className="urCity">{ele.city}</p>
                 <p>👮‍♀️{ele.title}👮‍♂️</p>
              <p> 👀 <a href={ele.links[0]} alt="no video">{ele.links[0]}</a>👀</p>
                <h3>😩<a href={ele.links[1]} alt="no video">{ele.links[1]}</a>😩</h3>
           
             </div>
         </Carousel.Item>
       )})
} </Carousel> 

</div>)
}
        

                  
            
   