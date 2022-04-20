import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



export default class APP extends Component {

    componentDidMount() {
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            //  如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    }
    render() {
        return (
            <div>
                <div className="swiper" style={{ height: '200px', background: 'red', textAlign: 'center' }}>
                    <div className="swiper-wrapper">
                        {/* {this.state.list.map((v, index) =>
                            <div key={index} className="swiper-slide">{v}</div>)} */}
                        {this.props.children}
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>

                    {/* <!-- 如果需要导航按钮 --> */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    {/* <!-- 如果需要滚动条 --> */}
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        )
    }
}
// just change