import React, { PureComponent } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle} from '@fortawesome/free-regular-svg-icons'
import QRcode from '../QRcode/QRcode'
import Notify from '../NotificationBar/Notify'
// import Modal from '/Users/quan0402/Desktop/Shopee Clone/shopee/src/components/Modal/Modal.js'
import Form from '/Users/quan0402/Desktop/Shopee Clone/shopee/src/components/Form/Form.js'

class Navbar extends PureComponent {


    constructor(){
        super()
        this.state = {
            popUp : false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        this.setState(prevState => {
            return {
                popUp : !prevState.popUp
            }
        })
    }

    render(){
        return (
            <div>
                <div className="navbar">
                    
                        <ul className="navbar-list">
                            <li className="navbar-item navbar-item--seperate navbar--qrcode">
                                
                                Vào cửa hàng trên ứng dụng
                                <div className="myQRcode">
                                    <QRcode />
                                </div>
                            </li>
                            <li className="navbar-item"><span className="navbar-item-label">Kết nối</span></li>
                            <a href="http://localhost:3000/" className="navbar-icon-link" ><FontAwesomeIcon className="navbar-icon" icon={faFacebook} size='2x' color="white"/></a>
                            <a href="http://localhost:3000/" className="navbar-icon-link"><FontAwesomeIcon className="navbar-icon" icon={faInstagram} size='2x' color="white"/></a>
                        </ul>

                        <ul className="navbar-list">
                            
                                <li className="navbar-item notify">
                                    <FontAwesomeIcon className="navbar-icon" icon={faBell} size='1x' color="white"/>
                                    <a href="http://localhost:3000" className="navbar-item-link">Thông báo</a>

                                    <div className="notification">
                                        <Notify />
                                    </div>
                                </li>
                            
                            
                            <li className="navbar-item">
                            <FontAwesomeIcon className="navbar-icon" icon={faQuestionCircle} size='1x' color="white"/>
                                <a href="http://localhost:3000/" className="navbar-item-link">Trợ giúp</a>
                            </li>
                            <li className="navbar-item navbar-item--seperate navbar-item--strong">
                                <button  href="http://localhost:3000/" className="navbar-item-link" onClick={this.handleChange}>Đăng ký</button>
                            </li>
                            <li className="navbar-item navbar-item--strong">
                                <button href="http://localhost:3000/" className="navbar-item-link" onClick={this.handleChange}>Đăng nhập</button>
                            </li>
                        </ul>
                    
                </div>

                {this.state.popUp ? (<div className="modal">
            <div className="modal__overlay" onClick={this.handleChange}>

            </div>

            <div className="modal__body">
                <div className="modal__inner">
                    <Form/>
                </div>
            </div>
        </div>) : ""}

            </div>
        )
    }
}

export default Navbar