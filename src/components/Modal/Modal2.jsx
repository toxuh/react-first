import React from "react";

import './Modal.css';

const Modal = ({hideModal}) => {
    return (
        <div className='Modal'>
            <div className='Modal__content'>
                <i className='Modal__close' onClick={hideModal}>X</i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus cumque fugiat, nostrum nulla quae quos? Est illo nisi pariatur.</p>
            </div>
        </div>
    )
}

export default Modal;