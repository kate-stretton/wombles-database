const express = require('express')
const db = require('./db')
const router = express.Router()
module.exports = router

// router.get('/', (req, res) => {
//   res.send('WOMBLES!')
// })

router.post('/addwomble', (req, res) => {
  const babyWomble = req.body
  console.log(babyWomble)
  db.addWomble(babyWomble.name)
    .then(() => {
      //res.render('newwomble', { wombles })
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/addwomble', (req, res) => {
  res.render('addWomble')
})

router.post('/edit', (req, res) => {
  const newCharacteristic = req.body
  const id = 88801
  console.log(newCharacteristic)
  db.updateWomble(id, newCharacteristic)
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/:id/edit', (req, res) => {
  const id = Number(req.params.id)
  db.getCharByWomble(id)
    .then((womble) => {
      // console.log(womble)
      res.render('editWomble', { womble })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

router.post('/wombleremoved', (req, res) => {
  const retiredWomble = req.body
  console.log(retiredWomble)
  db.retireWomble(retiredWomble.id)
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/retirewomble', (req, res) => {
  res.render('retireWomble')
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
      res.render('characteristics', { womble })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

router.get(`/`, (req, res) => {
  db.getAllWombles()
    .then((wombles) => {
      res.render(`wombles`, { wombles })
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
