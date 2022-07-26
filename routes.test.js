const request = require('supertest')
const server = require('./server')
const db = require('./db')
// const { test } = require('./knexfile')
// const { lazyrouter } = require('express/lib/application')

jest.mock('./db')

beforeEach(() => {
  jest.resetAllMocks()
})

// test('list wombles', () => {
//   const expected = [db.getAllWombles()]
//   return request(server)
//     .get('/')
//     .then((res) => {
//       return expect(res.text).toBe(expected)
//     })
// })

describe('Get http://localhost:3000/view', () => {
  test('render wombles template with womble id and name from db', () => {
    const pretendWomble = [
      {
        id: 10,
        name: 'Bob',
      },
    ]
    db.getAllWombles.mockReturnValue(Promise.resolve(pretendWomble))
    return request(server)
      .get('/view')
      .then((res) => {
        expect(res.text).toContain(`10`)
      })
  })
})

describe(`Get /:id`, () => {
  test(`render characteristic template from ID on a URL`, () => {
    const fakeWomble = {
      id: 100,
      name: `Kevin`,
      characteristic: `lazy`,
    }
    db.getCharByWomble.mockReturnValue(Promise.resolve(fakeWomble))
    expect.assertions(2)
    return request(server)
      .get(`/100`)
      .then((res) => {
        expect(res.text).toContain(`Kevin`)
        expect(db.getCharByWomble).toHaveBeenCalledWith(`100`)
      })
  })
  test('returns status 500 and error if db query fails', () => {
    db.getCharByWomble.mockImplementation(() => {
      return Promise.reject(new Error('much sadness'))
    })
    expect.assertions(2)
    return request(server)
      .get('/100')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Server error')
      })
  })
})
