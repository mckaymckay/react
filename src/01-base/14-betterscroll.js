import React, { Component } from 'react'
// import BetterScroll from '@better-scroll/core'
import BetterScroll from 'better-scroll'

export default class APP extends Component {
    state = {
        list: []
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleBuild()} >build</button>
                <div className='wrapper' style={{ height: '200px', background: 'yellow', overflow: 'hidden' }}>
                    <ul className='content'>
                        {
                            this.state.list.map(v => <li key={v}>{v}</li>)
                        }
                    </ul>
                </div>
            </div >
        )
    }
    handleBuild() {
        var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
        // this.setState({
        //     list: list
        // }, () => {
        //     console.log(this.state.list)
        //     new BetterScroll('.wrapper')
        // })
        setTimeout(() => {
            this.setState({
                list: list
            })
            new BetterScroll('.wrapper')
        }, 0)


    }
}
