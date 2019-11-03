import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInAndSignUp from './pages/signIn-and-signUp/signIn-and-signUp';
import { auth, createUserProfileDocument } from './firebase/firebaseutils';

function HatsPage() {
  return (
    <h2>HATS PAGE</h2>
  );
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        this.setState({ currentUser: null });
        return;
      };
      
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        let currentUser = { id: snapshot.id, ...snapshot.data() };
        this.setState({ currentUser });
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/shop/hats' component={HatsPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;