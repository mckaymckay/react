import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
    state = {
        cinemaList: [],
        mytext: "" // 与输入框的value值绑定
        // allData: []
    }

    constructor() {
        super()
        //  axios请求数据
        // axios.get("").then(res => { }).catch(err => { })
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9679834",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            // console.log(res.data.data)
            this.setState({
                cinemaList: res.data.data.cinemas,
                // allData: res.data.data.cinemas
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {/* 把 input 变成一个受控的组件, 可以让它的值在input外部使用, 通信方便*/}
                {/* 把每次获得的输入框的 value 值都同步给 mytext */}
                {/* value 与 state绑定，value变化，state就变化，render就重新渲染 */}
                <input value={this.state.mytext} onChange={(evt) => {
                    this.setState({
                        mytext: evt.target.value
                    })
                }}></input>
                {/* 这个函数必须有一个返回值, 这里返回的是 cinemaList */}
                {this.getCinemaList().map(v => <dl key={v.cinemaId}>
                    <dd>{v.name}</dd>
                    <dt>{v.address}</dt>
                </dl>)}
            </div>
        )
    }
    getCinemaList() {
        // filter不会影响cinemaList
        return this.state.cinemaList.filter(v => v.name.toUpperCase().includes(this.state.mytext.toUpperCase()) ||
            v.address.toUpperCase().includes(this.state.mytext.toUpperCase()))
    }

}
