import React, { Component } from 'react'

class Field extends Component {
    state = {
        value: ""
    }
    render() {
        return (
            <div>
                <label>{this.props.label}  </label>
                <input type={this.props.type} onChange={(evt) => {
                    this.setState({
                        value: evt.target.value
                    })
                }} value={this.state.value}></input>
                {/* setState负责修改value值，value属性将值展示在input框里，将input标签变成受控的 */}
            </div>
        )
    }
    clear = () => {
        this.setState({
            value: ""
        })
    }
    setValue(value) {
        this.setState({
            value: value
        })
    }
}

export default class APP extends Component {
    username = React.createRef()
    password = React.createRef()
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center', background: 'red' }}>登录</h1>
                <Field label="用户名" type="text" ref={this.username}></Field>
                <Field label="密码" type="password" ref={this.password}></Field>

                <button onClick={() => {
                    console.log(this.username.current.state.value, this.password.current.state.value)
                }}>登录</button>

                <button onClick={() => {
                    this.username.current.clear()
                    this.password.current.clear()
                }}>取消</button>
            </div>
        )
    }
}
