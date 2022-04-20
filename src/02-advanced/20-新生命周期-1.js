import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        myname: 'mckay',
        age: 20
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    //  componentWillMount 初始化、自身更新、父传子  都会执行
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps', nextState.myname)
        return {
            // 会更改state的值
            myname: nextState.myname.substring(0, 1).toUpperCase() + nextState.myname.substring(1)
        }
    }
    render() {
        console.log('render', this.state.myname)
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: 'dameng'
                    })
                }}>click</button>
                app-{this.state.myname}-{this.state.age}
            </div>
        )
    }
}
