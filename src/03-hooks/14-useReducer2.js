import React, { useReducer, useContext } from 'react'

// 函数
const reducer = (prevState, action) => {
    console.log(111, prevState, action)
    let newstate = { ...prevState }
    switch (action.type) {
        case 'a':
            newstate.a++
            return newstate
        case 'b':
            newstate.b = action.value
            return newstate
        default:
            return prevState
    }
}
// 初始状态(对象)
const intialState = {
    a: 1,
    b: 2
}


// 注意：reducer要创建在根组件中
// 配合useContext将状态传到子组件中
const GlobalContext = React.createContext()
export default function APP() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </GlobalContext.Provider>

    )
}

function Child1() {
    const { dispatch } = useContext(GlobalContext)
    return <div>
        <button onClick={() => {
            dispatch({
                type: 'a'
            })
        }}>改变a</button>
        <button onClick={() => {
            dispatch({
                type: 'b',
                value: '22222'
            })
        }}>改变b</button>
    </div>
}

function Child2() {
    const { state } = useContext(GlobalContext)
    return <div>
        child2-{state.a}
    </div>
}

function Child3() {
    const { state } = useContext(GlobalContext)
    return <div>
        child3-{state.b}
    </div>
}


/*
注意：reducer要创建在根组件中
在子组件中，配合useContext将状态传到子组件中
*/