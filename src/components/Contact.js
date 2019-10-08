import React from 'react';
import './Contact.css';

function Contact (props){
    return(
        <>
            <figure className= "Contact">
                < img classname= "avatar" src= {props.avatar} alt={props.name}/>
                < figcaption className= "name">               
                    <h2 className= "name">{props.name}</h2>
                    <div className= "status">
                        <p className= "status-text">{props.online ? 'online': 'offline'}</p>
                        <p className= {props.online ? 'status-online' : 'status-offline'}></p>           
                    </div>
                </figcaption>
            </figure>
        </>
    )
}

export default Contact;