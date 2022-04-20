import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        text: '11111'
    }
    render() {
        console.log('render')
        return (
            <div>
                {this.state.text}
                <button onClick={() => {
                    this.setState({
                        text: '22222'
                    })
                }}>click</button>
            </div>
        )
    }
    // componentWillUpdate() {
    //     console.log("componentWillUpdate")
    // }
    componentDidUpdate(prevProps, prevState, value) {
        console.log("componentDidUpdate", value)
    }
    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate")
        return 100
    }
}


/*
getSnapshotBeforeUpdate 取代了componentWillUpdate，
触发时间为update发生的时候，在render之后DOM渲染之前返回一个值，作为componentDidUpdate的第三个参数
*/