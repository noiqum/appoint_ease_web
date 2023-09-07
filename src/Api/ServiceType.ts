export type TLoginRequest = {
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
}
