import React, { useState } from 'react'

export default function APP() {
    const [count, setcount] = useState(0)
    var num = 0
    return (
        <div>
            <div>{count}-{num}</div>
            <button onClick={() => {
                setcount(count + 1)
                num++
            }}>+1</button>
        </div>
    )
}
