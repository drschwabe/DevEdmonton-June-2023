const express = require('express')
const app = express()
const port = 7000

// Set the view engine to use .html: 
app.set('view engine', 'html')
// set EJS to render html files, from the ./html folder: 
app.engine('html', require('ejs').renderFile)
app.set('views', __dirname + '/html')

// index route: 
app.get('/', (req, res) => {
  const data = {
    message: 'Hello, World!'
  }
  // Render the 'index.html' template and pass data to it
  res.render('index', { data })
})

// Start the server
app.listen(port, () => 
  console.log('listening at http://localhost:' + port)
)