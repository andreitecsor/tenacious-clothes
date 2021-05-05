import './App.css';

import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInUpPage from "./pages/sign-in-up/sing-in-up.components";
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.actions'
import {connect} from 'react-redux';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact
                           path='/signin'
                           render={() =>
                               this.props.currentUser ? (
                                   <Redirect to='/'/>
                               ) : (
                                   <SignInUpPage/>
                               )
                           }
                    />
                < /Switch>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => (
    {
        currentUser: user.currentUser
    }
);

const mapDispatchToProps = dispatch => (
    {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
