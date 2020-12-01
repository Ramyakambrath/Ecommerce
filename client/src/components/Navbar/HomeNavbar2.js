import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, MenuItem, MenuList, Paper } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faAdmin, faEye } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';


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
    fontWeight: 'bold',
    textShadow: '3px 3px 3px #F5A623',
  },
  app: {
    background: '#1a1812'
  },
  paper: {
    width: '14%',
    marginRight: theme.spacing(2)

  }
}));



export default function HomeNavbar2() {
  const classes = useStyles();
  const name = 'A D';


  const menuItems = ['Create New Website', 'Create New Group']

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return ;
    }
        
 
    setOpen(false);

    
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === true) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
    <div className={classes.root}>
      <AppBar className={classes.app} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DeepThink
          </Typography>
          <Link to='/' className='link'><MenuItem>Home</MenuItem></Link>
         <MenuItem ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}><FontAwesomeIcon icon={faPlus} style={{ fontSize: '1em', marginRight: '.5rem', cursor: 'pointer' }} ></FontAwesomeIcon>New Website</MenuItem>
          <Link to='/' className='link'><Avatar name={name} size="30" round="20px" style={{ marginRight: '.2rem', cursor: 'pointer', color: 'grey' }} /></Link>
        </Toolbar>
      </AppBar>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose}>Create New Website</MenuItem>
                  <MenuItem onClick={handleClose}>Create New Group</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}
