import React from 'react'
import './Modal.css'

export const Modal = ({ description, handleConfirm, handleCancel }) => {
  return (
    <div className='modal'>
      <div className='modal__container'>
        <p className='modal__description'>{description}</p>
        <div className='modal__controlls'>
          <button className='modal__buton' onClick={handleConfirm}>Yes</button>
          <button className='modal__buton' onClick={handleCancel}>No</button>
        </div>
      </div>
    </div>
  )
}
