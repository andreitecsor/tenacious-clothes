import './App.css';

import React from "react";
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInUpPage from "./pages/sign-in-up/sing-in-up.components";
import Header from './components/header/header.component';
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user
            });
            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
