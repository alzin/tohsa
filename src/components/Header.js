import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [standardsAnchorEl, setStandardsAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleStandardsClick = (event) => {
    setStandardsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setStandardsAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            HGA - TOHSA
          </Link>
        </Typography>
        <Button color="inherit" aria-controls="about-menu" aria-haspopup="true" onClick={handleClick}>
          About
        </Button>
        <Menu
          id="about-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/about/mission">Mission and Vision</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about/history">History</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about/team">Team</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about/partners">Partners and Collaborators</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about/faqs">FAQs</MenuItem>
        </Menu>
        <Button color="inherit" component={Link} to="/discovery">Discovery</Button>
        <Button color="inherit" component={Link} to="/access">Access</Button>
        <Button color="inherit" aria-controls="standards-menu" aria-haspopup="true" onClick={handleStandardsClick}>
          Standards
        </Button>
        <Menu
          id="standards-menu"
          anchorEl={standardsAnchorEl}
          keepMounted
          open={Boolean(standardsAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/standards/ontologies">Ontologies</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/standards/notations">Notations</MenuItem>
        </Menu>
        <Button color="inherit" component={Link} to="/learn">Learn</Button>
        <Button color="inherit" component={Link} to="/glycan-visualization">Visualizations</Button>
        <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        <Button color="inherit" component={Link} to="/help">Help</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;