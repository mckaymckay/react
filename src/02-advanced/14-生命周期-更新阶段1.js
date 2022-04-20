import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class APP extends Component {
    state = {
        name: 'dachui',
        list: []
    }
    componentDidMount() {
        axios.get("/test.json").then((res) => {
            console.log(res.data.data.films)
            this.setState({
                list: res.data.data.films
            })
            // axios本身就是异步的，所以这里setState会同步更新，直接new就可以执行
            // 1. new BScroll('#wrapper')
        })
        console.log('hhh')
        // 注意这里是不可以直接new scroll的，上边axios是异步，new是同步，肯定new先执行，而这时还没有获取到数据
        // 2. new BScroll('#wrapper')

    }

    UNSAFE_componentWillUpdate() {
        console.log('willupdate', document.getElementById('myname').innerHTML)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('didupdate', document.getElementById('myname').innerHTML)
        // axios获取到数据后，触发setstate，state更新，dom更新，didupdate之后就可以new scroll
        // 3. new BScroll('#wrapper')

        // 每次dom更新都会执行，所以进行一些判断, 这样其他的dom更新不会引起new的重新执行
        console.log(prevState.list) // 上一个状态
        if (prevState.list.length === 0) {
            console.log(111)
            new BScroll('#wrapper')
        }

    }
    render() {
        console.log('render')
        // 不要setstate，state改变会触发render，会死循环
        return (
            <div>
                <div id='myname'>{this.state.name}</div>
                <button onClick={() => {
                    this.setState({
                        name: 'dameng'
                    })
                }}>click</button>
                <div id='wrapper' style={{ height: '200px', overflow: 'hidden', background: 'yellow' }}>
                    <ul>
                        {this.state.list.map(v =>
                            <li key={v.filmId}>{v.name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}


/*
作用：
didupdate：更新后，想要获取dom节点
render()不要setstate，会死循环
*/