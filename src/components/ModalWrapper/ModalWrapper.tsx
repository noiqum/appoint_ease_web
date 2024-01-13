import { useAppDispatch, useAppSelector } from '../../store/hooks'
import './ModalWrapper.scss'
import { RootState } from '../../store/index'
import React from 'react'
import { setOpenStatus } from '../../store/modalSlice'

interface IProps {
  children?: React.ReactNode
}
export const ModalWrapper: React.FC<IProps> = ({ children }: IProps) => {
  const isOpen = useAppSelector((state: RootState) => state.modal.isOpen)
  const modalElement = useAppSelector((state: RootState) => state.modal.modalElement)
  const dispatch = useAppDispatch()
  return (
    <div
      onClick={() => isOpen && dispatch(setOpenStatus(false))}
      className={isOpen ? 'modal-wrapper active' : 'modal-wrapper close'}
    >
      {isOpen && modalElement}
      {children}
    </div>
  )
}
