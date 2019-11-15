import React from 'react'

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebaseutils';

export default class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  submitHandler = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }

  changeHandler = (event) => {
    let {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            label='email'
            handleChange={this.changeHandler}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            label='password'
            handleChange={this.changeHandler}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}