import React from 'react'
import './Modal.css'
import Form from '/Users/quan0402/Desktop/Shopee Clone/shopee/src/components/Form/Form.js'

function Modal(){
    return(
        <div className="modal">
            <div className="modal__overlay" onClick="">

            </div>

            <div className="modal__body">
                <div className="modal__inner">
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default Modal