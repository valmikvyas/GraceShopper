const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/wines', require('./wines'))
router.use('/beers', require('./beers'))
router.use('/spirits', require('./spirits'))
router.use('/products', require('./products'))
router.use('/cart', require('./cart'))
router.use('/order', require('./order'))
router.use('/stripe', require('./stripe'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
