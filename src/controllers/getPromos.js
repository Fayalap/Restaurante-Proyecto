const {Promo}=require("../DB_connection")

 async function getPromos(req,res) {

    try {
            const promos = await Promo.findAll();


            res.status(200).json(promos)
      
   
    }catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={getPromos};