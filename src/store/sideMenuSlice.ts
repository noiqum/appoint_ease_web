import { createSlice } from '@reduxjs/toolkit'

type TinitialSideMenuState = {
  isOpen: boolean
}

const initialState: TinitialSideMenuState = {
  isOpen: false,
}

export const sideMenuSlice = createSlice({
  initialState,
  name: 'SideMenuStore',
  reducers: {
    setOpenStatus: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const sideMenuActions = sideMenuSlice.actions
