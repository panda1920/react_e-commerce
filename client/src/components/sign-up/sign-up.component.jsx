import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signupStart } from '../../redux/user/user.action';


function SignUp({ signupStart }) {

  const [signupInfo, setSignupInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (signupInfo.password !== signupInfo.confirmPassword) {
      alert('Password does not match.');
      return;
    }

    signupStart(signupInfo);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value
    });
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={signupInfo.displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={signupInfo.email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={signupInfo.password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={signupInfo.confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    signupStart: (userInfo) => dispatch(signupStart(userInfo))
  };
}

export default connect(null, mapDispatchToProps)(SignUp);