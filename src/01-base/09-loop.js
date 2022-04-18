import React, { Component } from 'react'

export default class APP extends Component {
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
        // 也可以定义一个变量
        // var newlist = this.state.list.map(v => <li>{v}</li>)
        return (
            <div >
                {/* {newlist} */}
                {this.state.list.map(v => <li key={v.id}>{v.text}</li>)}
            </div >
        )
    }
}
// 原声js: map
var list = ["aa", "bb", "cc"]
var newlist = list.map(v => `<li>${v}</li>`)
console.log(newlist)
