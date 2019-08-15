const request = require('request')

// const baseUri = "http://api.nytimes.com/svc/mostpopular/v2"
const baseUri = "http://api.nytimes.com/svc/"

class TheTimes {
  constructor(apiKey, query, filter) {
    this.apiKey = apiKey
    this.query = query
    this.filter = filter
  }

  mostEmailed(callback) {
    this._sendRequest("mostpopular/v2/mostemailed/all-sections/7?", callback)
  }

  mostViewed(callback) {
    this._sendRequest("mostpopular/v2/mostviewed/all-sections/7?", callback)
  }

  mostShared(callback) {
    this._sendRequest("mostpopular/v2/mostshared/all-sections/7?", callback)
  }

  topstories(callback) {
      const sectionQuery = this.query ? this.query : 'home'
      this._sendRequest(`topstories/v2/${sectionQuery}.json?`, callback)
  }

  search(callback) {
      const existFilter = ''
      if(this.filter !== null || this.filter !== undefined) {
          existFilter == `&fq=${this.filter}`
      }
      this._sendRequest(`search/v2/articlesearch.json?q=${this.query}${existFilter}&`, callback)
  }

  archive(callback) {
    //   /{year}/{month}.json
      this._sendRequest(`archive/v1/${this.query}.json?`, callback)
  }

  _sendRequest(service, callback) {
    const url = `${baseUri}/${service}api-key=${this.apiKey}`

    request(url, function(error, response, body) {
      if (!error & response.statusCode === 200) {
        if(JSON.parse(body).results){
            callback(JSON.parse(body).results)
        } else if (JSON.parse(body).response) {
            callback(JSON.parse(body).response)
        }
      }
    })
  }
}

module.exports = TheTimes