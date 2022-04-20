import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class APP extends Component {
    state = {
        list: ['111', '222', '333', '444', '555', '666', '777', '888', '999', '000', '121', '122', '123', '124', '125', '126', '127', '128']
    }
    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount')
        // 优先级较低，执行过程中会被打断，不安全
    }
    componentDidMount() {
        new BetterScroll('#wrapper')
        // DOM创建完之后，进行 BetterScroll
        // 啦啦啦
    }
    render() {
        return (
            <div>
                <div id='wrapper' style={{ height: '200px', background: 'yellow', overflow: 'hidden' }}>
                    <ul>
                        {this.state.list.map(v =>
                            <li key={v}>{v}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
