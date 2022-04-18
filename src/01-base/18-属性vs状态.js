import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    // 属性可以由父组件进行修改，子组件不能修改
                    // this.props.text = "33333"

                }}>click-子</button>
                {this.props.text}
            </div>
        )
    }
}

export default class APP extends Component {
    state = {
        text: '1111111111'
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    // 状态修改
                    this.setState({
                        text: '2222222222'
                    })
                }}>click-父</button>
                <Child text={this.state.text}></Child>
            </div>
        )
    }
}
/*
1. 属性能从父组件获取，状态不能
2. 属性可以由父组件修改，状态不能
3. 组件不能由子组件进行修改，状态要在组件内部修改
*/