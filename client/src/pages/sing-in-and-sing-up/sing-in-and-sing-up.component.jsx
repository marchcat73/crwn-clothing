import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './sing-in-and-sing-up.styles.scss'

const SignInAndSignUpPage = () => (
    <div className="sing-in-and-sing-up">
      <SignIn />
      <SignUp />
    </div>
  )


export default SignInAndSignUpPage
