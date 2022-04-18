import React, { Component } from 'react'
import axios from 'axios'
import './css/04-css.css'

// 订阅中心
var bus = {
    // 存储订阅的回调函数
    list: [],
    // 订阅
    subscribe(callback) {
        this.list.push(callback)
    },
    // 发布
    publish(val) {
        // 遍历所有的回调函数，执行回调函数
        this.list.forEach(callback => {
            callback && callback(val)
        })

    }
}

export default class App extends Component {
    state = {
        filmLists: [],
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
                    <Film key={v.filmId} {...v} >  </Film>

                )}
                <FilmDetail></FilmDetail>
            </div>
        )
    }
}

class Film extends Component {
    render() {
        let { name, poster, grade, synopsis } = this.props
        return (
            <div className='filmitem' onClick={() => {
                bus.publish(synopsis)
            }}>
                <img src={poster} alt="lll"></img>
                <h4>{name}</h4>
                <div>观众评分: {grade}</div>
            </div>
        )
    }
}
class FilmDetail extends Component {
    constructor() {
        super()
        this.state = {
            detail: ''
        }
        // 订阅信息，是传一个回调函数，val是发布者发布的信息
        bus.subscribe((val) => {
            console.log(val)
            this.setState({
                detail: val
            })
        })
    }
    render() {
        return <div className='filmdetail'>
            <div >{this.state.detail}</div>
        </div>
    }
}
