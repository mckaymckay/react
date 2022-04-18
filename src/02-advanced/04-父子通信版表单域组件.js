import React, { Component } from 'react'

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}  </label>
                <input type={this.props.type} onChange={(evt) => {
                    this.props.onChangeEvent(evt.target.value)
                }} value={this.props.value}></input>
                {/* input通过value设置初始值，通过父组件控制，可以修改 // 这里不能使用defaultValue，否则不能控制了 */}
                {/* 也不能input直接从localStorage获取值，也不能修改 */}
            </div>
        )
    }
}

export default class APP extends Component {
    state = {
        username: localStorage.getItem('username'),
        password: ""
    }
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center', background: 'red' }}>登录</h1>
                <Field label="用户名" type="text" onChangeEvent={(value) => {
                    this.setState({
                        username: value
                    })
                }} value={this.state.username}></Field>

                <Field label="密码" type="password" onChangeEvent={(value) => {
                    this.setState({
                        password: value
                    })
                }} value={this.state.password}></Field>

                <button onClick={() => {
                    console.log(this.state.username, this.state.password, '后端验证')
                }}>登录</button>

                <button onClick={() => {
                    this.setState({
                        username: "",
                        password: ""
                    })
                }}>取消</button>
            </div>
        )
    }
}
