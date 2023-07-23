const {User,Pedido}=require("../DB_connection")

 async function postUser(req,res) {
    const {email,nombre,contraseña,confirmar,direccion,telefono}=req.query;
    try {
        if([email,contraseña,confirmar,nombre,direccion,telefono].every(Boolean)){
            if(contraseña!=confirmar){
                res.status(400).json({message:"Las contraseñas no coinciden"})
            }
       const userInstance= await User.findOrCreate({
        where: { email: email ,contraseña:contraseña},
        defaults: {
          email,
          nombre,
          contraseña,
          confirmar,
          direccion,
          telefono
          },include: [Pedido]
         });

        res.status(200).json({
            access: true,
            id:userInstance[0].dataValues.id,
            data:userInstance
        })
    }else{
        res.status(400).json({message:"Faltan datos"})}
    }catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={postUser};