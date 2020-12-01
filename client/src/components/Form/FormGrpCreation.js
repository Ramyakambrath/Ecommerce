import React ,{useState} from 'react'
import styled from 'styled-components'


const MyForm= styled.div`
  display :flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items:center;
  background: peach;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
   margin: 100px auto ;
   width:60%;
 
   #group{
       display :block
       padding:10px;
       width:50%;
       
   }
   
   `

export default function FormGrpCreation(props) {

    const [groupName,setGroupName]=useState('')

    const handleChange=(e)=>{
        setGroupName(e.target.value)
        props.getGroupName(groupName)
    }

    return (
        
        <fragment>
            <input style={{display:'block',paddingTop:'20px'}} type='text' placeholder='Enter a Group Name' id='group' value={groupName} onChange={handleChange}/>
        </fragment>
        
    )
}
