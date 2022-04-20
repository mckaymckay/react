import React, { Component } from 'react'
import MSwiper from './swiper'
import MSwiperItem from './swiper/swiperItem'

export default class APP extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: ['aaa', 'bbb', 'ccc', 'ddd']
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                <MSwiper>
                    {this.state.list.map((v, index) =>
                        <MSwiperItem key={index}>{v}</MSwiperItem>)}

                    {/* {/* <MSwiperItem>111</MSwiperItem> */}
                    <MSwiperItem>222</MSwiperItem>
                    <MSwiperItem>3333</MSwiperItem>
                    <MSwiperItem>3333</MSwiperItem>
                    <MSwiperItem>3333</MSwiperItem>
                </MSwiper>
            </div>
        )
    }
}
