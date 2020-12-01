import React, {useState,useRef,useEffect} from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faAdmin, faEye, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import Modal from '../Modal/Modal.js'

const MyHomeNavbar= styled.nav`
 position: relative;
   display: flex;
   flex-flow: row rowwrap;
   justify-content:flex-end;
   align-items:center;
   background: #1a1812;
   color:white;
   

   .logo{
       margin-right:80%;
       padding:20px;
       font-size: 5vh;
       font-weight:bold;
       text-shadow: 3px 3px 3px white;    
   }
   .nav-links{   
     position:fixed;
     align-items:center;
     list-style:none;
     
   }
  
   .link{
    align-items:center;
    margin-Right:10px;
  
   }
   .link:hover{
    background:#4d4a4a
   }
   .link:active {
    background-color: black;
    background-size: 100%;
    transition: background 0s;
  }
   

`
const Mydiv=styled.div`
 

  .menuItem:hover{
    background:#CCCCCC;
    cursor:pointer;


  }
  .menuItem:active {
    background-color: white;
    background-size: 100%;
    transition: background 0s;
  }

`
export default function Navbar() {
    const name='A D';
    const [open,setOpen]=useState(false)
    const node = useRef();
    const [showModal,setShowModal]=useState(false)
 

    const handleToggle=(e)=>{

        setOpen(!open)
    }

    const handleClickOutside=(e)=>{

      
      if (node.current && node.current.contains(e.target)) {
        return ;
      }
      setOpen(false)

    }
    const handleClick=(e)=>{
      
      setOpen(false)

      if(e.target.innerText=='Create New Group'){
         setShowModal(!showModal)
    

      }

    
    }
    const closeModalHandler = () => {
      setShowModal(false)
  }

    useEffect(() => {
      // add when mounted
      document.addEventListener("mousedown", handleClickOutside);
      // return function to be called when unmounted
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    

    

    return (
        <fragment>
            <MyHomeNavbar>
                <div className='logo'>DeepThink</div>
              <ul className='nav-links'>
                  <li><Link to='/' className='link'>Home</Link></li>
                  <li><Link to='/' className='link' onClick={handleToggle}><FontAwesomeIcon icon={faPlus} style={{ fontSize: '1em', marginRight: '.5rem', cursor: 'pointer' }}></FontAwesomeIcon>New Website</Link></li>
                  <li><Link to='/' className='link'><Avatar name={name} size="30" round="20px" style={{ marginRight: '.2rem', cursor: 'pointer',color:'grey' }}/></Link></li>               
              </ul>
              
            </MyHomeNavbar>
            <Mydiv style={{display:'flex',justifyContent:'flex-end',flexWrap:'nowrap'}}>  
            {open?
              <ul ref={node} className='menuList' style={{width:'35vh',height:'14vh',  boxSizing:'content-box',boxShadow: '0px 5px 5px grey',backgroundColor: '#fff',marginRight:'40px',borderRadius:'5px',marginTop:'0'}}>
                  <li className='menuItem' style={{paddingLeft:'30px',paddingTop:'10px',paddingBottom:'10px'}} onClick={handleClick} ><FontAwesomeIcon icon={faPlus} style={{ fontSize: '1em', marginRight: '.5rem', cursor: 'pointer' }}></FontAwesomeIcon>Create New Website</li>
                  <li className='menuItem' style={{paddingLeft:'30px',paddingTop:'10px',paddingBottom:'10px'}} onClick={handleClick} ><FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: '1em', marginRight: '.5rem', cursor: 'pointer' }}></FontAwesomeIcon>Create New Group</li>
              </ul>:null}
              <Modal show={showModal} close={closeModalHandler}/>
            </Mydiv>
             
        </fragment>
    )
}
