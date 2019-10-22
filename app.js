const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const authRoutes = require('./routes/auth')
const dataRoutes = require('./routes/data')
const e_journalRoutes = require('./routes/e_jountal')
const groupRoutes = require('./routes/group')
const studentRoutes = require('./routes/student')
const subjectRoutes = require('./routes/subject')
const userRoutes = require('./routes/user')

const app = express()

//Database
const db = require('./db/database')

//TestDb
db.authenticate()
  .then(() => console.log('======DATABASE CONNECTED======'))
  .catch(err => console.log('Error ' + err))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))

//парсер json
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/data', dataRoutes)
app.use('/api/journal', e_journalRoutes)
app.use('/api/group', groupRoutes)
app.use('/api/student', studentRoutes)
app.use('/api/subject', subjectRoutes)
app.use('/api/user', userRoutes)

module.exports = app