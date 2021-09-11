const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let Census = require('../model/Census');
 
// Get all Census
censusRoute.route('/').get((req, res) => {
    Census.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get Census
censusRoute.route('/read-census/:id').get((req, res) => {
  Census.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//Update Census
censusRoute.route('/update-census/:id').put((req, res, next) => {
  Census.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Census updated successfully!')
    }
  })
})

//Add a census
censusRoute.route('/add-census').post((req, res, next) => {
  Census.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//Remove a census
censusRoute.route('/remove-census/:id').delete((req, res, next) => {
  Census.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Census successfully deleted.')
    }
  })
})

module.exports = censusRoute;