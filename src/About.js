'./About.css'
import React from 'react'
import {Link} from "react-router-dom";
import './About.css'
export default function About() {
    return (
        <div className='about'>
            <p>The point of this application is simply to bring awareness to the biggest problem america faces, police brutality. In every city of every state police are allowed treat americans in a way that would be criminal if it was citizen to citizen, or citizen police. As the masses turn a blind eye to their actions they're is a growing awakening to their transgressions as citizens are using their cameras to expose the violent brutal nature of the police in America.</p>
            <Link to="/">Home</Link>
        </div>
    )
}