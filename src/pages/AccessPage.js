import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@material-ui/core';

const AccessPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Access
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Access section. Here you can find various ways to access and interact with our glycomics database.
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Database Browser
            </Typography>
            <Typography variant="body2" paragraph>
              Browse through our comprehensive glycomics database.
            </Typography>
            <Button variant="contained" color="primary">
              Open Browser
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              API Access
            </Typography>
            <Typography variant="body2" paragraph>
              Access our database programmatically through our API.
            </Typography>
            <Button variant="contained" color="primary">
              API Documentation
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Data Download
            </Typography>
            <Typography variant="body2" paragraph>
              Download datasets for offline analysis.
            </Typography>
            <Button variant="contained" color="primary">
              View Datasets
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccessPage;