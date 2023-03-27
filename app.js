// Importin express module/library
const express = require('express')

// Initializing application name 
const app = express()

// Assiging port number 
const port = 3000

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware 
app.use(express.static('static'))

student1 = {
    studentName: "Saad", 
    age: 23,
    Unversity: "Jamia Nizamia"
}

// Here we are sending response on the browser
app.get('/', (req, res) => {

  // Data of response 
//   res.send(student1)
  // res.sendFile('views/index.html', {root: __dirname})
  res.render('index')
})

app.get('/vasim', (req, res) => {
    
  res.send('Hello, Mohammed Vasim')
})



app.listen(port, () => {
    // Write localhost here with port
  console.log(`Example app listening on port http://localhost:${port}`)
})