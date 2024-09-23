import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper,
  Snackbar
} from '@material-ui/core';
import { Alert } from '@mui/material';
import { Email, Phone, LocationOn } from '@material-ui/icons';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you for your message. We will get back to you soon!',
      severity: 'success'
    });
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '2rem' }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                style={{ marginTop: '1rem' }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '2rem' }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Email color="primary" />
              </Grid>
              <Grid item>
                <Typography>
                  Email: contact@hga-tohsa.org
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" style={{ marginTop: '1rem' }}>
              <Grid item>
                <Phone color="primary" />
              </Grid>
              <Grid item>
                <Typography>
                  Phone: +1 (123) 456-7890
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" style={{ marginTop: '1rem' }}>
              <Grid item>
                <LocationOn color="primary" />
              </Grid>
              <Grid item>
                <Typography>
                  Address: 123 Glycome Street, Researcher City, 12345
                </Typography>
              </Grid>
            </Grid>
            <Typography style={{ marginTop: '2rem' }}>
              For general inquiries, please use the contact form. For specific questions about data submissions or collaborations, please email us directly.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;