import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/signIn-and-signUp/signIn-and-signUp';
import { auth, createUserProfileDocument } from './firebase/firebaseutils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

function HatsPage() {
  return (
    <h2>HATS PAGE</h2>
  );
}

class App extends React.Component {
  constructor() {
    super();
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        setCurrentUser(null);
        return;
      };
      
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        let currentUser = { id: snapshot.id, ...snapshot.data() };
        setCurrentUser(currentUser);
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/shop/hats' component={HatsPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: selectCurrentUser(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: user => dispatch( setCurrentUser(user) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);