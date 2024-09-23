import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@material-ui/core';

const DiscoveryPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Discovery
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Discovery section. Here you can explore various research and discovery tools related to glycomics.
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Glycan Search
            </Typography>
            <Typography variant="body2" paragraph>
              Search for specific glycan structures in our database.
            </Typography>
            <Button variant="contained" color="primary">
              Start Search
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Pathway Analysis
            </Typography>
            <Typography variant="body2" paragraph>
              Analyze glycan biosynthesis pathways.
            </Typography>
            <Button variant="contained" color="primary">
              Analyze Pathways
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Structural Comparison
            </Typography>
            <Typography variant="body2" paragraph>
              Compare different glycan structures.
            </Typography>
            <Button variant="contained" color="primary">
              Compare Structures
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DiscoveryPage;