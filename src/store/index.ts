import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { sideMenuSlice } from './sideMenuSlice'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  sidemenu: sideMenuSlice.reducer,
})

export function setupStore(preloadedState: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}
export const store = setupStore({})
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
