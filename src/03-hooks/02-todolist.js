import React, { useState } from 'react'

export default function APP() {
    const [text, settext] = useState("")
    const [list, setlist] = useState(['aaa', 'bbb', 'ccc'])
    const handleAdd = () => {
        setlist([...list, text])
        settext("")
    }
    const handleDelete = (i) => {
        // 不能直接修改list
        var newlist = [...list]
        newlist.splice(i, 1)
        setlist(newlist)
    }
    return (
        <div>
            <input value={text} onChange={(evt) => {
                settext(evt.target.value)
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
