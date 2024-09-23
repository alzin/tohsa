import React from 'react';
import { Container, Typography, Grid, Link, IconButton } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{ backgroundColor: '#f5f5f5', padding: '20px 0', marginTop: '20px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              Contact: <Link href="mailto:contact@hga-tohsa.org">contact@hga-tohsa.org</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" align="right">
              Version 1.0 | <Link href="#">Version History</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: '10px' }}>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              Affiliated Organizations: 
              {/* Replace with actual logo components when available */}
              <Link href="https://www.soka.ac.jp/en/" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px'}}>Soka University</Link>
              <Link href="https://igcore.w3.kanazawa-u.ac.jp/en/" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px'}}>IGCORE</Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} Human Glycome Atlas Project. All rights reserved.
        </Typography>
      </Container>
      <IconButton 
        onClick={scrollToTop} 
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        aria-label="scroll to top"
      >
        <ArrowUpward />
      </IconButton>
    </footer>
  );
};

export default Footer;
