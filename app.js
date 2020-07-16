const path = require("path")
const express = require('express')
const hbs = require("hbs")
const app = express();
const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './views')

app.use(express.static(publicDirPath))
app.set("view engine", "hbs")
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})