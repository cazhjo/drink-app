import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Drink from './pages/Drink';
import Header from './components/Header'

const App = () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/explore' component={Explore} />
            <Route path='/drink/:id' component={Drink} />
        </Switch>
        </div>
    </BrowserRouter>
)

export default App;
