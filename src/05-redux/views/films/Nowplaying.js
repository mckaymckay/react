import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Nowplaying(props) {
    const [filmList, setList] = useState([])

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4908750',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data.data.films)
            setList(res.data.data.films)
        })
    }, [])

    const history = useHistory()
    const handleClick = (id) => {
        // b. 编程式导航
        // window.location.href = '#/detail/' + id
        // c. react页面跳转
        // props.history.push(`/detail/${id}`) 
        // d. hooks封装的history, 1. 动态路由传参
        history.push(`/detail/${id}`)
        // 2. query传参
        // history.push({ pathname: '/detail', query: { myid: id } })
        // 3. state传参
        // history.push({ pathname: '/detail', state: { myid: id } })
    }
    return (
        <div>
            <ul>
                {filmList.map(v =>

                    // 1. props继续往下传
                    // 
                    // 2. 借助withRouter
                    <WithFilmItem key={v.filmId} {...v}></WithFilmItem>
                )}
            </ul>
        </div>
    )
}


function FilmItem(props) {
    let { name, filmId } = props
    // props是父组件 的父组件传过来的 
    const history = useHistory()
    // console.log(props)
    return <div>
        <li onClick={() => {
            console.log(filmId)
            history.push(`/detail/${filmId}`)
        }}>
            {name}
            {/* <NavLink to={'/detail/' + v.filmId}>{v.name}</NavLink> */}
        </li>
    </div>
}

const WithFilmItem = withRouter(FilmItem)
