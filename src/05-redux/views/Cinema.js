import React, { Component, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import store from '../redux/store'
import getCinemaListsAction from '../redux/actionCreator/getCinemaListsAction'


export default function Cinema() {
    const [city] = useState(store.getState().CityReducer.city)
    const [cinemaLists, setcinemaLists] = useState(store.getState().CinemaListReducer.cinemaLists)
    const history = useHistory()
    useEffect(() => {
        if (store.getState().CinemaListReducer.cinemaLists.length === 0) {
            console.log("去后端取数据, actionCreator里写异步")
            // dispatch
            // actionCreator
            store.dispatch(getCinemaListsAction()) // 允许返回一个函数，thunk之前只能返回js对象


        } else {
            console.log("从 store 缓存中获取数据")
        }
        // 订阅
        var unsubscribe = store.subscribe(() => {
            console.log('cinema中订阅, 转换成状态, 更新页面', store.getState().CinemaListReducer.cinemaLists)
            setcinemaLists(store.getState().CinemaListReducer.cinemaLists)
        })
        return () => {
            // 取消订阅
            unsubscribe()
            // 只要有dispatch发生，所有的订阅者都会被触发，为了节约资源，避免不需要的订阅触发
        }
    }, [])

    return (
        <div>
            <h2>Cinema</h2>
            <div style={{ overflow: 'hidden' }}>
                <div style={{ float: 'left' }} onClick={() => {
                    console.log(history)
                    history.push(`/city`)
                }}>{city}</div>
                <div style={{ float: 'right' }} onClick={() => {
                    history.push(`/cinema/search`)
                }}>搜索</div>
            </div>
            <div>
                {cinemaLists.map(v =>
                    <dl key={v.cinemaId} style={{ padding: '10px' }}>
                        <dt>{v.name}</dt>
                        <dd style={{ fontSize: '12px', color: 'gray' }}>{v.address}</dd>
                    </dl>)}
            </div>
        </div>
    )
}


/*
这个页面使用store的时候没有store.subscribe
是因为city会跳入cinema页面，cinema页面重新render渲染加载页面，从store拿到最新的数据
*/ 