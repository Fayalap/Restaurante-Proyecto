const {User, Pedido}=require("../DB_connection")
async function login(req,res) {
    const {email,contraseña}=req.query;
    try {
        if(email.length>0 && contraseña.length>0){
        const instance= await User.findOne({
            where:{email:email},
            include: [Pedido],
        })
        const DATA={
            nombre:instance.nombre,
            email:instance.email,
            direccion:instance.direccion,
            telefono:instance.telefono,
            id:instance.id
        }
        if(instance==null){
           res.status(403).json({ message: "Usuario no encontrado" }) 
        }else{
           if(instance.contraseña==contraseña){
            res.status(200).json({
                access: true,
                id:instance.id,
                data:DATA
             })
        }else{
            res.status(403).json({ message: "Contraseña incorrecta" })

        }  
        }
    }else{
        res.status(400).json({message:"Faltan datos"})
    }
    } catch (error) {
        res.status(500).json({message:"algo salío mal"})

    }
    
}
module.exports={login};