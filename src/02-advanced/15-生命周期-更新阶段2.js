import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        myname: 'dachui'
    }
    UNSAFE_componentWillUpdate() {
        console.log('UNSAFE_componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    shouldComponentUpdate(nextProps, nextState) {
        // return true    // 应该更新
        // return false   // 阻止更新
        // this.state     // 老状态
        // this.nextState // 新状态

        // 1. 如果只有一个值，可以这么判断
        if (nextState.myname !== this.state.myname) {
            return true
        }
        // 2. 如果有多个值，把对象转换为字符串，判断
        if (JSON.stringify(nextState) !== JSON.stringify(this.state)) {
            return true
        }
        return false
    }
    render() {
        console.log('render')
        return (
            <div>
                {this.state.myname}
                <button onClick={() => {
                    this.setState({
                        myname: 'dameng'
                    })
                }}>click</button>
            </div>
        )
    }
}

/*
性能优化函数 scu:
shouldComponentUpdate(nextProps, nextState) { }
state改变之后，是否要走更新的流程-willupdate-render-didupdate
*/
