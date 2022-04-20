import React, { Component } from 'react'
// import Swiper, { Navigation, Pagination } from 'swiper'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'


export default class MSwiperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>
        )
    }
}
