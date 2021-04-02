import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInUpPage from "./pages/sign-in-up/sing-in-up.components";
import Header from './components/header/header.component';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInUpPage}/>
            </Switch>
        </div>
    );
}

export default App;
