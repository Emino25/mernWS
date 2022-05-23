const express=require('express')
const { addproduct, getallproducts, getoneproduct, updateproduct, deleteproduct } = require('../Controllers/productControllers')
const router=express.Router()
/**
 * @params POST  /product/addproduct
 * @description ajout d'un nve produit
 * @access PUBLIC
 */
const upload = require("../utils/multer")

 router.post('/addproduct',upload("products").single('file'),addproduct)

/**
 * @params get /product
 * @description display all the  products
 * @access PUBLIC
 */
 router.get("/",getallproducts)
 /**
 * @params get /product/:id
 * @description display the details of one product
 * @access PUBLIC
 */
  router.get("/:id",getoneproduct)
  /**
 * @params put /product/:id
 * @description update one product
 * @access PUBLIC
 */
router.put('/:idprod',upload("products").single('file'),updateproduct)
  /**
 * @params delete /product/:id
 * @description delete one product
 * @access PUBLIC
 */
router.delete('/:idprod',deleteproduct)
 module.exports=router