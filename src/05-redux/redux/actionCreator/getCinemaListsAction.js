import axios from 'axios'
import store from '../store'

// redux-thunk
function getCinemaListsAction() {
    return (dispatch) => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9679834",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data.data)
            // thunk偷偷塞了个dispatch，在需要的地方调用dispatch()
            dispatch({
                type: 'getCinemaList',
                cinemaLists: res.data.data.cinemas
            })
        })
    }
}

// redux-promise 这段代码有错误，还没解决
// async function getCinemaListsAction() {
//     var list = await axios({
//         url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9679834",
//         method: "get",
//         headers: {
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649475755500342215147521"}',
//             'X-Host': 'mall.film-ticket.cinema.list'
//         }
//     }).then(res => {
//         return {
//             type: 'getCinemaList',
//             cinemaLists: res.data.data.cinemas
//         }
//     })
//     return list
// }
export default getCinemaListsAction

/*
axios是异步的，axios发出请求之后接着就会return，这时候数据还没有拿回来
*/
