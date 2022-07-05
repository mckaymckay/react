import React from 'react'
import { Route } from 'react-router-dom'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'
import { Redirect } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import style from './films/Film.module.css'
console.log(style)
export default function Films() {
    return (
        <div className={style.film}>
            <div style={{ height: '200px', background: 'red' }}>大轮播</div>
            <div>
                <ul>
                    <li>
                        <NavLink to='/films/nowplaying' activeClassName={style.mactive}>正在热映</NavLink>
                    </li>
                    <li>
                        <NavLink to='/films/comingsoon' activeClassName={style.mactive}>即将上映</NavLink>
                    </li>
                </ul>
            </div>

            {/* 路由设置 嵌套路由 */}
            <Switch>
                {/* Nowplaying变成了Route的孩子，nowplaying会接收到一个属性 */}
                <Route path="/films/nowplaying" component={Nowplaying}></Route>
                <Route path="/films/comingsoon" component={Comingsoon}></Route>
                <Redirect from='/films' to='/films/nowplaying'></Redirect>
            </Switch>

        </div>
    )
}
