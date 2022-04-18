
/*
1. 改造成了没有state的类组件，可以再改造成函数组件
*/

// import React, { Component } from 'react'
// export default class Tabbar extends Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.props.list.map((v, index) =>
//                         <li key={v.id} className={this.props.current === index ? 'active' : ''} onClick={() => {
//                             this.props.event(index)
//                         }}>{v.text}</li>
//                     )}
//                 </ul>
//             </div>
//         )
//     }

// }

/*
this.setState执行之后，也就是state变化之, 会重新执行render()函数
*/


/* 2. 函数组件 */
const Tabbar = (props) => {
    // 如果有函数，要放在return之前
    return <div>
        <ul>
            {props.list.map((v, index) =>
                <li key={v.id} className={props.current === index ? 'active' : ''} onClick={() => props.event(index)}>{v.text}</li>
            )}
        </ul>
    </div>

}
export default Tabbar