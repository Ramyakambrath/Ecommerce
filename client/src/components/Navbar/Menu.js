import React,{useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button,MenuItem,MenuList,Paper} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link,NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faAdmin, faEye } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
   
    title: {
      flexGrow: 1,
      fontSize: '5vh',
      fontWeight:'bold',
      textShadow: '3px 3px 3px #F5A623',
    },
    app:{
      background: '#1a1812'
    },
    paper:{
      width:'14%',
      marginRight: theme.spacing(2)
      
    }
  }));



export default function HomeNavbar2() {
    const classes = useStyles();
    const name='A D';
    const [menuOpen,setmenuOpen]=useState(false);

    const menuItems=['Create New Website','Create New Group']
 

    const toggleMenu=()=>{
      setmenuOpen(!menuOpen)
 
    }

 

    return (
    <div className={classes.root}>
      <AppBar  className={classes.app} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DeepThink
          </Typography>
         
          <Link to='/' className='link'><MenuItem>Home</MenuItem></Link>
          <Link to='/' className='link'><MenuItem onClick={toggleMenu}><FontAwesomeIcon icon={faPlus} style={{ fontSize: '1em', marginRight: '.5rem', cursor: 'pointer' }} ></FontAwesomeIcon>New Website</MenuItem></Link>
          <Link to='/' className='link'><Avatar name={name} size="30" round="20px" style={{ marginRight: '.2rem', cursor: 'pointer',color:'grey' }}/></Link>
        </Toolbar>
      </AppBar>
      {menuOpen ?
              <span style={{display:'flex',justifyContent:'flex-end'}}>  
              <Paper className={classes.paper} elevation={1}>          
                  <MenuList>
                    {menuItems.map(menu =>
                      <MenuItem>{menu}</MenuItem>
                    )}
                  </MenuList>
                  </Paper>
              </span>       
              : null}
    </div>
    )
}
