import React, { useEffect } from 'react'
import store from '../redux/store'
import { connect } from 'react-redux'
import { hide } from '../redux/actionCreator/TabbarCreator'
import { show } from '../redux/actionCreator/TabbarCreator'

function Detail(props) {
    let { match, show, hide } = props
    useEffect(() => {
        // 1. 动态路由
        console.log(match.params.filmid, '利用id去后端拿数据')

        // store.dispatch 触发
        hide()
        return () => {
            show()
        }
    }, [match.params.filmid, show, hide])

    return (
        <div>Detail
        </div>
    )
}

const mapDispatchToProps = {
    hide,
    show
}
export default connect(null, mapDispatchToProps)(Detail)
// connect(将来给孩子传的属性，将来给孩子传的回调函数),Detail变成了connect的孩子