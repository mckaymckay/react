import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import store from '../redux/store'
import { connect } from 'react-redux'

function City(props) {
    const [list] = useState(['北京', '长沙', '广州', '成都'])
    const history = useHistory()
    console.log(props)
    return (
        <div>
            <h2>City</h2>
            <ul>
                {list.map(v =>
                    <li onClick={() => {
                        props.change(v)
                        // store.dispatch({
                        //     type: 'change-city',
                        //     cityName: v
                        // })
                        // history.push(`/cinema`)
                        history.goBack()
                    }} key={v}>{v}</li>)}
            </ul>
        </div>
    )
}

const mapDispatchToProps = {
    change(item) {
        return {
            type: 'change-city',
            cityName: item
        }
    }
}
export default connect(null, mapDispatchToProps)(City)

/*
redux的值是存在内存中的，每次刷新，值会消失，需要redux的持久化存储来解决
*/