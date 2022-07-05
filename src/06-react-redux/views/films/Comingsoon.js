import axios from 'axios'
import React, { useEffect } from 'react'

export default function Comingsoon() {
    useEffect(() => {
        axios({
            url: '/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=1987AE60C5CE11EC98EF0950A05EDCAA38B1AAE869904BCEB2ACAC8265E98238&optimus_risk_level=71&optimus_code=10',
            method: "get",

        }).then(res => {
            console.log(res)
        })
    }, [])
    return (
        <div>Comingsoon</div>
    )
}
