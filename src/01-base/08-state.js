import React, { Component } from 'react'

export default class APP extends Component {
    // 方式一:
    // state = {
    //     mytext: "收藏",
    //     myshow: true
    // }
    // 方式二:
    constructor() {
        super()
        this.state = {
            mytext: "收藏",
            myshow: true
        }
    }
    render() {
        return (
            <div>
                <h1>state初体验</h1>
                <p>方法一:</p>
                <button onClick={() => {
                    this.setState({
                        mytext: "取消收藏"
                    })
                }}>{this.state.mytext}
                </button>
                <p>方法二:</p>
                <button onClick={() => {
                    this.setState({
                        myshow: !this.state.myshow
                    })
                    if (this.state.myshow) {
                        console.log('收藏的逻辑')
                    } else {
                        console.log("取消收藏的逻辑")
                    }
                }}>{this.state.myshow ? "收藏" : "取消收藏"}</button>
            </div>
        )
    }
}
