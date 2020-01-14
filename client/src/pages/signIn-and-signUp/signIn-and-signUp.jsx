import React from 'react';

import './signIn-and-signUp.scss';

import SignIn from  '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

export default function SignInAndSignUpPage() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
}