import React from 'react';
import { Avatar, Button, CssBaseline, Grid, Typography, TextField, 
  Box, Link, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0 ,2)
  }
})

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="/">
        Mr.Doe
      </Link>
      {' team. '}
    </Typography>
  )
}

class SignUpWithPassword extends React.Component {
  constructor(props) {
    super(props)
    this.signUpWithPassword = this.signUpWithPassword.bind(this)
  }

  signUpWithPassword(e) {
    e.preventDefault();
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('password', password)
    this.props.history.push('/')
    this.props.changeState(true, 'success', 'Sign Up Successfully!')
  }

  render() {
    const {classes} = this.props
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.signUpWithPassword}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="usrename"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <MadeWithLove/>
        </Box>
      </Container>
    )
  }
}

export default withStyles(useStyles) (SignUpWithPassword);