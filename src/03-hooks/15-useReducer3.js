import React, { useState, useEffect, Component, useContext, useReducer } from 'react'
import axios from 'axios'
import './css/04-css.css'

// 状态管理函数
const reducer = (prevState, action) => {
    console.log(prevState, action)
    let newstate = { ...prevState }
    switch (action.type) {
        case "get":
            newstate.filmLists = action.value
            return newstate
        case "change":
            newstate.info = action.value
            return newstate
        default:
            return prevState
    }
}

// 状态
const intialState = {
    info: "",
    filmLists: []
}


// 创建context对象
const GlobalContext = React.createContext()
export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        axios.get('/test.json').then((res) => {
            dispatch({
                type: 'get',
                value: res.data.data.films
            })
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch,
        }}>
            <div>
                {state.filmLists.map(v =>
                    <Film key={v.filmId} {...v}></Film>
                )}
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}


function Film(props) {
    let { name, poster, grade, synopsis } = props
    const { dispatch } = useContext(GlobalContext)  // **********

    return <div className='filmitem' onClick={() => {
        dispatch({
            type: 'change',
            value: synopsis
        })

    }}>
        <img src={poster} alt="lll"></img>
        <h4>{name}</h4>
        <div>观众评分: {grade}</div>
    </div>
}

function FilmDetail() {
    const { state } = useContext(GlobalContext)  // **********

    return <div className='filmdetail'>
        <div >{state.info}</div>
    </div>
}

/*
useReducer usecontext:
在外部进行状态管理
*/


