import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 组件路由部分 */}
                <MRouter>
                    <Tabbar></Tabbar>
                </MRouter>

            </div>
        )
    }
}
