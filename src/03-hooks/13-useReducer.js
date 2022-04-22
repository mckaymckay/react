import React, { useReducer } from 'react'

// 状态 处理函数
const reducer = (prevState, action) => {
    console.log('reducer', prevState, action)
    let newstate = { ...prevState }  // 保留原状态,深复制
    switch (action.type) {
        case 'minus':
            newstate.count--
            return newstate
        case 'add':
            newstate.count++
            return newstate
        default:
            return prevState
    }
}
// 外部的状态(对象)
const intialState = {
    count: 0
}

export default function APP() {
    const [state, dispatch] = useReducer(reducer, intialState)
    // dispatch 改变状态的方法，不过是按照低耦合的方法，不直接改变状态
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'minus'
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: 'add'
                })
            }}>+</button>
        </div>
    )
}

/*
useReducer(){}
在组件外部实现状态管理
*/
