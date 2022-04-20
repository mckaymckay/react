import React, { Component } from 'react'

class Child extends Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('UNSAFE_componentWillReceiveProps', this.props.name, nextProps.name)
        // 最先获得父组件传来的属性， 可以利用属性进行ajax或者逻辑处理
        // 把属性转化为孩子自己的状态
    }
    render() {
        console.log('render')
        return <div>child
            {this.props.current}
        </div>
    }
}

export default class APP extends Component {
    state = {
        myname: 'dachui'
    }
    render() {
        return (
            <div>
                {this.state.myname}
                <button onClick={() =>
                    this.setState({
                        myname: 'dameng'
                    })}>click</button>
                <Child name={this.state.myname}></Child>

            </div>
        )
    }
}


/*
UNSAFE_componentWillReceiveProps(){}: 只用在子组件里
父组件状态更新就会执行
*/