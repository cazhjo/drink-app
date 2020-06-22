import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} />
        </Switch>
    </BrowserRouter>
)

export default App;
