import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


export default class APP extends Component {
    render() {
        return (
            <div>
                {/* 类组件 传递属性*/}
                <Navbar></Navbar>
                {/* 函数式组件 传递属性 通过形参 */}
                <Sidebar bg="red"></Sidebar>
            </div>
        )
    }
}
