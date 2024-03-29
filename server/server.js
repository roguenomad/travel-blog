const express = require("express");
const app = express();



app.get('/', (req, res) => {
    res.send('working!')
})

// app.get('/', (req, res) => {
//     console.log('Here')
//     res.render('index')
// })


//Error message
// app.get('/', (req, res) => {
//     console.log('Here')
//     res.status(500).send("Error Code 500")
// })

app.listen(8000, () => {
    console.log('listening...')
})

// /signin --> POST = success/fail
// /register --> POST = user
// /profile/:userId --> GET = user
// /heart --> PUT --> user