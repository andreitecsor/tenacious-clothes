import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from "../../components/sign-up/sign-up.component";
import './sing-in-up.styles.scss';

const SignInUpPage = () => (
    <div className='sign-in-up'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInUpPage;