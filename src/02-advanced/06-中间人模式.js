import React, { Component } from 'react'
import axios from 'axios'
import './css/04-css.css'

export default class App extends Component {
    state = {
        filmLists: [],
        detail: ''
    }
    constructor() {
        super()
        axios.get('/test.json').then((res) => {
            console.log(res.data.data.films)
            this.setState({
                filmLists: res.data.data.films
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.filmLists.map(v =>
                    <Film key={v.filmId} {...v} onEvent={(value) => {
                        this.setState({
                            detail: value
                        })
                    }}>  </Film>

                )}
                <FilmDetail detail={this.state.detail}></FilmDetail>
            </div>
        )
    }
}

class Film extends Component {
    render() {
        let { name, poster, grade, synopsis } = this.props
        return (
            <div className='filmitem' onClick={() => {
                this.props.onEvent(synopsis)
            }}>
                <img src={poster} alt="lll"></img>
                <h4>{name}</h4>
                <div>观众评分: {grade}</div>
            </div>
        )
    }
}
class FilmDetail extends Component {
    render() {
        return <div className='filmdetail'>
            <div >{this.props.detail}</div>
        </div>
    }
}
