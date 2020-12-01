import React from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faAdmin, faEye } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';

const MyHomeNavbar= styled.nav`
   display: flex;
   flex-flow: row rowwrap;
   justify-content:space-evenly;
   align-items:center;
   background: #1a1812;
   color:white;

   .logo{
       padding:20px;
       font-size: 5vh;
       font-weight:bold;
       text-shadow: 3px 3px 3px white;
       
       
   }
   .nav-links{
     display: flex;
     flex-flow: row rowwrap;
     justify-content:space-evenly;
     align-items:center;

     list-style:none;
     
   }
   .link{
    display: flex;
    flex-flow: row rowwrap;
    justify-content:space-evenly;
    align-items:center;
   }
   .link:hover{
    background:#4d4a4a
   }

`
export default function HomeNavbar() {
    const name='A D';
    return (
        
            <MyHomeNavbar>
                <div className='logo'>DeepThink</div>
              <ul className='nav-links'>
                  <li><Link to='/' className='link'>Home</Link></li>
                  <li><Link to='/' className='link'><FontAwesomeIcon icon={faPlus} style={{ fontSize: '1em', marginRight: '.5rem', cursor: 'pointer' }}></FontAwesomeIcon>New Website</Link></li>
                  <li><Link to='/' className='link'><Avatar name={name} size="30" round="20px" style={{ marginRight: '.2rem', cursor: 'pointer',color:'grey' }}/></Link></li>
                 
              </ul>
            </MyHomeNavbar>
   
    )
}
