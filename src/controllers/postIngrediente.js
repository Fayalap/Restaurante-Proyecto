const {Ingrediente}=require("../DB_connection")

 async function postIngrediente(req,res) {
    const {nombre}=req.body;

    try {
        if([nombre].every(Boolean)){
            if(typeof (nombre) != 'string'){
                res.status(400).json({message:"Debe ser un texto"})
            }
       const userInstance = await Ingrediente.findOrCreate({
        where: {  nombre_ingrediente: nombre },
        defaults: {
            nombre_ingrediente:nombre
          }
         });

        userInstance?res.status(200).json({message:"creado con exito"}):res.status(500).json({message:"hubo un error"})
    }else{
        res.status(400).json({message:"Faltan datos"})}
    }catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={postIngrediente};