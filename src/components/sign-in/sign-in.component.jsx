import React from 'react'
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSigninStart, emailSigninStart } from '../../redux/user/user.action';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  submitHandler = async (event) => {
    event.preventDefault();

    const { emailSigninStart } = this.props;
    emailSigninStart(this.state);

    this.setState({ email: '', password: '' });
  }

  changeHandler = (event) => {
    let {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { googleSigninStart } = this.props;
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
            <CustomButton type='button' onClick={googleSigninStart} isGoogleSignIn> Sign In With Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: ({ email, password }) => dispatch(emailSigninStart({ email, password })),
  };
}

export default connect(null, mapDispatchToProps)(SignIn);