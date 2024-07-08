import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';

const pages = ['Home', 'Stack', 'Experience', 'Project', 'Contact'];

const ResponsiveNavBar = () => {

  // mobile drawer navigation 
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <p className="mobile-menu-top"><ListItemIcon/>Menu</p>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          {/* PC Navbar */}
          {/* icon */}
          <Box sx={{ 
            flexGrow: {
              xs: 0, // mobile
              md: 1, // pc
            },
          }}>
            <IconButton aria-label='light-mode-icon' size='large'>
              <DarkModeIcon />
            </IconButton>
            <IconButton aria-label='translate-icon' size='large'>
              <TranslateIcon />
            </IconButton>
          </Box>
          {/* navBox */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Nav Drawer */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              ModalProps={{ keepMounted: true}}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveNavBar;