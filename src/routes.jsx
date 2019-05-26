import React from 'react'
import { Route, Switch } from "react-router-dom";
import List from './main/filmes/list'
import Home from './main/home/home'

export default props => (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home/" component={Home} />
            <Route path="/films/list/" component={List} />
        </Switch>
)