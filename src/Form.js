import React from 'react'
import './From.css'



export default function Form({searchString, setSearchString}) {
  
    return (
        <div className="textBar">
            
           
            <input type="text" className="cityBox" placeholder="ENTER STATE" onChange={((event)=> setSearchString(event.target.value))}/>
            
            
        </div>
    )
}

