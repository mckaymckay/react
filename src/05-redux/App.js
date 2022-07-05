import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import store from './redux/store'

export default class App extends Component {

    state = {
        isshow: store.getState().TabbarReducer.show
    }
    // store.subscribe 订阅
    componentDidMount() {
        store.subscribe(() => {
            console.log('app中 订阅', store.getState())
            this.setState({
                isshow: store.getState().TabbarReducer.show
            })
        })
    }
    render() {
        return (
            <div>
                {/* 组件路由部分 */}
                <MRouter>
                    {this.state.isshow && <Tabbar></Tabbar>}
                </MRouter>
            </div>
        )
    }
}
