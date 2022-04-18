import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{ background: "red", height: '30px', textAlign: 'center', lineHeight: '30px', color: "white" }}>
                <button style={{ float: 'left' }} >Click</button>
                <span>卖座电影</span>
                <button style={{ float: "right" }} onClick={() => {
                    this.props.myevent()
                }}>Center</button>
            </div>
        )
    }
}
