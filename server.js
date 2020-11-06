const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')


//Server config
const app = express()

//Load env variables
require('dotenv').config({path:"./config/config.env"})

//Connect to db
const db = process.env.MONGOURI
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
  .then(res => console.log('Connected to database'))
  .catch(err => console.log(err))
    

//BodyParser
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

//Routes middleware:
app.use('/',require('./routes/tinder'))

//Serve static assets in production
if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))

  //sends index file.
  app.get("*",(req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

//PORT
const PORT = process.env.PORT || 5000

//Listen to port
app.listen(PORT,() => console.log(`Connected to PORT: ${PORT}..`))


