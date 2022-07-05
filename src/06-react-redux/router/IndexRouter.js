import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Center from '../views/Center'
import Films from '../views/Films'
import Cinema from '../views/Cinema'
import Notfound from '../views/Notfound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'




export default class IndexRouter extends Component {
    isAuth = () => {
        return localStorage.getItem('token')
    }
    render() {
        return (
            <Router>

                <Switch>
                    <Route path="/cinema" component={Cinema} exact></Route>
                    <Route path="/cinema/search" component={Search}></Route>
                    <Route path="/films" component={Films}></Route>
                    {/* 路由拦截 或者 路由守卫 */}
                    <Route path="/center" render={(props) => {
                        return this.isAuth() ? <Center /> : <Redirect to="/login" />
                    }}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/city" component={City}></Route>


                    {/* 1. 动态路由 推荐 */}
                    <Route path="/detail/:filmid" component={Detail}></Route>
                    {/* 2. query传参 */}
                    {/* <Route path="/detail" component={Detail}></Route> */}
                    <Redirect from="/" to="/films" exact></Redirect> {/* 精准匹配 exact */}


                    {/* <Redirect from="/" to="/films"></Redirect> */} {/* 模糊匹配 */}
                    <Route component={Notfound}></Route>

                </Switch>
                {this.props.children}

            </Router>
        )
    }
}
