import React from 'react';
import { Avatar, Button, CssBaseline, Grid, Typography, TextField, FormControlLabel, 
  Checkbox, Box, Link, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
})

function MadeWithLove() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Built with love by the "}
        <Link color="inherit" href="#">
          Mr.Doe
        </Link>
        {" team. "}
      </Typography>
    )
}

class LoginWithPassword extends React.Component {
  constructor(props) {
    super(props);
    this.loginWithPassword = this.loginWithPassword.bind(this)
  }
  
  loginWithPassword(e) {
    e.preventDefault();
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if (username === sessionStorage.getItem('username') && password === sessionStorage.getItem('password')) {
      this.props.history.push('/home')
      this.props.changeState(true, 'success', 'Login Successfully!')
    } else {
      this.props.changeState(true, 'error', 'Login Failed!')
    }
  }

  render() {
    console.log(this.props)
    const {classes} = this.props
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline/>
        <Grid item xs={false} sm={4} md={7} className={classes.image}/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={this.loginWithPassword}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                label="Password"
                name="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot_password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign_up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <MadeWithLove/>
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(useStyles) (LoginWithPassword);