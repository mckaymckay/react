import React, { Component } from 'react'
import './css/03-options.css'
import Film from './options-components2/film'
import Cinema from './options-components2/cinema'
import Mine from './options-components2/mine'
import Tabbar from './options-components2/Tabbar'
import Navbar from './options-components2/Navbar'

export default class APP extends Component {
    state = {
        current: 0,
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
    };

    render() {
        return (
            <div>
                <Navbar myevent={() => {
                    this.setState({
                        current: 2
                    })
                }}></Navbar>
                {this.watch()}
                {/* <Film></Film>
                <Cinema></Cinema>
                <Mine></Mine> */}
                <Tabbar event={(index) => {
                    this.setState({
                        current: index
                    })
                }} current={this.state.current} list={this.state.list}></Tabbar>
            </div>
        )
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

/*
非受控组件，无法把current的值重复传给Tabbar组件，修改Tabbar的state的值，造成Tabbar非受控
*/

