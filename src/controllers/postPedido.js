const {Favorite}=require("../DB_connection")
const {User}=require("../DB_connection")
const {conn}=require("../DB_connection")
async function postPedido(req,res) {
    const {userID,name,direccion,pizzasID,telefono}=req.body;
    try {
        if([name,direccion,pizzasID,telefono].every(Boolean)){
        await Pedido.findOrCreate({
        where: { id: userID },
        defaults: {
            id, name,image,species,gender
        },

      });
       await conn.models.user_favorite.create({
                userId:userID,
                favoriteId:id
             })
     const favorite=await User.findByPk(userID,{
        include: [Favorite],
      });
      
        res.status(201).json(favorite.Favorites)

    }else{
        res.status(400).json("Faltan datos")
    }
    } catch (error) {
        res.status(500).json({error:error.message})

    }

    
}

module.exports={postPedido};