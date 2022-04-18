import React, { Component } from 'react'

export default class APP extends Component {
    myusername = React.createRef()
    render() {
        return (
            <div>
                <h1>登录</h1>
                <input type="text" ref={this.myusername} defaultValue="mm"></input>
                <button onClick={() => {
                    console.log(this.myusername.current.value)
                }}>登录</button>
                <button onClick={() => {
                    this.myusername.current.value = ""
                }}>重置</button>
            </div>
        )
    }
}
// 非受控组件完成内部任务很方便，如果多个组件之间传值就不太方便了