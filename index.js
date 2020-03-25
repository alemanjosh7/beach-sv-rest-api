const express = require('express')
const cors = require('cors'); const app = express()
const bodyparser = require('body-parser'); 
const port = process.env.PORT || 3000

//middlewares
app.use(cors())
app.use(bodyparser.json()); 
//parser responses
app.use('/',(req, res)=>{ res.send('hello from heroku') })
app.use(bodyparser.urlencoded({     
    extended: true
}))

//init app
app.listen(port, function () {
    console.log('app listening on port 3000!');
    console.log('listo')
});
//test1

