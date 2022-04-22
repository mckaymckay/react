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
    // 没有依赖的话，销毁函数只执行一次
    // 如果有依赖的话，每次依赖改变，销毁函数都会执行
    return <div>
        child
    </div>
}

/*
useEffect()返回一个函数，类似于闭包
*/
