const Cat = require('../models/cat')
const {Router} = require('express')


const router = Router()

//get get
router.get('/getCat', async (req, res) => {
  try{
    const {catId} = req.body
    const cat = await Cat.findById(catId)
    console.log(req.body)
    res.status(201).json({cat})
  } catch(e) {
    console.log(req.body)
    console.log(e)
    res.status(500).json({message: 'Something went wrong', error: e })
  }
})

//get all cats
router.get('/getCats', async (req, res) => {
  try{
    const cats = await Cat.find()
    res.status(201).json({cats})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong', error: e })
  }
})

//find cat by name
router.get('/findCatByName', async (req, res) => {
  try{
    const cat = await Cat.find({ name: req.body.name })
    res.status(201).json({cat})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong', error: e })
  }
})

//create cat
router.post('/addCat', async (req, res) => {
  try{
    const {name, breed, weight} = req.body
    const newCat = new Cat({
      name,
      breed,
      weight
    })
    await newCat.save() && res.status(201).json({newCat, message: "Cat was created"})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong', error: e })
  }
})

//deleteCat
router.post('/deleteCat', async (req, res) => {
  try{
    const {catId} = req.body
    const cat = await Cat.findByIdAndDelete(catId)
    await res.status(201).json({deletedCat: cat, message: "Cat was deleted"})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong', error: e })
  }
})

//cats paginate
router.get('/getPaginatedCats', async (req, res) => {
  try{
    const {page_size, page_num} = req.body
    const skips = page_size * (page_num - 1)
    const cats = await Cat.find().skip(skips).limit(page_size)
    res.status(201).json({cats})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong', error: e })
  }
})

//cats sort
router.get('/getSortedCats', async (req, res) => {
  try{
    const {property, order} = req.body
    const sortObj = {
      [property]: order
    }
    const cats = await Cat.find().sort(sortObj)
    res.status(201).json({cats})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong', error: e })
  }
})

//cats paginated and sorted
router.get('/getPaginatedSortedCats', async (req, res) => {
  try{
    const {property, order, page_size, page_num} = req.body
    const skips = page_size * (page_num - 1)
    const sortObj = {
      [property]: order
    }
    const cats = await Cat.find().sort(sortObj).skip(skips).limit(page_size)
    res.status(201).json({cats})
  } catch(e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong', error: e })
  }
})


module.exports = router
