const {Promo}=require("../DB_connection")

 async function postPromo(req,res) {
    const {nombre,descripcion,ingredientes,precio}=req.body;
    try {
        if([nombre,descripcion,ingredientes,precio].every(Boolean)){
           
       const userInstance= await Promo.findOrCreate({
        where: { nombre_promo: nombre ,descripcion:descripcion},
        defaults: {
            nombre_promo:nombre,
            descripcion:descripcion,
            ingredientes,
            precio
          },//include: [Precio]
         });
        if(userInstance){res.status(200).json({message:"Creada con exito"})}
      
    }else{
        res.status(400).json({message:"Faltan datos"})}
    }catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={postPromo};