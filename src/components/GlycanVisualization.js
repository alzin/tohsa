import React from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for the bar chart
const glycanData = [
  { name: 'Sample A', abundance: 4000 },
  { name: 'Sample B', abundance: 3000 },
  { name: 'Sample C', abundance: 2000 },
  { name: 'Sample D', abundance: 2780 },
  { name: 'Sample E', abundance: 1890 },
  { name: 'Sample F', abundance: 2390 },
];

const GlycanVisualization = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Glycan Structure Visualization
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              2D Glycan Structure
            </Typography>
            <svg width="100%" height="300" viewBox="0 0 400 300">
              {/* This is a simplified 2D representation of a glycan structure */}
              {/* Circles represent monosaccharides, lines represent glycosidic bonds */}
              
              {/* Glucose */}
              <circle cx="200" cy="150" r="30" fill="#FFB3BA" />
              <text x="200" y="155" textAnchor="middle" fill="black">Glc</text>
              
              {/* N-Acetylglucosamine */}
              <circle cx="120" cy="220" r="30" fill="#BAFFC9" />
              <text x="120" y="225" textAnchor="middle" fill="black">GlcNAc</text>
              <line x1="174" y1="170" x2="146" y2="200" stroke="black" strokeWidth="2" />
              
              {/* Mannose */}
              <circle cx="280" cy="220" r="30" fill="#BAE1FF" />
              <text x="280" y="225" textAnchor="middle" fill="black">Man</text>
              <line x1="226" y1="170" x2="254" y2="200" stroke="black" strokeWidth="2" />
              
              {/* Galactose */}
              <circle cx="200" cy="70" r="30" fill="#FFFFBA" />
              <text x="200" y="75" textAnchor="middle" fill="black">Gal</text>
              <line x1="200" y1="120" x2="200" y2="100" stroke="black" strokeWidth="2" />
            </svg>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Glycan Abundance in Samples
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={glycanData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="abundance" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GlycanVisualization;