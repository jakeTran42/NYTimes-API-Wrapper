## New York Times API wrapper

https://developer.nytimes.com/apis

The New York Times developer API have many services and each have their own unique endpoints, filtering method as well as reponse protocols. This wrapper purpose is to congregate many of the services together and make the request methods as simple as possible without knowing all the unique endpoints and their attributes.

### How to use

```
const NYT = require('NYT-wrapper')

const nytimes = new NYT("--Your-API-KEY--")

nytimes.topstories(function(data) {
    ...data
})
```

| API Methods  | What it do  |
|---|---|
| mostEmailed()  | get the most popular emailed articles  |
| mostViewed()  | get the most viewed articles  |
| mostShared()  | get the most shared articles  |
| topstories(qs)  | get the top stories today you can pass in query string of specific field such as `topstories(science)`. See API doc for list |
| search(qs)  | Search the NYT database for anything relevant regarding given topic  |
| archive({year}/{month})  | take a look at what was archive on those date  |