import React, { useEffect } from 'react'
import store from '../redux/store'

export default function Detail(props) {

    useEffect(() => {
        // 1. 动态路由
        console.log(props.match.params.filmid, '利用id去后端拿数据')
        // 2. query传参
        // console.log(props.location.query.myid, '利用id去后端拿数据')
        // store.dispatch 触发
        store.dispatch({
            type: 'hide-tabbar'
        })
        return () => {
            store.dispatch({
                type: 'show-tabbar'
            })
        }
    }, [])

    return (
        <div>Detail
        </div>
    )
}
