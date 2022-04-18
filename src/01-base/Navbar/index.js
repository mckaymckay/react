import React, { Component } from 'react'
import mckayPropTypes from "prop-types"

console.log(mckayPropTypes)
export default class Navbar extends Component {
    a = 100 // 对象属性，new了才能访问到
    // ES7 的写法
    static propTypes = {
        title: mckayPropTypes.string,
        leftshow: mckayPropTypes.bool
    }
    static defaultProps = {
        leftshow: true
    }
    render() {
        let { title, leftshow } = this.props  // 解构

        return (
            <div>
                {leftshow && <button> 返回</button>}
                navbar-{title}
                <button>home</button>
            </div>
        )
    }
}

// 1. 接受参数的时候进行类型验证 //
// 类属性，不需要new就能获得的
// Navbar.propTypes = {
//     title: mckayPropTypes.string,
//     leftshow: mckayPropTypes.bool
// }

// 对象属性和类属性的区别
// 对象属性 new了才能访问到， 类属性可以直接访问到
// class Test {
//     a = 100  // 对象属性
// }
// Test.a = 10  // 类属性

// 在ES7中进行了优化，将类属性也放进对象里边，用static标识
class Test {
    a = 100  // 对象属性
    static a = 10  // 类属性
}


console.log(Test.a)
var obj = new Test()
console.log(obj.a)

// 2. 默认值
// Navbar.defaultProps = {
//     leftshow: true
// }