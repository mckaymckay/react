import React, { useState, useEffect } from 'react'

export default function APP() {
    const [name, setName] = useState('dachui')
    useEffect(() => {
        setName(name.substring(0, 1).toUpperCase() + name.substring(1))
    }, [name])
    // 第一次执行一次，之后name(依赖)更新也会执行
    return (
        <div>
            {name}
            <button onClick={() => {
                setName('dameng')
            }}>click</button>
        </div>
    )
}
