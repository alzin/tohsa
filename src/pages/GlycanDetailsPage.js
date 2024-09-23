import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';

// Mock data for glycans (same as in SearchResultsPage)
const mockGlycans = [
  { id: 1, name: "Glycan A", formula: "C6H12O6", description: "A simple monosaccharide", structure: "Linear", molarMass: 180.16, biologicalRole: "Energy source" },
  { id: 2, name: "Glycan B", formula: "C12H22O11", description: "A common disaccharide", structure: "Linear", molarMass: 342.30, biologicalRole: "Structural component" },
  { id: 3, name: "Glycan C", formula: "C18H32O16", description: "A complex trisaccharide", structure: "Branched", molarMass: 504.44, biologicalRole: "Cell signaling" },
  { id: 4, name: "Glycan D", formula: "C24H42O21", description: "A branched tetrasaccharide", structure: "Branched", molarMass: 666.58, biologicalRole: "Protein modification" },
  { id: 5, name: "Glycan E", formula: "C30H52O26", description: "A high-mannose N-glycan", structure: "Highly branched", molarMass: 828.72, biologicalRole: "Protein folding" },
];

const GlycanDetailsPage = () => {
  const [glycan, setGlycan] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // In a real application, this would be an API call
    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const foundGlycan = mockGlycans.find(g => g.id === parseInt(id));
      setGlycan(foundGlycan);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="md" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!glycan) {
    return (
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Glycan Not Found
        </Typography>
        <Typography variant="body1">
          The requested glycan could not be found. Please check the ID and try again.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        {glycan.name}
      </Typography>
      <Paper style={{ padding: '2rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Formula</Typography>
            <Typography variant="body1">{glycan.formula}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Molar Mass</Typography>
            <Typography variant="body1">{glycan.molarMass} g/mol</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Description</Typography>
            <Typography variant="body1">{glycan.description}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Structure</Typography>
            <Typography variant="body1">{glycan.structure}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Biological Role</Typography>
            <Typography variant="body1">{glycan.biologicalRole}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default GlycanDetailsPage;