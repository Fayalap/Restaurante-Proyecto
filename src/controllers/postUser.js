const {User,Pedido}=require("../DB_connection")

 async function postUser(req,res) {
    const {email,nombre,contraseña,confirmar,direccion,telefono}=req.query;

    try {
        if([email,contraseña,confirmar,nombre,direccion,telefono].every(Boolean)){
            if(contraseña!=confirmar){
                res.status(400).json({message:"Las contraseñas no coinciden"})
            }

        let userInstance= await User.findOne({
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
      
        if(userInstance==null){
         await User.findOrCreate({
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

          userInstance= await User.findOne({
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
                const DATA={
                    nombre:userInstance.nombre,
                    email:userInstance.email,
                    direccion:userInstance.direccion,
                    telefono:userInstance.telefono,
                    id:userInstance.id
                }
                res.status(200).json({
                    access: true,
                    id:userInstance.dataValues.id,
                    data:DATA
                })
                console.log(1)

        }else{

                const DATA={
            nombre:userInstance.nombre,
            email:userInstance.email,
            direccion:userInstance.direccion,
            telefono:userInstance.telefono,
            id:userInstance.id
        }
        console.log(2)
        res.status(200).json({
            access: true,
            id:userInstance.dataValues.id,
            data:DATA
        })
        }
         
    
    }else{
        res.status(400).json({message:"Faltan datos"})}
    }catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={postUser};