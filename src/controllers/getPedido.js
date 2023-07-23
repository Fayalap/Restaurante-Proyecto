const {Pedido}=require("../DB_connection")
const {User}=require("../DB_connection")

async function getPedido(req,res) {
  const {id}=req.query;
    try {
        const user = await User.findByPk(id, {
            include: [Pedido_User], // Incluir el modelo Pedido en la consulta
          });
          if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
          }
      
          const userPedidos = user.Pedido; // Acceder a la propiedad 'Pedido' para obtener los Pedidos del usuario
      
          res.status(200).json(userPedidos);
    } catch (error) {
        res.status(500).json({error:error.message})

    }



}

module.exports={getPedido};