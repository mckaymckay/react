import React, { useState, useEffect, Component } from 'react'

export default class APP extends Component {
    state = {
        create: true
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        create: !this.state.create
                    })
                }}>Destroy</button>
                {this.state.create && <Child2></Child2>}
            </div>
        )
    }
}


function Child2() {

    useEffect(() => {
        window.onresize = () => {
            console.log('componentDidMount', 'resize')
        }
        var timer = setInterval(() => {
            console.log(111)
        }, 1000)
        return () => {
            console.log('destroy')
            window.onresize = null
            clearInterval(timer)
        }

    }, [])
    // 这么写的前提是没有依赖
    // 没有依赖的话，销毁函数只执行一次，在组件关闭之前执行一次
    // 如果有依赖的话，每次依赖改变，销毁函数都会执行
    return <div>
        child
    </div>
}

/*
useEffect(callback, [dependencies])：返回一个函数，类似于闭包
callback是包含副作用逻辑的函数，在每次DOM更新之后callback会执行
dependencies是一个可选的依赖数组。useEffect()只有在渲染之间的依赖项发生变化时候才会执行callback
*/
