import React, {PureComponent} from 'react'

import './Notify.css'



class Notify extends PureComponent {

    render(){
        return (
            <div>
                <div className="mynotify">
                    <div className="arrow-block">
                        <div className="arrow">

                        </div>

                    </div>
                    <div className="notify-header">
                        <h3 className="notify-h3">Thông báo mới nhận</h3>
                    </div>

                    <ul className="notify-list">
                        
                        <li className="notify-item">
                            <a className="notify-link" href="http://localhost:3000/">
                                <img className="notify-img" src="https://whoovietnam.com/wp-content/uploads/2018/09/set-duong-am-dac-biet-ohui-miracle-moisture-special-6-sp-02-600x600.jpg" alt="img"/>
                                <div className="notify-content">
                                    <span className="notify-title">My pham OHUI chinh hang</span>
                                    <span className="notify-description">My pham OHUI chinh hang den tu Mỹ, đạt tiêu chuẩn kiểm duyệt</span>
                                </div>
                            </a>
                        </li>

                        <li className="notify-item notify-item--viewed">
                            <a className="notify-link" href="http://localhost:3000/">
                                <img className="notify-img" src="https://whoovietnam.com/wp-content/uploads/2018/09/set-duong-am-dac-biet-ohui-miracle-moisture-special-6-sp-02-600x600.jpg" alt="img"/>
                                <div className="notify-content">
                                    <span className="notify-title">Săn Keychron K6 bản nhôm chỉ  với 1.690.000VNĐ</span>
                                    <span className="notify-description">Keychron K6 giảm mạnh nhất từ trước đến nay, nhanh tay lên , số lương có hạn</span>
                                </div>
                            </a>
                        </li>

                        <li className="notify-item">
                            <a className="notify-link" href="http://localhost:3000/">
                                <img className="notify-img" src="https://whoovietnam.com/wp-content/uploads/2018/09/set-duong-am-dac-biet-ohui-miracle-moisture-special-6-sp-02-600x600.jpg" alt="img"/>
                                <div className="notify-content">
                                    <span className="notify-title">OHUI chính thức ra mắt dòng son lì mới THE FIRST GENTURE LIPSTICK</span>
                                    <span className="notify-description">Một lần căng mềm, quyến rũ với sắc màu nổi bật luôn đều mà các quý cô ao ước</span>
                                </div>
                            </a>
                        </li>
                        
                    </ul>

                    <div className="notify-footer">
                        <a href="http://localhost:3000"><h3 className="notify-h3">Xem tất cả</h3></a>
                    </div>
                    
                </div>
            </div>
        )

    }
}

export default Notify