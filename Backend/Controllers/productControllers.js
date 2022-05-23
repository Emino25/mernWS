// import the model needed
const ProductModel=require('../models/product')

// add the product
const addproduct=async(req,res)=>{

    try {
        // get file 
        const file = req.file
       //1 get the data from the body
        const nproduct= await new ProductModel(req.body)
        nproduct.image = `${req.protocol}://${req.get("host")}/${file.path}`
        // console.log({...req.body})

        // final step : save the product in db
        nproduct.save()
        // send the respnse
        res.send({nproduct,message:"the product succesfully added"})
    } catch (error) {
    //    console.log(error) 
    res.status(400).send(error.message)
    }
}

// get all products
const getallproducts=async(req,res)=>{
    try {
       
        const allproducts= await ProductModel.find({})
        // send the respnse
        res.send({allproducts})
    } catch (error) {
    //    console.log(error) 
    res.status(400).send(error.message)
    }
}

// get one product by id
const getoneproduct=async(req,res)=>{
    try {
       const id=req.params.id
        const product= await ProductModel.findById(id)
        // send the respnse
        res.send({product})
    } catch (error) {
    //    console.log(error) 
    res.status(400).send(error.message)
    }
}

//update product
const updateproduct=async(req,res)=>{
    try {
        const {file} = req

        const updatedproduct= await ProductModel.updateOne({ _id:req.params.idprod },
            {$set:{...req.body,image:`${req.protocol}://${req.get("host")}/${file.path}`}})
        // send the respnse
        res.send({updatedproduct, message:"product succesefully updated"})
    } catch (error) {
    //    console.log(error) 
    res.status(400).send(error.message)
    }
}


// delete product
const deleteproduct=async(req,res)=>{
    try {
      
        const deleteddproduct= await ProductModel.deleteOne({ _id: req.params.idprod})
console.log(deleteddproduct)
        // send the respnse
        res.send({ message:"product succesefully deleted"})
    } catch (error) {
    //    console.log(error) 
    res.status(400).send(error.message)
    }
}

//do not forget to export !!!!!!
module.exports={addproduct,getallproducts,getoneproduct,updateproduct,deleteproduct}