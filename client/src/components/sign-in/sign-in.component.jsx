import React, { useState } from 'react'
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSigninStart, emailSigninStart } from '../../redux/user/user.action';

function SignIn({ googleSigninStart, emailSigninStart }) {

  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const submitHandler = async (event) => {
    event.preventDefault();
    emailSigninStart(userCredentials);
    setUserCredentials({ email: '', password: '' });
  }

  const changeHandler = (event) => {
    let { value, name } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  }

  return (
    <div className='sign-in'>
      <h2>I have account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          name='email'
          type='email'
          value={userCredentials.email}
          label='email'
          handleChange={changeHandler}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={userCredentials.password}
          label='password'
          handleChange={changeHandler}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={googleSigninStart} isGoogleSignIn> Sign In With Google </CustomButton>
        </div>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: ({ email, password }) => dispatch(emailSigninStart({ email, password })),
  };
}

export default connect(null, mapDispatchToProps)(SignIn);