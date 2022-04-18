import React, { Component } from 'react'

export default class APP extends Component {
    render() {
        return (
            <div>APP

            </div>
        )
    }
}

// 订阅中心
var bus = {
    // 存储订阅的回调函数
    list: [],
    // 订阅
    subscribe(callback) {
        this.list.push(callback)
    },
    // 发布
    publish(val) {
        // 遍历所有的回调函数，执行回调函数
        this.list.forEach(callback => {
            callback && callback(val)
        })

    }
}

// 订阅者, 执行订阅函数，把一个回调函数作为参数传进去
bus.subscribe((val) => {
    console.log(111, val)
})
bus.subscribe((val) => {
    console.log(222, val)
})

// 发布者(一般都是异步执行的) 
// setTimeout(() => {
//     bus.publish()
// }, 0);
// 如果发布者带着参数, 就是发布者发布的信息
setTimeout(() => {
    bus.publish('我发布信息了')
}, 0);
setTimeout(() => {
    bus.publish('我又发布信息了')
}, 1000);
