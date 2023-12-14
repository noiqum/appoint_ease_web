import { TLoginRequest, TloginResponse, TRegisterRequest } from './ServiceType'
import axios from 'axios'
const baseUrl: string = 'https://appoint-ease-api.onrender.com'

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
