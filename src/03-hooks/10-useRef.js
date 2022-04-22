import React, { useState, useRef } from 'react'

export default function APP() {
    // const [text, settext] = useState("")
    const [list, setlist] = useState(['aaa', 'bbb', 'ccc'])
    const myref = useRef()

    const handleAdd = (text) => {
        console.log(myref.current.value)
        setlist([...list, myref.current.value])
        myref.current.value = ""
        // settext("")
    }
    const handleDelete = (i) => {
        // 不能直接修改list
        var newlist = [...list]
        newlist.splice(i, 1)
        setlist(newlist)
    }
    return (
        <div>
            <input ref={myref} onChange={(evt) => {
            }}></input>
            <button onClick={() => {
                handleAdd()
            }}>Add</button>
            <ul>
                {list.map((v, index) =>
                    <li key={index}>{v} <button onClick={() => handleDelete(index)}>Del</button></li>)}
            </ul>
            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}
