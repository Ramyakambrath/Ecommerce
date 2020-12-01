import React,{useState} from 'react'
import FormGrpCreation from '../Form/FormGrpCreation'
import styled from 'styled-components'


const ModalDiv=styled.div`



  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
  margin: 100px auto ;
  transition: all .8s;
  width: 50%;
  height:100%;

  .modal-header {
  background: #24a0ed;
  height: 50px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;


}

.modal-header h4 {
  color: white;
  float: left;
  margin: 0;
  padding: 10px;
  font-size:1.2em;
}

.modal-body {
  padding: 10px 15px;
  height:500px;
  text-align: center;
 
}
.modal-heading{
  margin:0
  display:block;
  display:flex;
  justify-content: flex-start;
  padding-top:15px
}
.modal-footer {
  background: #white;
  height: 100px;
  padding: 2px 16px;
  border-top: 2px groove rgba(252,246,243,0.25);
  display:flex;
  align-items:center
  
}
.close-modal-btn {
  color: white;
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;
}

.close-modal-btn:hover {
  color: black;
}

.btn-cancel, .btn-continue {
  background: coral;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  padding: 10px 20px 10px 20px;
}


.btn-continue {
  background-color: #4CAF50;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius:10px;
}

`

export default function Modal(props) { 
  const [gpName,setgpName]=useState('')

  const getGroupName=(value)=>{
    setgpName(value)
    console.log(gpName)
  }
  return (

    props.show?
  
            <ModalDiv className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h4>Create new group</h4>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body"> 
                  <span className='modal-heading'>New Group*</span>               
                 <FormGrpCreation getGroupName={getGroupName}/>
                </div>
                <div className="modal-footer">
                    <button className="btn-continue" disabled={gpName.length>0}>Save</button>
                </div>
            </ModalDiv>
       

    :null
  )
}
