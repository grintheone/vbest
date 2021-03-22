import React from 'react'
import ModalForm from './ModalForm'

function Modal(props) {
    
    return (
        <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modal-label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title fs-5 fw-normal" id="modal-label">Введите данные сотрудника</p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                <ModalForm getData={props.getData}/>
            </div>
        </div>
    </div>
    )
    
}

export default Modal