import React, { Component } from 'react'
import './css/02-css.css'

export default class APP extends Component {
    myref = React.createRef()
    state = {
        list: [{
            id: 1,
            text: "aa"
        }, {
            id: 2,
            text: "bb"
        }, {
            id: 3,
            text: "cc"
        }]
    }
    render() {
        return (
            <div>
                <input ref={this.myref}></input>
                <button onClick={this.handleclick}>add</button>

                <ul>
                    {this.state.list.map((v, index) => <li key={index}>{v.text} <button onClick={() => { this.handledelete(index) }}>delete</button> </li>)}
                </ul>
                {/* 暂无待办事项的显隐 1-2-3 */}
                {this.state.list.length ? null : <div>暂无待办事项1</div>}
                {this.state.list.length === 0 && <div>暂无待办事项2</div>}
                <div className={this.state.list.length ? 'hidden' : null}>暂无待办事项3</div>
            </div>
        )
    }
    handleclick = () => {
        let newlist = [...this.state.list]  // 深拷贝
        newlist.push({
            id: Math.random() * 10000000,
            text: this.myref.current.value
        })
        this.setState({
            list: newlist
        })
        // 清空输入框
        this.myref.current.value = ''
    }

    handledelete(index) {
        let newlist = this.state.list.slice()
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })
    }
}

