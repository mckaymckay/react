import React, { useState, useEffect, useCallback, useMemo, Component } from 'react'
import axios from 'axios'




export default function Cinema() {

    const [cinemaList, setcinemaList] = useState([])
    const [mytext, setmytext] = useState("")
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9679834",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data.data)
            setcinemaList(res.data.data.cinemas)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    // useMemo()返回结果, 根据[cinemaList, mytext]的改变重新返回计算结果
    const getCinemaList = useCallback(() => {
        return cinemaList.filter(v => v.name.toUpperCase().includes(mytext.toUpperCase()) ||
            v.address.toUpperCase().includes(mytext.toUpperCase()))
    }, [cinemaList, mytext])


    return <div>
        <input value={mytext} onChange={(evt) => {
            setmytext(evt.target.value)
        }}></input>
        {getCinemaList().map(v => <dl key={v.cinemaId}>
            <dd>{v.name}</dd>
            <dt>{v.address}</dt>
        </dl>)}
    </div>

}
