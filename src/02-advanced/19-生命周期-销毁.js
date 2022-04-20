import React, { Component } from 'react'

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
                }}>click</button>
                {/* {this.state.create ? <Child></Child> : ""} */}
                {this.state.create && <Child></Child>}
            </div>
        )
    }
}


class Child extends Component {

    componentDidMount() {
        // 1. 组件被销毁之后，绑定在window窗口上的事件不会被销毁
        window.onresize = () => {
            console.log('componentDidMount', 'resize')
        }
        // 2. setInterval也是绑在window上的
        // 使用this关键字，是挂载在Child上的一个属性，这样在另外的函数外也可以拿到这个定时器
        this.timer = setInterval(() => {
            console.log(111)
        }, 1000)
    }
    // 销毁
    componentWillUnmount() {
        console.log(' componentWillUnmount')
        // 解绑
        window.onresize = null
        // 清除定时器
        clearInterval(this.timer)
    }
    render() {
        return <div>
            child
        </div>
    }
}

/*
componentWillUnmount(){}: 在删除组件之前进行清理工作，比如计时器和事件监听器
*/

