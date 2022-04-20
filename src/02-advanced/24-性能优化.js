import React, { PureComponent } from 'react'

export default class APP extends PureComponent {
    state = {
        myname: 'dachui'
    }
    UNSAFE_componentWillUpdate() {
        console.log('UNSAFE_componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // return true    // 应该更新
    //     // return false   // 阻止更新
    //     // this.state     // 老状态
    //     // this.nextState // 新状态

    //     // 1. 如果只有一个值，可以这么判断
    //     if (nextState.myname !== this.state.myname) {
    //         return true
    //     }
    //     // 2. 如果有多个值，把对象转换为字符串，判断
    //     if (JSON.stringify(nextState) !== JSON.stringify(this.state)) {
    //         return true
    //     }
    //     return false
    // }
    render() {
        console.log('render')
        return (
            <div>
                {this.state.myname}
                <button onClick={() => {
                    this.setState({
                        myname: 'dameng'
                    })
                }}>click</button>
            </div>
        )
    }
}

/*
性能优化: PureComponent
PureComponent会自动比较新的 props 和旧的 props， 新的 state 和旧的 state（值相等或者对象含有相同的属性、且属性值相等），
决定 shouldComponentUpdate 返回true 或 false，从而决定要不要呼叫 render function

注意：
如果 state 或 props 永远都会变，那 PureComponent 并没有很快

*/
