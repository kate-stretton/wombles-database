const express = require('express')
const db = require('./db')
const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
  res.send('WOMBLES!')
})

router.get(`/view`, (req, res) => {
  db.getAllWombles()
    .then((wombles) => {
      res.render(`wombles`, { wombles })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

router.get('/assignment', (req, res) => {
  db.assignRubbish()
    .then((wombles) => {
      console.log(wombles)
      res.render('assignment', { wombles })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

router.get('/:id', (req, res) => {
  db.getCharByWomble(req.params.id)
    .then((womble) => {
      // console.log(womble)
      res.render('characteristics', { womble })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

// create assignments route
// edit seeds file
// add new colum to wombles for rubbish_id
// join wombles and rubbish
// // create hbs file for rubbish
