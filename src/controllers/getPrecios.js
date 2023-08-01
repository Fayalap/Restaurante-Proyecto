const {literal}=require ("sequelize")
const {Precios}=require("../DB_connection")

async function getPrecios(req,res) {
    let totalIngredientes=0;
    let totalPromos=0;
    try {
        const {promosID,ingredientesID}=req.body

            for (const promoId of promosID) {
              if (promoId && promoId !== 0) {
                const totalPreciosPromos = await Precios.findOne({
                  attributes: [[literal(`SUM(precio)`), 'totalPrecios']],
                  where: { PromoId: promoId },
                });
          
                if (totalPreciosPromos.dataValues.totalPrecios) {
                    totalPromos += totalPreciosPromos.dataValues.totalPrecios;
                }
              }
            }
          

            for (const ingredienteID of ingredientesID) {
                if (ingredienteID && ingredienteID !== 0) {
                  const totalPreciosIngredientes = await Precios.findOne({
                    attributes: [[literal(`SUM(precio)`), 'totalPrecios']],
                    where: { ingredienteId: ingredienteID },
                  });
            
                  if (totalPreciosIngredientes.dataValues.totalPrecios) {
                    totalIngredientes += totalPreciosIngredientes.dataValues.totalPrecios;
                  }
                }
              }
        const total=(parseFloat(totalIngredientes)+parseFloat(totalPromos)).toFixed(3)
        res.status(200).json(total)
    } catch (error) {
        res.status(500).json({message:"hubo un error al solicitar el precio"})

    }
    
}
module.exports = {getPrecios};