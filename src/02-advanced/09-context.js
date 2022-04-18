import React, { Component } from 'react'
import axios from 'axios'
import './css/04-css.css'

// 创建context对象
const GlobalContext = React.createContext()

export default class App extends Component {
    state = {
        filmLists: [],
        info: ''
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
            // 包裹在整个div的外面，固定的属性value
            <GlobalContext.Provider value={{
                text: 'Provider',
                info: this.state.info,
                changeInfo: (detail) => {
                    this.setState({
                        info: detail
                    })
                }

            }}>
                <div>
                    {this.state.filmLists.map(v =>
                        <Film key={v.filmId} {...v}></Film>

                    )}
                    <FilmDetail detail={this.state.detail}></FilmDetail>
                </div>
            </GlobalContext.Provider>
        )
    }
}

class Film extends Component {
    render() {
        let { name, poster, grade, synopsis } = this.props
        return (
            // 包裹在消费者的外边，并且用回调函数包起来，因为要使用固定的属性value接收context的信息
            <GlobalContext.Consumer>
                {(value) => {
                    return <div className='filmitem' onClick={() => {
                        // value.info = "222"
                        value.changeInfo(synopsis)
                    }}>
                        <img src={poster} alt="lll"></img>
                        <h4>{name}</h4>
                        <div>观众评分: {grade}</div>
                    </div>
                }}
            </GlobalContext.Consumer>

        )
    }
}
class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {(value) => {
                    return <div className='filmdetail'>
                        <div >{value.info}</div>
                    </div>
                }}
            </GlobalContext.Consumer>
        )
    }
}

/*
跨组件的通信方案
*/