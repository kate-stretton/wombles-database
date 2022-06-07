const request = require('supertest')
const server = require('./server')
const db = require('./db')

jest.mock('./db')

beforeEach(() => {
  jest.resetAllMocks()
})

test('list wombles', () => {
  const expected = 'WOMBLES!'
  return request(server)
    .get('/')
    .then((res) => {
      return expect(res.text).toBe(expected)
    })
})

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
        console.log(res.text)
        expect(res.text).toContain(`10`)
      })
  })
})
