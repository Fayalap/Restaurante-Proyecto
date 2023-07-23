const {PizzaCreada,Pedido}=require("../DB_connection")

 async function postPizzaCreada(req,res) {
    const {idPedido,ingredientes}=req.body;
    try {
        if([ingredientes,idPedido].every(Boolean)){
           
       const userInstance = await PizzaCreada.create({
        defaults: {
            ingredientes
          },//include: [Precio]
         });
         await conn.models.Pedidos_User.create({
            userId:userID,

            pedidoId:PedidoCreado.pedidoId
         })
        res.status(200).json({message:"Creada con exito"})
    }else{
        res.status(400).json({message:"Faltan datos"})}
    }catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={postPizzaCreada};