import { HttpResponse, http } from 'msw'

export const handlers = [
  http.post('https://appoint-ease-api.onrender.com/api/user/login', async ({ request }) => {
    const info = request.body
    console.log(info)
    return HttpResponse.json({
      _id: '6561f72e1a4dd3fc52fa621f',
      email: 'mike@gmail.com',
      name: 'mike',
      createdAt: '2023-11-25T13:31:26.446Z',
      updatedAt: '2023-11-25T13:31:26.446Z',
      __v: 0,
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1pa2UiLCJlbWFpbCI6Im1pa2VAZ21haWwuY29tIn0sImlhdCI6MTcwMjQ5NzgxOSwiZXhwIjoxNzAyNTAxNDE5fQ.n-8aOmdo6SWcPSopvfjuUVwFEzMxdJ7BG9NI_QgSIpw',
    })
  }),
]
