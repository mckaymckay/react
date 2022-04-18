import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div></div>
        )
    }
}
export default class APP extends Component {
    state = {
        username: 'kk'
    }
    render() {
        return (
            <div>
                <h1>登录</h1>
                <input type="text" value={this.state.username} onChange={(evt) => {
                    // 是为了拿到输入框的值,然后同步到state
                    console.log(evt.target.value)
                    this.setState({
                        username: evt.target.value
                    })

                }}></input>
                <button onClick={() => {
                    console.log(this.state.username)
                }}>登录</button>
                <button onClick={() => {
                    this.setState({
                        username: ""
                    })
                }}>重置</button>

                <Child username={this.state.username}></Child>
            </div>
        )
    }
}
