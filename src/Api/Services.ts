import { store } from '../store'
import {
  TAppointmentRequest,
  TAppointmentResponse,
  TLoginRequest,
  TloginResponse,
  TRegisterRequest,
} from './ServiceType'
import axios from 'axios'
const baseUrl: string = 'https://appoint-ease-api.onrender.com'

export const getAccessToken = () => {
  const state = store.getState()
  return state.auth.user?.accessToken
}

export const login = (info: TLoginRequest) => {
  return new Promise<TloginResponse>((resolve, reject) => {
    const url: string = `${baseUrl}/api/user/login`
    const body = {
      ...info,
    }
    axios
      .post(url, body)
      .then((resp) => resolve(resp.data))
      .catch((err) => reject(err))
  })
}
export const register = (info: TRegisterRequest) => {
  return new Promise<TloginResponse>((resolve, reject) => {
    const url: string = `${baseUrl}/api/user/register`
    const body = {
      ...info,
    }
    axios
      .post(url, body)
      .then((resp) => resolve(resp.data))
      .catch((err) => reject(err))
  })
}

export const createAppointment = (info: TAppointmentRequest) => {
  return new Promise<TAppointmentResponse>((resolve, reject) => {
    const url: string = `${baseUrl}/api/appointment/create`
    const body = {
      ...info,
    }
    axios
      .post(url, body, { headers: { Authorization: `Bearer ${getAccessToken()}` } })
      .then((resp) => resolve(resp.data))
      .catch((err) => reject(err))
  })
}

export const getUserAppointments = (user: string) => {
  return new Promise<TAppointmentResponse[]>((resolve, reject) => {
    const url: string = `${baseUrl}/api/appointment/${user}`
    axios
      .get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` } })
      .then((resp) => resolve(resp.data))
      .catch((err) => reject(err))
  })
}

export const deleteAppointment = (id: string) => {
  return new Promise<void>((resolve, reject) => {
    const url: string = `${baseUrl}/api/appointment/delete`
    const body = {
      id,
    }
    axios
      .delete(url, { data: body, headers: { Authorization: `Bearer ${getAccessToken()}` } })
      .then((resp) => {
        resolve(resp.data)
      })
      .catch((err) => reject(err))
  })
}
