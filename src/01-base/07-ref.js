import React, { Component } from 'react'

export default class APP extends Component {
    aaa = 10
    myRef = React.createRef()
    render() {
        return (
            <div>
                {/* 111 */}
                <input ref={this.myRef}></input>

                {/* 222 这种方法已经要被弃用了 */}
                {/* <input ref='myref1'></input> */}
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }

    handleClick = () => {
        console.log('click', this.myRef.current.value)
        // 下边这种方法已经要被弃用了
        // console.log('click', this.refs.myref1)
    }

}