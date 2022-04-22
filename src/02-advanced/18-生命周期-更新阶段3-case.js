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
        list: []
    }
    componentDidMount() {
        if (this.props.type === 1) {
            console.log('正在热映')
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=970530',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data)
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
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.type === 1) {
            console.log('正在热映')
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=970530',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data)
                this.setState({
                    list: res.data.data.films
                })
            })
        } else {
            console.log('即将上映')
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
            <ul>
                {this.state.list.map(v =>
                    <li key={v.filmId}>{v.name}</li>)}
            </ul>
        </div>
    }
}