const {Pizza}=require("../DB_connection")

 async function postPizza(req,res) {
    const {nombre,descripcion,ingredientes}=req.body;
    try {
        if([nombre,descripcion,ingredientes].every(Boolean)){
           
       const userInstance= await Pizza.findOrCreate({
        where: { nombre_pizza: nombre ,descripcion:descripcion},
        defaults: {
            nombre_pizza:nombre,
            descripcion:descripcion,
            ingredientes
          },//include: [Precio]
         });
        if(userInstance){res.status(200).json({message:"Creada con exito"})}
      
    }else{
        res.status(400).json({message:"Faltan datos"})}
    }catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={postPizza};