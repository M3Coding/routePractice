import express from 'express';
import session from 'express-session'
import axios from 'axios'
import bcrypt from 'bcrypt'

const app = express();
const port = 3000;

app.get(('/'), (req,res) => {
    res.send('Hello World')
})

app.route('/book')
.get((req, res) => {
    res.send('Get a random book');
})
.post((req, res) => {
    res.send('Add a book')
})
.put((req,res) => {
    res.send('Update the book')
})
app.listen(port, (req, res)=> {
    console.log(`App listening on ${port}`)
})