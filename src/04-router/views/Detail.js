import React, { useEffect } from 'react'

export default function Detail(props) {
    // 1. 动态路由
    console.log(props.match.params.filmid, '利用id去后端拿数据')
    // 2. query传参
    // console.log(props.location.query.myid, '利用id去后端拿数据')
    useEffect(() => {
        console.log('create')
        return () => {
            console.log('destroy')
        }
    }, [])

    return (
        <div>Detail
        </div>
    )
}
