import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

interface TinitialModalState {
  isOpen: boolean
  modalElement: React.ReactElement | null
}

const initialState: TinitialModalState = {
  isOpen: false,
  modalElement: null,
}

export const modalSlice = createSlice({
  initialState,
  name: 'ModalStore',
  reducers: {
    setOpenStatus: (state, action) => {
      state.isOpen = action.payload
    },
    setModalElement: (state, action) => {
      state.modalElement = action.payload
    },
  },
})

export const { setOpenStatus, setModalElement } = modalSlice.actions
export default modalSlice
