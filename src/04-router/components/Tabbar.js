import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './tabbar.module.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div className={style.tabbar}>
                <ul>
                    <li>
                        {/* a. 声明式导航 */}
                        {/* <a href='#/films'>电影</a> */}
                        <NavLink to='/films' activeClassName={style.mactive}>电影</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cinema' activeClassName={style.mactive}>影院</NavLink>
                    </li>
                    <li>
                        <NavLink to='/center' activeClassName={style.mactive}>我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
