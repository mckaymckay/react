import React, { useState, useEffect, useMemo } from 'react'
import store from '../redux/store'
import getCinemaListsAction from '../redux/actionCreator/getCinemaListsAction'

export default function Search() {
    const [mytext, setmytext] = useState('')
    const [cinemaList, setcinemaLists] = useState(store.getState().CinemaListReducer.cinemaLists)
    useEffect(() => {
        if (store.getState().CinemaListReducer.cinemaLists.length === 0) {
            store.dispatch(getCinemaListsAction()) // 允许返回一个函数，thunk之前只能返回js对象
        } else {
            console.log("从 store 缓存中获取数据")
            // 如果有数据，上边state初始化的时候已经取到了
        }
        // 订阅
        var unsubscribe = store.subscribe(() => {
            console.log('search中订阅, 转换成状态, 更新页面')
            setcinemaLists(store.getState().CinemaListReducer.cinemaLists)
        })
        // 取消订阅
        return () => {
            unsubscribe()
        }
    }, [])
    const getCinemaList = useMemo(() => {
        return cinemaList.filter(v => v.name.toUpperCase().includes(mytext.toUpperCase()) ||
            v.address.toUpperCase().includes(mytext.toUpperCase()))
    }, [cinemaList, mytext])


    return (
        <div>
            <input value={mytext} onChange={(evt) => {
                setmytext(evt.target.value)
            }}></input>
            {getCinemaList.map(v => <dl key={v.cinemaId} style={{ padding: '10px' }}>
                <dt>{v.name}</dt>
                <dd style={{ fontSize: '12px', color: 'gray' }}>{v.address}</dd>
            </dl>)}
        </div>
    )
}
