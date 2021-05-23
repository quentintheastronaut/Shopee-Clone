import React from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle , faApple } from '@fortawesome/free-brands-svg-icons'

const OtherMethod = (
    <div className="other__method">
        <a className="method" href="hello">Quên mật khẩu</a>
        <a className="method" href="hello">Đăng nhập với SMS</a>
    </div>
)

const Rules = (
    <div className="form__rules"> 
        Bằng việc đăng kí, bạn đã đồng ý với Shopee về <a href="hello" className="rules">Điều khoản dịch vụ</a> {'&'} <a href="hello" className="rules">Chính sách bảo mật</a>
    </div>
)

const SignUpInput = (
    <div className="block">
        <input placeholder="Số điện thoạị" type="text" className="form__input"/>
        <button className="form__submit">Tiếp Theo</button>
    </div>
)

const SignInInput = (
    <div className="block">
        <input placeholder="Số điện thoạị" type="text" className="form__input"/>
        <input placeholder="Mật khẩu" type="password" className="form__input"/>
        <button className="form__submit">Đăng Nhập</button>
    </div>
)

class Form extends React.PureComponent {
    
    constructor(){
        super()
        this.state = {
            signUp : false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        this.setState(prevState => {
            return {
                signUp : !prevState.signUp
            }
        })
    }

    render(){
        return(
            <div className={"form"}>
                <header className="form__header">
                    {this.state.signUp ? "Đăng Ký": "Đăng Nhập" }
                </header>

                <div className="form__body">
                    {this.state.signUp ? SignUpInput : SignInInput}

                    {this.state.signUp ? "" : OtherMethod}

                    <div className="form__separater">
                        <div className="separater"> </div>
                        hoặc
                        <div className="separater"> </div>
                    </div>

                    <div className="form__opt">
                        <a className="form__btn form__btn--fb" href="hello">
                            <FontAwesomeIcon icon={faFacebook} color="white" size="1x" className="form__icon"/>
                            <b>Facebook</b>
                        </a>
                        <a className="form__btn form__btn--gg" href="hello">
                            <FontAwesomeIcon icon={faGoogle} color="white" size="1x" className="form__icon"/>
                            <b>Google</b>
                        </a>
                        <a className="form__btn form__btn--apple" href="hello">
                            <FontAwesomeIcon icon={faApple} color="white" size="1x" className="form__icon"/>
                            <b>Apple</b>
                        </a>
                    </div>
                    
                    
                
                    {this.state.signUp ? Rules : ""}
                        
                </div>
                <footer className="form__footer">
                {this.state.signUp ? "Bạn mới biết đến Shopee?" : "Bạn đã có tài khoản?" }
                    <button  className="form__button" onClick={this.handleChange}><b>{this.state.signUp ? "Đăng Nhập": "Đăng Ký" }</b></button>
                </footer>
            </div>
        )
    }
}

export default Form