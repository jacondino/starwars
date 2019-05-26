import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Moment from 'react-moment';
import './list.scss'

class List extends Component {
    
    //carrega lista de filmes
    componentWillMount() {
        this.props.filmesListLoad()
    }

    //monta lista de filmes
    listaFilmes() {
        let list = [];

        this.props.filmes.map((it) => {
            list.push(<div key={it.episode_id} className="container-movie col-sm-4">
            <div className="movie">
                <div className="movie-inside front">
                    <img className='movie-image-list' src={require(`../../assets/${it.episode_id}.jpg`)}/>
                </div>
                <div className="movie-inside back">
                    <div className="movie-details">
                        <div className="movie-snap"><img src={require(`../../assets/${it.episode_id}.jpg`)}/></div>
                        <h1>{it.title} <br/><span><Moment format="DD/MM/YYYY">{it.release_date}</Moment></span></h1>
                        <p className="movie-synopsis">{it.opening_crawl}</p>
                    </div>
                </div>
            </div>
        </div>);
    });
        
        return (
            <div id="container-movies row">
                {list}
            </div>
        );
    }

    render() {
        return (
            <div className='movies-list container'>
                <div className='movies-title'>
                    <img src={require('../../assets/starBlack.png')}/>
                    <h2>Star Wars lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis magna, tincidunt in auctor sit amet, molestie in ex. Nam facilisis feugiat ante vitae maximus. Fusce fermentum cursus volutpat. Vivamus dignissim tortor sapien, eu dapibus mauris congue id.</p>
                </div>
                {this.listaFilmes()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filmes: state.filmes
    }
}

export default connect(mapStateToProps, actions)(List);