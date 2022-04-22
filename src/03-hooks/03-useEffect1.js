import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function APP() {

    const [list, setList] = useState([])
    // 像componentDidMount(){}
    useEffect(() => {
        axios.get('/test.json').then(res => {
            console.log(res.data)
            setList(res.data.data.films)
        })
    }, []) // 空数组
    return (
        <div>
            {list.map(v =>
                <li key={v.filmId}>{v.name}</li>)}
        </div>
    )
}



/*
1. 状态更新完之后，会让整个APP()执行一遍
2. useEffect()接收两个参数，第一个参数是回调函数，第二个参数是数组
3. 如果第二个参数是空数组，表示回调只会执行一次
*/ 