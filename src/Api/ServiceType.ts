export type TLoginRequest = {
  email: string
  password: string
}
export type TRegisterRequest = {
  name: string
  email: string
  password: string
}

export type TloginResponse = {
  _id: string
  email: string
  name: string
  createdAt: string
  updatedAt: string
  __v: number
  accessToken: string
}

export type TAppointmentRequest = {
  user: string
  name: string
  description: string
  link: string
  length: number
  period: 'hour' | 'min'
  color:
    | '#1e9bff'
    | '#2980b9'
    | '#0ed70a'
    | '#009432'
    | '#c40404'
    | '#ed4c67'
    | '#fa8a1a'
    | '#851eff'
    | '#d980fa'
    | '#f1c40f'
    | '#8a9199'
}
