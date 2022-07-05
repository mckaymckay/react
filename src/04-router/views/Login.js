import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Login() {
    const history = useHistory()
    const handleClick = () => {
        console.log(history)
        localStorage.setItem('token', '123')
        history.push(`/center`)
    }
    return (
        <div>
            <input type='text' ></input>
            <button onClick={() => handleClick()}>登录</button>
        </div>
    )
}


