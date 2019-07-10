import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginWithPassword from './components/LoginWithPassword';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import SignUpWithPassword from './components/SIgnUpWithPassword';
import { Snackbar } from '@material-ui/core';
import MySnackbarContentWrapper from './utils/MySnackbarContentWrapper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false,
      snackbarStatus: '',
      snackbarMessage: '',
    }
    this.changeState = this.changeState.bind(this)
  }
  
  changeState(open, status, message) {
    this.setState({
      snackbarOpen: open,
      snackbarStatus: status,
      snackbarMessage: message,
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
            open={this.state.snackbarOpen}
            autoHideDuration={2000}
            onClose={() => this.setState({snackbarOpen: false})}
          >
            <MySnackbarContentWrapper
              onClose={() => this.setState({snackbarOpen: false})}
              variant={this.state.snackbarStatus}
              message={this.state.snackbarMessage}
            />
          </Snackbar>
          <Route exact path="/" render={(props) => (<LoginWithPassword {...props} changeState={this.changeState}/>)}></Route>
          <Route path="/sign_up" render={(props) => (<SignUpWithPassword {...props} changeState={this.changeState} changeUsers={this.changeUsers}/>)}></Route>
          <Route path="/forgot_password" component={ForgotPassword}></Route>
          <Route path="/home" component={Home}></Route>
          {/* <Route path="/:id" render={({match}) => (<h1>{match.params.id}</h1>)}></Route> */}
          {/* <Route path="/topics" component={ Topics }></Route> */}
        </div>
      </Router>
    )
  }
}

export default App;
