import { createSlice } from '@reduxjs/toolkit'
import { TAppointmentResponse } from '../Api/ServiceType'

export interface TinitialAppointmentState {
  list: TAppointmentResponse[]
  selected: TAppointmentResponse | null
}

const initialState: TinitialAppointmentState = {
  list: [],
  selected: null,
}

export const appointmentSlice = createSlice({
  initialState,
  name: 'AppointmentStore',
  reducers: {
    setAppointmentList: (state, action) => {
      state.list = action.payload
    },
    setSelectedAppointment: (state, action) => {
      state.selected = action.payload
    },
  },
})
export const { setAppointmentList, setSelectedAppointment } = appointmentSlice.actions
export default appointmentSlice
