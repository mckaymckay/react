import React, { Component } from 'react'

// 组件嵌套
class Navbar extends Component {
    render() {
        return (
            <div>Navbar
                <Child></Child>
            </div>
        )
    }
}
function Swiperbar() {
    return <div>Swiperbar</div>
}
const Tabbar = () => {
    return <div>Tabbar</div>
}
const Child = () => <div>Child</div>

export default class APP extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiperbar></Swiperbar>
                <Tabbar></Tabbar>
            </div>

        )
    }
}
/*
组件嵌套：
1. 每个组件内部只嵌套它的儿子组件
2. 嵌套组件的类型一致，都是类组件或者都是函数组件
3. 箭头函数
*/
