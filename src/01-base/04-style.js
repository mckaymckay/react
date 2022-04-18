import React, { Component } from 'react'
import './css/01-css.css'   // 倒入css文件， webpack支持的这种写法
// 组件样式
export default class App extends Component {
    render() {
        var age = 10
        var obj = {
            backgroundColor: 'green',
            fontSize: "35px"
        }
        return (
            <div>
                {10 + 20}-{age}
                {10 < 20 ? 'aaa' : 'bbb'}
                <div style={obj}>11111</div>
                {/* 注意这里的两个括号，第一个表示我们要在jsx里边插入js了，第二个是对象的括号 */}
                <div style={{ background: 'yellow' }}>22222</div>
                <div className='one'>33333</div>
                <div id='two'>44444</div>
                <label htmlFor='username'>用户名：</label>
                <input type="text" id='username'></input>
            </div>
        )
    }
}

/*
组件样式：
1.  {}内部才是js地盘，可以放一些表达式，不可以放语句，如if-else
2. 样式：可以用对象表示行内样式，可以外部引用
3. 样式的backgroundColor用驼峰写法
4. 类名写成className，for写成htmlFor，避免js关键字
*/