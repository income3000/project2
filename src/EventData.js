import React from 'react'
import './EventData.css'
import  {Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';


export default function EventData({searchString}) {
   
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
  <Carousel variant='light'> {    
           results.length &&
           results.map((ele, i) => {
               return (
         <Carousel.Item key={i} interval={3000}>
             <div className="d3">
                 <p className="urCity">{ele.city}</p>
                 <p>{ele.title}</p>
                 <a href={ele.links}  rel='noopener'>{ele.links}alt="404"</a>
             </div>
         </Carousel.Item>
       )})
} </Carousel> 

</div>)
}
        

                  
            
           