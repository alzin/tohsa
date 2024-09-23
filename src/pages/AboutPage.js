import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import { Link, Outlet } from 'react-router-dom';

export const MissionVision = () => (
  <Paper style={{ padding: '20px', marginTop: '20px' }}>
    <Typography variant="h5" gutterBottom>Mission and Vision</Typography>
    <Typography paragraph>
      Mission: To create an accessible, comprehensive, and accurate database that supports global scientific research and innovation in glycobiology.
    </Typography>
    <Typography paragraph>
      Vision: To fully integrate glycomic data into broader understandings of human health, enabling precise, personalized medicine, and fostering breakthroughs in disease treatment and prevention.
    </Typography>
  </Paper>
);

export const History = () => (
  <Paper style={{ padding: '20px', marginTop: '20px' }}>
    <Typography variant="h5" gutterBottom>History</Typography>
    <Typography paragraph>
      The HGA - TOHSA project was founded with the goal of creating a centralized resource for glycomic data. Since its inception, the project has achieved significant milestones and continues to evolve with contributions from leading institutions worldwide.
    </Typography>
  </Paper>
);

export const Team = () => (
  <Paper style={{ padding: '20px', marginTop: '20px' }}>
    <Typography variant="h5" gutterBottom>Team</Typography>
    <Typography paragraph>
      Our team consists of dedicated researchers and scientists committed to advancing glycobiology. (Team member details would be added here)
    </Typography>
  </Paper>
);

export const Partners = () => (
  <Paper style={{ padding: '20px', marginTop: '20px' }}>
    <Typography variant="h5" gutterBottom>Partners and Collaborators</Typography>
    <Typography paragraph>
      HGA - TOHSA collaborates with various global partners to drive innovation in glycobiology research. (Partner details and potentially a map would be added here)
    </Typography>
  </Paper>
);

export const FAQs = () => (
  <Paper style={{ padding: '20px', marginTop: '20px' }}>
    <Typography variant="h5" gutterBottom>Frequently Asked Questions</Typography>
    <Typography paragraph>
      Find answers to common questions about the HGA - TOHSA project, its importance, database access, and ways to contribute. (FAQs would be added here)
    </Typography>
  </Paper>
);

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
        About HGA - TOHSA
      </Typography>

      {/* Navigation Links */}
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/about/mission">Mission and Vision</Link></li>
          <li><Link to="/about/history">History</Link></li>
          <li><Link to="/about/team">Team</Link></li>
          <li><Link to="/about/partners">Partners</Link></li>
          <li><Link to="/about/faqs">FAQs</Link></li>
        </ul>
      </nav>

      {/* Outlet for nested routes */}
      <Outlet />
    </Container>
  );
};

export default AboutPage;