const NodeJS_midterm66 = require('./controllers/NodeJS-midterm66')

module.exports = (app) =>{

    app.post('/que1', NodeJS_midterm66.que1)
    app.post('/que2', NodeJS_midterm66.que2)

}