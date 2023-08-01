const {Ingrediente,Precios,Promo}=require("../DB_connection")



async function postPrecio (req,res) {

        try {
            const {ingredienteId,precio,promoId} = req.body;
            if(ingredienteId){ 
                const ingrediente = await Ingrediente.findByPk(ingredienteId); 
                if(!ingrediente){
                return res.status(404).json({message:"Ingrediente no encontrado"})
                }
                const nuevoPrecio = await Precios.create({precio:precio.toFixed(3)})
                await ingrediente.setPrecio(nuevoPrecio)
                console.log((await ingrediente.getPrecio()))
            }
            if(promoId){ 
                const promo = await Promo.findByPk(promoId); 
                if(!promo){
                return res.status(404).json({message:"Promo no encontrada"})
                }
                const nuevoPrecio = await Precios.create({precio:precio.toFixed(3)})
                await promo.setPrecio(nuevoPrecio)
                console.log((await promo.getPrecio()))

            }
            

            return res.status(201).json({message:"Nuevo precio creado con exito"});

        } catch (error) {
            return res.status(500).json({message:error.message});

        }


    
}
module.exports = {postPrecio};