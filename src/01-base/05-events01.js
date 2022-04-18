import React, { Component } from 'react'

export default class APP extends Component {
    aaa = 10
    render() {
        return (
            <div>
                <input></input>
                <button onClick={() => { console.log('click1', this.aaa) }}>add1</button>
                <button onClick={this.handleClick1}>add2</button>
                <button onClick={this.handleClick2}>add3</button>
                <button onClick={() => {
                    this.handleClick4()
                }}>add4</button>
            </div>
        )
    }

    handleClick1() {
        console.log('click2', this)
    }
    handleClick2 = () => {
        console.log('click3', this)
    }
    handleClick4() {
        console.log('click4', this)
    }
}

/*
 函数处理的4种方法：
1. 当逻辑处理比较麻烦时，不建议第一种方法
2. 第二种方法不能带括号，不推荐这种写法，this值需要改变比较麻烦
3. 第三种方法是按照ES7种，类中变量的新定义方式 ***** 推荐
4. 第四种方式必须带括号 -- 比较推荐，传参方便
*/
/*
React并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式
冒泡事件， 节省内存 
*/