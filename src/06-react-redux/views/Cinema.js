import React, { Component, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import store from '../redux/store'
import getCinemaListsAction from '../redux/actionCreator/getCinemaListsAction'
import { connect } from 'react-redux'


function Cinema(props) {

    let { cinemaLists, getCinemaListsAction } = props
    useEffect(() => {
        if (cinemaLists.length === 0) {
            console.log("去后端取数据, actionCreator里写异步")
            getCinemaListsAction() // 允许返回一个函数，thunk之前只能返回js对象
        } else {
            console.log("从 store 缓存中获取数据")
        }
    }, [getCinemaListsAction, cinemaLists])

    return (
        <div>
            <h2>Cinema</h2>
            <div style={{ overflow: 'hidden' }}>
                <div style={{ float: 'left' }} onClick={() => {
                    console.log(props.history)
                    props.history.push(`/city`)
                }}>{props.city}</div>
                <div style={{ float: 'right' }} onClick={() => {
                    props.history.push(`/cinema/search`)
                }}>搜索</div>
            </div>
            <div>
                {props.cinemaLists.map(v =>
                    <dl key={v.cinemaId} style={{ padding: '10px' }}>
                        <dt>{v.name}</dt>
                        <dd style={{ fontSize: '12px', color: 'gray' }}>{v.address}</dd>
                    </dl>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        cinemaLists: state.CinemaListReducer.cinemaLists,
        city: state.CityReducer.city
    }
}
const mapDispatchToProps = {
    getCinemaListsAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Cinema)

/*
这个页面使用store的时候没有store.subscribe
是因为city会跳入cinema页面，cinema页面重新render渲染加载页面，从store拿到最新的数据
*/ 