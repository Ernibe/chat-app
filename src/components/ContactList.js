import React from "react" ;
import Contact from "./Contact";


const listContacts = [
    {name:'Ethel GRIFFIN',
    avatar:'https://randomuser.me/api/portraits/women/24.jpg',
    online: true,
    },
    {name: 'René WALLACE',
    avatar:'https://randomuser.me/api/portraits/men/17.jpg',
    online: true,
    },
    {name: 'Dave ELLIOT',
    avatar:'https://randomuser.me/api/portraits/men/2.jpg',
    online: false,
    },
    {name: 'Deneise VALMENTE',
    avatar:'https://randomuser.me/api/portraits/women/44.jpg',
    online: false,
    },
    {name: 'David JHONNYT',
    avatar:'https://randomuser.me/api/portraits/men/91.jpg',
    online: true,
    },
]

const ContactList = () => {        
     return(
            <div>
            {listContacts.map(item => (
               <Contact avatar={item.avatar} name={item.name} online={item.online}/>
            )) }
    
    
        </div>
        )
            }


export default ContactList;