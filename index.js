const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.get('/user/:id', function (req, res) {
//     // const q = req.params
//     // console.log(q.id) 

//     const q = req.query
//     console.log(q.q)
//     console.log(q.name)

//     res.send({'userid': q.name})
//   })

//   app.get('/cat', function (req, res) {
//     res.send({'sound': '야옹'})
//   })


    app.get('/sound/:name', (req, res) => {
        const { name } = req.params
        
        if(name == "dog") {
            res.json({'sound': '멍멍'})
        } else if(name == "cat") {
            res.json({'sound': '야옹'})
        } else if(name == "pig") {
            res.json({'sound': '꿀꿀'})
        } else {
            res.json({'sound': '알수없음'})
        } 
    })

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})