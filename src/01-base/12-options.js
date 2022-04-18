import React, { Component } from 'react'
import './css/03-options.css'
import Film from './options-components/film'
import Cinema from './options-components/cinema'
import Mine from './options-components/mine'

export default class APP extends Component {
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
        current: 0
    };

    render() {
        return (
            <div>
                {this.watch()}
                {/* <Film></Film>
                <Cinema></Cinema>
                <Mine></Mine> */}
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
    }
    watch = () => {
        // if (this.state.current === 0) return <Film></Film>
        // else if (this.state.current === 1) return <Cinema></Cinema>
        // else return <Mine></Mine>
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Mine></Mine>
            default:
                return null
        }
    }

}

