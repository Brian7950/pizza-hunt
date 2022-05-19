const router = require('express').Router();
const { del } = require('express/lib/application');
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza,

} = require('../../controllers/pizza-controller');


// this code
// router.route('/').get(getCallbackFunction).post(postCallbackFunction);

// is this same as this
// router.get('/', getCallbackFunction);
// router.post('/' postCallbackFunction);

//Set up Get all and Post at /api/pizzas
router
.route('/')
.get(getAllPizza)
.post(createPizza); 

//set up GET one, PUT, and DELETE at /api/pizzas/:id
router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router