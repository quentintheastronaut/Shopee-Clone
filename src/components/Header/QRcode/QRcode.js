import React, { PureComponent } from 'react'

import './QRcode.css'

class QRcode extends PureComponent {

    render(){
        return (
            <div className="qrcode">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f184c0b68a2d385feb5d70a76396230b.png" alt="qrcode" className="qrcode--img"/>
                <div className="qrcode--app">
                    <a href="http://localhost:3000/"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/0038709cb8b3ebaa41b12fe247e6baaa.png" alt="playstore" className="qrcode--img--app app__1"/></a>
                    <a href="http://localhost:3000/"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/438a3b355756fe8de8b2338c3e96411e.png" alt="playstore" className="qrcode--img--app app__2"/></a>
                </div>
            </div>
        )
    }
}

export default QRcode