import React, { Component } from 'react'
import Routes from '../routes'
import { HashRouter } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Routes />
            </HashRouter>
        )
    }
}