import React, { Component } from 'react'
class Box extends Component {
    componentDidUpdate() {
        // 每次current更新，所有的box都要更新
        console.log(111)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.current === this.props.index || nextProps.current === this.props.index) {
            return true
        }
        return false
    }
    render() {
        return (
            <div style={{
                height: '100px',
                width: '100px',
                border: '1px gray solid',
                margin: '5px', float: 'left',
                lineHeight: '100px',
                textAlign: 'center',
                color: this.props.index === this.props.current ? 'red' : 'gray'
            }}
            >
                {this.props.index}
                {/* {this.props.current} */}

            </div>)
    }
}

export default class APP extends Component {
    state = {
        list: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        current: 1
    }
    render() {
        return (
            <div >
                <input type='number' value={this.state.current} onChange={(evt) => {
                    this.setState({
                        current: Number(evt.target.value)
                    })
                }} ></input>
                <div >
                    {this.state.list.map((v, index) =>
                        <Box key={v} current={this.state.current} index={index}></Box>)}
                </div>


            </div>
        )
    }
}
