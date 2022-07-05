import React from 'react'
import { withRouter } from 'react-router-dom'

function Center(props) {
    console.log(props)
    return (
        <div>Center</div>
    )
}
export default withRouter(Center)
// export default Center