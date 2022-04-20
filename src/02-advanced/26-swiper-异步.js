import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default class APP extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: ["aaa", "bbb", "ccc"]
            })

            // new Swiper('.swiper', {
            //     modules: [Navigation, Pagination],
            //     //  如果需要分页器
            //     pagination: {
            //         el: '.swiper-pagination',
            //     },
            //     // 如果需要前进后退按钮
            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev',
            //     },

            //     // 如果需要滚动条
            //     scrollbar: {
            //         el: '.swiper-scrollbar',
            //     },
            // })
        }, 1000)


    }
    componentDidUpdate() {
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
                        {this.state.list.map((v, index) =>
                            <div key={index} className="swiper-slide">{v}</div>)}
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


/*
如果是异步setstate，不会阻塞线程，页面渲染完成之后才拿到数据，所以swiper创建失败
可以在componentDidUpdate之后创建swiper
也可以在异步代码里边创建swiper
*/