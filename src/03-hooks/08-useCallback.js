import React, { useState, useCallback } from 'react'

export default function APP() {
    const [text, settext] = useState("")
    const [list, setlist] = useState(['aaa', 'bbb', 'ccc'])

    const handleChange = useCallback((evt) => {
        settext(evt.target.value)
    }, [])

    const handleAdd = useCallback(
        () => {
            setlist([...list, text])
            settext("")
        },
        [text, list]
    )

    const handleDelete = useCallback((i) => {
        // 不能直接修改list
        var newlist = [...list]
        newlist.splice(i, 1)
        setlist(newlist)
    }, [list])
    return (
        <div>
            <input value={text} onChange={(evt) => handleChange(evt)}></input>
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

/*
useCallback(()=>{},[name])
1. 只有name改变后，这个函数才会重新声明一次
2. 如果传入空数组，那么就是第一次创建后就被缓存，如果name后期改变了，拿到的还是老的name
3. 如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name
*/