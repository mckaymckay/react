import React, { useState } from 'react'


export default function APP() {
    const [name, setname] = useState('dachui')
    const [age, setage] = useState(18)
    return (
        <div>
            <button onClick={() => {
                setname('dameng')
                setage(20)
            }}>click</button>
            app-{name}-{age}
        </div>
    )
}
