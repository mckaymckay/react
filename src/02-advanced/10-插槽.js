import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>Child
                {this.props.children}
            </div>

        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>111</div>
                </Child>
            </div>
        )
    }
}

/*
插槽的作用：
1. 组件复用
2. 一定程度上减少父子通信
*/
