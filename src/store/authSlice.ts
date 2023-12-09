import { TloginResponse } from '../Api/ServiceType'
import { createSlice } from '@reduxjs/toolkit'

type TInitialAuthState = {
  user: TloginResponse | null
  isLogin: boolean
  counter: number
}

const initialState: TInitialAuthState = {
  user: null,
  isLogin: false,
  counter: 0,
}

export const authSlice = createSlice({
  name: 'AuthStore',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = { ...action.payload }
    },
    setLogin: (state, action) => {
      state.isLogin = action.payload
    },
    setLogout: (state) => {
      state.user = null
      state.isLogin = false
    },
  },
})

export const authActions = authSlice.actions
