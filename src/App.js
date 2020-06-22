import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header'

const App = () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path='/' component={Home} exact />
        </Switch>
        </div>
    </BrowserRouter>
)

export default App;
