import React, { Component } from 'react'

export default class Tabbar extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "电影"
            }, {
                id: 2,
                text: "影院"
            }, {
                id: 3,
                text: "我的"
            }
        ],
        current: this.props.defaultValue
    };
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((v, index) =>
                        <li key={v.id} className={this.state.current === index ? 'active' : ''} onClick={() => {
                            this.handleClick(index)
                        }}>{v.text}</li>
                    )}
                </ul>
            </div>
        )
    }

    handleClick(index) {
        this.setState({
            current: index
        })
        this.props.event(index)
    }
}

/*
this.setState执行之后，也就是state变化之, 会重新执行render()函数
*/
