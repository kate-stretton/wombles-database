const express = require('express')
const db = require('./db')
const router = express.Router()
module.exports = router

// router.get('/', (req, res) => {
//   res.send('WOMBLES!')
// })

router.post('/addwomble', (req, res) => {
  const name = req.body.name
  const characteristic = req.body.characteristic_id
  console.log(name, characteristic)
  db.addWomble(name, characteristic)
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

router.get('/updatewomble', (req, res) => {
  res.render('editWomble')
})

router.post('/updatewomble', (req, res) => {
  const wombleId = req.body.name
  const characteristicId = req.body.characteristic_id
  console.log(wombleId, characteristicId)
  db.updateWomble(wombleId, characteristicId)
    .then(() => {
      res.redirect('/' + wombleId)
    })
    .catch((err) => {
      console.error(err)
    })
})

router.post('/retirewomble', (req, res) => {
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
