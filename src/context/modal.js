import { useState, useMemo, createContext } from 'react'

export const ModalContext = createContext({
    modalOpen: false,
    closeModal: () => {},
    openModal: () => {}
})

export const ModalProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false)
    }
    const openModal = () => {
        setModalOpen(true)
    }
    const value = useMemo(() => ({ modalOpen, setModalOpen, closeModal, openModal }), [modalOpen])
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

