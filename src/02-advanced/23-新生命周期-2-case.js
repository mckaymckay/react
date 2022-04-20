import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    myref = React.createRef()

    // getSnapshotBeforeUpdate() should be used with componentDidUpdate().
    getSnapshotBeforeUpdate() {
        // 获取容器高度
        console.log(this.myref.current.scrollHeight)
        return this.myref.current.scrollHeight
    }
    componentDidUpdate(prevProps, prevState, value) {
        this.myref.current.scrollTop = this.myref.current.scrollHeight - value

    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        list: [...[10, 11, 12, 13, 14, 15, 16, 17, 18], ...this.state.list]
                    })
                }}>新邮件</button>
                <div ref={this.myref} style={{ height: '500px', overflow: 'auto' }}>
                    <ul>
                        {this.state.list.map(v =>
                            <li key={v} style={{ background: "gray", color: 'white', height: '100px', borderBottom: '1px solid white' }}>{v}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
