import React from "react" ;
import Contact from "./Contact";


const listContacts = [
    {name:'Ethel GRIFFIN',
    avatar:'https://randomuser.me/api/portraits/women/24.jpg',
    status: true,
    },
    {name: 'René WALLACE',
    avatar:'https://randomuser.me/api/portraits/men/17.jpg',
    status: true,
    },
    {name: 'Dave ELLIOT',
    avatar:'https://randomuser.me/api/portraits/men/2.jpg',
    status: false,
    },
    {name: 'Deneise VALMENTE',
    avatar:'https://randomuser.me/api/portraits/women/44.jpg',
    status: false,
    },
    {name: 'David JHONNYT',
    avatar:'https://randomuser.me/api/portraits/men/91.jpg',
    status: true,
    },
]

const ContactList = () => (

   <div>
        {listContacts.map(item => (
           <Contact avatar={item.avatar} name={item.name} status={item.online}/>
        )) }


    </div>
    
)


export default ContactList;