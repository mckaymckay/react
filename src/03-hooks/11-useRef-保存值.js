import React, { useState, useRef } from 'react'

export default function APP() {
    const [count, setcount] = useState(0)
    // var num = 0
    var num = useRef(0)
    console.log(num)
    return (
        <div>

            <div>{count}-{num.current}</div>
            <button onClick={() => {
                setcount(count + 1)
                // num++
                num.current++
            }}>+1</button>
        </div>
    )
}


/*
useRef()作用：
1. 保存临时变量，保证它不丢失，是闭包的原理
2. 用在组件上，进行组件通信或原生节点的访问
*/