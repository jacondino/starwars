import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import './home.scss'
import Menu from '../../components/menu/menu'

export default class Home extends Component {
    render() {
        return (
            <div className='home-bg'>
                <img className='icon pulse' src={require('../../assets/star.png')}/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-lg-8 align-menu'>
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}