import React, { Component } from 'react'

export default class APP extends Component {
    myref = React.createRef()
    state = {
        list: [
            {
                id: 1,
                text: "aa"
            }, {
                id: 2,
                text: "bb"
            }, {
                id: 3,
                text: "cc"
            }
        ],
        myhtml: '<div>这是一个html</div>'
    }
    render() {
        return (
            <div>
                <input ref={this.myref}></input>
                <button onClick={this.handleAdd}>add</button>
                <ul>
                    {this.state.list.map((v, index) => <li key={v.id}>{v.text}<button onClick={() => {
                        this.handleDelete(index)
                    }}>delete</button></li>)}
                </ul>
                {this.state.list.length ? null : <div div > 暂无待办事项</div>}
                {/* 富文本展示 */}
                <div dangerouslySetInnerHTML={
                    {
                        __html: this.state.myhtml
                    }
                }></div>
            </div >
        )
    }
    handleAdd = () => {
        let newList = [...this.state.list]
        newList.push({
            id: Math.random() * 10000000,
            text: this.myref.current.value
        })
        this.setState({
            list: newList
        })
        this.myref.current.value = ""
    }

    handleDelete(index) {
        let newList = this.state.list.concat()
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
}
