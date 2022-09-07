import React from 'react'
import './Modal.css'

export const Modal = ({ description, handleConfirm, handleCancel }) => {
  return (
    <div className='modal'>
      <div className='modal__container'>
        <h4 className='modal__title'>You are about to delete</h4>
        <p className='modal__description'>{description}</p>
        <div className='modal__controlls'>
          <button className='modal__buton' onClick={handleConfirm}>Confirm</button>
          <button className='modal__buton' onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
