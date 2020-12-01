import React, {useState,useRef,useEffect} from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faAdmin, faEye, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import Nav from './Nav'


export default function Navbar() {
    const name='A D';
    const menuList=[{title:'New WebSite',icon:faPlus,hasSubMenu:true}]
    const submenuList=[{title:'Create New Website', showModal:false, icon:faPlus},{title:'Create New Group',showModal:true ,icon:faLayerGroup}]
    // const menuiconList=[faPlus]
    // const subMenuiconList=[faPlus,faLayerGroup]
    const logo='DeepThink'
 

    return (
          <Nav home={'Home'} name={name} menu={menuList} subMenu={submenuList}  logo={logo}/>         
    )
}
