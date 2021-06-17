import { Drawer } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Menu from '../components/menu';

function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return { isMenuOpen, openMenu, closeMenu };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBar: {
    marginBottom: theme.spacing(2)
  }
}));

const routes = [
  { path: '/', name: 'Home' },
  { path: '/blog', name: 'Blog' },
  { path: '/tag', name: 'Tags' }
];

export default function MainLayou({ children }) {
  const classes = useStyles();
  const { isMenuOpen, openMenu, closeMenu } = useMenu();

  return (
    <div className={classes.root}>
      <Drawer anchor="left" open={isMenuOpen} onClose={closeMenu}>
        <Menu routes={routes} />
      </Drawer>

      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={openMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Bitswired Admin
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}
