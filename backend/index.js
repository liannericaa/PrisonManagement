//creating a local server with a port number 4000

const express = require('express')

const app = express()

const port_number = 4000

//middleware setup   
app.use(express.json());

//route for handling prisoner relater
const prisonerRoute = require('./routes/prisonerRoute')
app.use('/prisoner', prisonerRoute)

const guardRoute = require('./routes/guardRoute')
app.use('/guard', guardRoute)

app.listen(port_number, () => {
    console.log(`server is running on http://localhost:${port_number}`)
})

// to run the backend server use `node index.js`