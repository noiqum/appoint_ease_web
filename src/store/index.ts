import { createSlice, configureStore } from '@reduxjs/toolkit'
import { TloginResponse } from '../Api/ServiceType'

export type TCredential = {
  accessToken: string | null
  refreshToken: string | null
}

type TInitialAuthState = {
  user: TloginResponse | null
  credential: TCredential
  isLogin: boolean
}

const initialState: TInitialAuthState = {
  user: null,
  credential: {
    accessToken: null,
    refreshToken: null,
  },
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
  },
})
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})
export const authActions = authSlice.actions
