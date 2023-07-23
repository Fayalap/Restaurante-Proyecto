const {literal}=require ("sequelize")
const {Precios}=require("../DB_connection")

async function getPrecios(req,res) {
    let totalIngredientes=0;
    let totalPizzas=0;
    try {
        const {pizzasID,ingredientesID}=req.body
        if(ingredientesID&&ingredientesID!=0){
                const totalPreciosIngredientes=await Precios.findOne({
                    attributes: [
                        [literal(`SUM(precio)`), 'totalPrecios'],
                    ],
                     where:{ingredienteId:ingredientesID}
                })
                totalIngredientes = totalPreciosIngredientes.dataValues.totalPrecios.toFixed(3);
        }
                
        if(pizzasID&&pizzasID!=0){
                const totalPreciosPizzas=await Precios.findOne({
                    attributes: [
                        [literal(`SUM(precio)`), 'totalPrecios'],
                        ],
                    where:{PizzaId:pizzasID}
                })
                totalPizzas=totalPreciosPizzas.dataValues.totalPrecios.toFixed(3);

        }
       
   
        
        
        const total=(parseFloat(totalIngredientes)+parseFloat(totalPizzas)).toFixed(3)
        
        res.status(200).json(total)
    } catch (error) {
        res.status(500).json({message:error.message})

    }
    
}
module.exports = {getPrecios};