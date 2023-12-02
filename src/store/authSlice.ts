import { TloginResponse } from '../Api/ServiceType'
import { createSlice } from '@reduxjs/toolkit'

type TInitialAuthState = {
  user: TloginResponse | null
  isLogin: boolean
}

const initialState: TInitialAuthState = {
  user: null,
  isLogin: false,
}

export const authSlice = createSlice({
  name: 'AuthStore',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user
    },
    setLogin(state, action) {
      state.isLogin = action.payload.isLogin
    },
    setLogout(state) {
      state.user = null
      state.isLogin = false
    },
  },
})

export const authActions = authSlice.actions
