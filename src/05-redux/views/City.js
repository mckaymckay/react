import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import store from '../redux/store'

export default function City() {
    const [list] = useState(['北京', '长沙', '广州', '成都'])
    const history = useHistory()
    return (
        <div>
            <h2>City</h2>
            <ul>
                {list.map(v =>
                    <li onClick={() => {
                        console.log(v)
                        store.dispatch({
                            type: 'change-city',
                            cityName: v
                        })
                        // history.push(`/cinema`)
                        history.goBack()
                    }} key={v}>{v}</li>)}
            </ul>
        </div>
    )
}


/*
redux的值是存在内存中的，每次刷新，值会消失，需要redux的持久化存储来解决
*/