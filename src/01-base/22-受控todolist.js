import React, { Component } from 'react'
import './css/02-css.css'

export default class APP extends Component {
    // myref = React.createRef()
    state = {
        list: [{
            id: 1,
            text: "aa",
            isChecked: false
        }, {
            id: 2,
            text: "bb",
            isChecked: true
        }, {
            id: 3,
            text: "cc",
            isChecked: false
        }],
        mytext: ""
    }
    render() {
        return (
            <div>
                {/* 将mytext 与 value 同步, value就是state, state就是value */}
                <input value={this.state.mytext} onChange={(evt) => {
                    this.setState({
                        mytext: evt.target.value
                    })
                }}></input>
                <button onClick={this.handleClick}>add</button>

                <ul>
                    {this.state.list.map((v, index) =>
                        <li key={v.id}>
                            <input type="checkbox" checked={v.isChecked} onChange={() => { this.handleCheck(index) }}></input>
                            {/* ********** */}
                            <span style={{ textDecoration: v.isChecked ? "line-through" : "" }}> {v.text} </span>
                            {/* 把 checkbox 变成受控的 */}
                            <button onClick={() => {
                                this.handleDelete(index)
                            }}>
                                delete
                            </button>
                        </li>
                    )
                    }
                </ul>
                {/* 暂无待办事项的显隐 1-2-3 */}
                {this.state.list.length ? null : <div>暂无待办事项1</div>}
                {this.state.list.length === 0 && <div>暂无待办事项2</div>}
                <div className={this.state.list.length ? 'hidden' : null}>暂无待办事项3</div>
            </div >
        )
    }
    // 点击'添加'
    handleClick = () => {
        let newlist = [...this.state.list]  // 深拷贝
        newlist.push({
            id: Math.random() * 10000000,
            text: this.state.mytext,
            isChecked: false
        })
        this.setState({
            list: newlist,
            mytext: ""  // 清空输入框
        })

    }
    // 点击'完成'
    handleCheck(index) {
        // 重新render, 改变list
        let newlist = [...this.state.list]  // 深拷贝
        newlist[index].isChecked = !newlist[index].isChecked
        this.setState({
            list: newlist
        })
    }

    // 点击'删除'
    handleDelete(index) {
        let newlist = this.state.list.slice()
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })
    }
}

