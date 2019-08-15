const TheTimes = require('../src/index.js')
// import TheTimes from '../src/index.js'

const api_Key = process.env.API_KEY

const nytAPI = new TheTimes(api_Key)

test('Sanity check', () => {
    
})

test("get most emailed", () => {
    expect(nytAPI.mostEmailed(function(data) {return data})).toHaveReturned()
})