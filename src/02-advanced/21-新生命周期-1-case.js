import React, { Component } from 'react'
import axios from 'axios'

export default class APP extends Component {
    state = {
        type: 1
    }
    render() {
        return (
            <div>
                <ul style={{ listStyle: "none", display: 'flex', textAlign: 'center' }}>
                    <li style={{ flex: 1, borderRight: '1px solid gray' }} onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>正在热映</li>
                    <li style={{ flex: 1 }} onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>即将热映</li>
                </ul>
                <Filmlist type={this.state.type}></Filmlist>
            </div>
        )
    }
}


class Filmlist extends Component {
    state = {
        list: [],
        type: 1
    }
    componentDidMount() {
        console.log('componentDidMount')
        if (this.props.type === 1) {
            console.log('正在热映')
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=970530',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                this.setState({
                    list: res.data.data.films
                })
            })

        } else {
            console.log('即将上映', 11)
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8396987',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521","bc":"110100"}',
                    'X-Host': ' mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data)
                this.setState({
                    list: res.data.data.films
                })
            })
        }

    }
    // 属性值转换为自己的状态， 配合"componentDidUpdate"获取数据
    // 不能进行axios请求，因为axios是异步的，return是同步的，会立即执行，可能还没有数据就return了
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps', nextProps)
        // console.log(this)

        return {
            // 会合并多次传过来的状态，解决多次获取的问题
            type: nextProps.type
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.type)
        // if (this.state.type === 老的state) {
        //     return
        // }
        if (this.state.type === prevState.type) {
            return
        }
        if (this.props.type === 1) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=970530',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                this.setState({
                    list: res.data.data.films
                })
            })

        } else {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8396987',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521","bc":"110100"}',
                    'X-Host': ' mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data)
                this.setState({
                    list: res.data.data.films
                })
            })
        }

    }
    render() {
        return <div>

            child-{this.props.type}
            <div>
                <ul>
                    {this.state.list.map(v => <li key={v.filmId}>{v.name}</li>)}
                </ul>
            </div>
        </div>
    }
}


/*
componentWillReceiveProps(){} 多次频繁更新传入多次不同的props，会导致不必要的异步请求
------------------------------------------------------------
getDerivedStateFromProps(){} 可以代替componentWillReceiveProps
1. 初始化会执行一次
2. 每次state变化都会执行一次
3. 每次父传子也都会执行一次
4. getDerivedStateFromProps(){}将属性转化为状态，在componentDidUpdate(){}进行数据请求
*/