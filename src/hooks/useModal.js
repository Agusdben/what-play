import { useState } from 'react'

export const useModal = () => {
  const [modal, setModal] = useState({ open: false, description: '', handleConfirm: null })

  const setDescription = (description) => {
    setModal(lastValues => {
      return {
        ...lastValues,
        description
      }
    })
  }

  const setConfirm = (confirmFn) => {
    setModal(lastValues => {
      return {
        ...lastValues,
        handleConfirm: confirmFn
      }
    })
  }

  const openModal = () => {
    setModal(lastValues => {
      return {
        ...lastValues,
        open: true
      }
    })
  }

  const closeModal = () => {
    setModal(lastValues => {
      return {
        ...lastValues,
        open: false
      }
    })
  }

  return {
    isModalOpen: modal.open,
    description: modal.description,
    handleConfirm: modal.handleConfirm,
    setDescription,
    setConfirm,
    openModal,
    closeModal
  }
}
