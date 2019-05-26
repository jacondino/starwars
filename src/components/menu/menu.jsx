import React, {Component} from 'react'
import './menu.scss'
import { Link } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
                <div className="wrapper">
                    <Link to="/films/list/" className="box a">Films</Link>
                    <div className="box b">People</div>
                    <div className="box c">Planets</div>
                    <div className="box d">Starships</div>
                    <div className="box e">Vehicles</div>
                    <div className="box f">Species</div>
                </div>
                )
            }
        }