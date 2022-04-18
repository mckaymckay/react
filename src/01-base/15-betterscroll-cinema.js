import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class Cinema extends Component {
    state = {
        cinemaList: [],
        allData: []
    }

    // 请求数据¥
    constructor() {
        super()
        //  axios请求数据,
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
                allData: res.data.data.cinemas
            }, () => {
                // new BScroll('.wrapper')
            })
            // axios本身就是异步的，所以这里直接new就可以执行
            new BScroll('.wrapper')
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <input onInput={this.handleInput}></input>
                <div className='wrapper' style={{ height: "500px", background: 'yellow', overflow: 'hidden' }}>
                    <div className='content'>
                        {this.state.cinemaList.map(v => <dl key={v.cinemaId}>
                            <dd>{v.name}</dd>
                            <dt>{v.address}</dt>
                        </dl>)}
                    </div>

                </div>


            </div>
        )
    }
    handleInput = (event) => {
        let val = event.target.value
        let newList = this.state.allData.filter(v => v.name.toUpperCase().includes(val.toUpperCase()) ||
            v.address.toUpperCase().includes(val.toUpperCase()))
        console.log(val, newList)
        this.setState({
            cinemaList: newList
        })
    }
}
