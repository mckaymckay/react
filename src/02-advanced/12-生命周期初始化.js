import React, { Component } from 'react'

export default class APP extends Component {
    componentWillUnmount() {

        // 第一次上树前的，最后一次修改状态的机会
        // 初始化数据的作用
    }
    componentDidMount() {
        // 数据请求axios
        // 订阅函数调用
        // setInterval
        // 基于创建完的DOM进行初始化... BetterScroll(都没创建完之后才能执行)
    }
    render() {
        return (
            <div>APP</div>
        )
    }
}
