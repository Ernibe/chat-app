import React from 'react';
import './Contact.css';

class Contact extends React.Component{
    constructor(props){
    super(props);
    this.state={    
        online: props.online,
    };

    }
    handleClick = () => {
    this.setState ({online: !this.state.online});

    }
render(){
    return(
        <>
            <figure className= "Contact">
                <img className= "avatar" src= {this.props.avatar} alt={this.props.name}/>
                <figcaption className= "name">               
                    <h2 className= "name">{this.props.name}</h2>
                    <div className= "status" >
                        <p className= "status-text">{this.state.online ? 'online': 'offline'}</p>
                        <button onClick={this.handleClick} className={this.state.online ? 'status-online' : 'status-offline'}></button>           
                    </div>
                </figcaption>
            </figure>
        </>
    );
}
}
export default Contact;