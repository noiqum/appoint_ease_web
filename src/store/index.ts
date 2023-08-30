import { createSlice } from '@reduxjs/toolkit'

export type TUser = {
  id: string
  name: string
  email: string
}

export type TCredential = {
  accessToken: string | null
  refreshToken: string | null
}

type TInitialAuthState = {
  user: TUser | null
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
createSlice({
  name: 'AuthStore',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user
    },
  },
})
