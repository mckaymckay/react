import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>首页</h2>
                <Navbar title="首页" leftshow={false}></Navbar>
                <h2>列表</h2>
                <Navbar title="列表"></Navbar>
                <h2>购物车</h2>
                <Navbar title="购物车"></Navbar>
            </div>
        )
    }
}

/* 
注意变量 放在{}里面
*/