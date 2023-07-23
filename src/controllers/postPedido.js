const {Pedido}=require("../DB_connection")
const {Precios}=require("../DB_connection")
const {User}=require("../DB_connection")
const {conn}=require("../DB_connection")
async function postPedido(req,res) {
    const {userID,nombre,direccion,pizzasID,añadidos,telefono}=req.body;
    try {
        if([nombre,direccion,pizzasID,telefono].every(Boolean)){

        const PedidoCreado = await Pedido.create({
        defaults: {
            nombre_cliente:nombre,direccion_entrega:direccion,telefono_contacto:telefono,pizzas_id:pizzasID,
            añadidos:añadidos
        },

      });
       await conn.models.Pedidos_User.create({
                userId:userID,

                pedidoId:PedidoCreado.pedidoId
             })
     const pedido=await User.findByPk(userID,{
        include: [Pedido],
      });
      
        res.status(201).json(pedido.Pedido)

    }else{
        res.status(400).json("Faltan datos")
    }
    } catch (error) {
        res.status(500).json({error:error.message})

    }

    
}

module.exports={postPedido};