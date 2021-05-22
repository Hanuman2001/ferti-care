const express=require('express')

const auth =require('../middleware/auth')
const router =express.Router()

const list=[
  {
      title:'oil',
      description:"Good for health",
      price:"80 Rs"
  },  {
    title:'atta',
    description:"Good for health",
    price:"50 Rs"
},
{
    title:'pulses',
    description:"Good for health",
    price:"120 Rs"
}




]
///Public

router.get('/list',async (req,res)=>{
 

   try {
     
    res.send(list)

   } catch (err) {
       console.error(err.message)
   }





})





module.exports=router