import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
// import store from './redux/store'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {/* 组件路由部分 */}
                <MRouter>
                    {this.props.isshow && <Tabbar></Tabbar>}
                </MRouter>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isshow: state.TabbarReducer.show
    }
}
export default connect(mapStateToProps)(App)
// 返回值的对象会带在App的props里