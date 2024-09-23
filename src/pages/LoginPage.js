import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
    marginBottom: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 0),
    width: '100%',
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const handleLogin = (provider) => {
    // Placeholder for login logic
    console.log(`Logging in with ${provider}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <img 
            src="/path-to-your-logo.png" 
            alt="Human Glycome Atlas Project Logo" 
            className={classes.logo}
          />
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Human Glycome Atlas Project
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            ヒトグライコームアトラスプロジェクト
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                className={classes.button}
                onClick={() => handleLogin('Google')}
              >
                Login with Google
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="secondary" 
                className={classes.button}
                onClick={() => handleLogin('ORCID')}
              >
                Login with ORCID
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                className={classes.button}
                onClick={() => handleLogin('GakuNin')}
              >
                Login with GakuNin
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
};

export default LoginPage;
