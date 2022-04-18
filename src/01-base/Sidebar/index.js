import React from 'react'


// 用函数组件 写 Sidebar，实现侧边栏
export default function Sidebar(props) {
    // 形参
    console.log(props)
    let { bg } = props
    return (
        <div>
            <ul style={{
                background: bg,
                width: "100px"
            }}>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
            </ul>
        </div>
    )
}

// 做验证和默认值只能这么来写
// Sidebar.propTypes
// Sidebar.defaultProps
