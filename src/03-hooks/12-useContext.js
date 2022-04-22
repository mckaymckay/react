import React, { useState, useEffect, Component, useContext } from 'react'
import axios from 'axios'
import './css/04-css.css'

// 创建context对象
const GlobalContext = React.createContext()

export default function App() {

    const [filmLists, setfilmLists] = useState([])
    const [info, setinfo] = useState("")

    useEffect(() => {
        axios.get('/test.json').then((res) => {
            setfilmLists(res.data.data.films)
        })
    }, [])

    return (
        // 包裹在整个div的外面，固定的属性value
        <GlobalContext.Provider value={{
            text: 'Provider',
            info: info,
            changeInfo: (detail) => {
                setinfo(detail)
            }
        }}>
            <div>
                {filmLists.map(v =>
                    <Film key={v.filmId} {...v}></Film>
                )}
                <FilmDetail detail={info}></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}


function Film(props) {
    let { name, poster, grade, synopsis } = props
    const value = useContext(GlobalContext)  // **********
    console.log(value)
    return <div className='filmitem' onClick={() => {
        // value.info = "222"
        value.changeInfo(synopsis)
    }}>
        <img src={poster} alt="lll"></img>
        <h4>{name}</h4>
        <div>观众评分: {grade}</div>
    </div>
}

function FilmDetail() {
    const value = useContext(GlobalContext)  // **********
    return <div className='filmdetail'>
        <div >{value.info}</div>
    </div>
}

/*
useReducer usecontext 减少组件层级
provider 不需要变化
只改变consumer
*/


