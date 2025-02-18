const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product], 
  }).then((allcategory) => res.status(200).json(allcategory))
  .catch((err) => res.status(500).json(err))
});

//all products

//all tags

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product],
  }).then((onecategory) => res.status(200).json(onecategory))
  .catch((err) => res.status(500).json(err))
});

//one product

//one tag

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(500).json(err))
});

//new product

//new tag

router.put('/:id', (req, res) => {
  // update a category by its `id` value
 Category.update(
   {
     category_name: req.body.category_name
   },
   {
     where: {
       id: req.params.id
     }
   }
 ).then((updatecategory) => res.status(200).json(updatecategory))
 .catch((err) => res.status(500).json(err))
});

//update product

//update tag

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((deletecategory) => res.status(200).json(deletecategory))
  .catch((err) => res.status(500).json(err))
});

//delete product

//delete tag

module.exports = router;
