import React, { Component } from 'react'


class Navbar extends Component {
    render() {
        return (
            <div style={{ background: "red" }}>
                <button onClick={() => {
                    this.props.event()
                }}>click</button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{ background: 'yellow', width: '100px' }}>
                <ul>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                </ul>
            </div>
        )
    }
}

export default class APP extends Component {
    // 状态 state 只能在此组件内部使用
    state = {
        isShow: true
    }
    render() {
        return (
            <div>
                <Navbar event={this.handleClick}></Navbar>
                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

/*
父传子： 属性
子传父：回调函数
*/

