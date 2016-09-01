const express = require('express')
const path = require('path')
const app = express()

app.set('port',process.env.PORT || 8000)
// serve static assets normally
app.use(express.static(__dirname + '/'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(app.get('port'), function() {
    console.log('Run http://localhost:' + app.get('port') + ' on browser');
})
