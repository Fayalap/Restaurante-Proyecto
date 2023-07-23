const {Ingrediente,Precios,Pizza}=require("../DB_connection")



async function postPrecio (req,res) {

        try {
            const {ingredienteId,precio,pizzaId} = req.body;
            console.log(ingredienteId)
            console.log(precio.toFixed(3))

            if(ingredienteId){ 
                const ingrediente = await Ingrediente.findByPk(ingredienteId); 
                if(!ingrediente){
                return res.status(404).json({message:"Ingrediente no encontrado"})
                }
                const nuevoPrecio = await Precios.create({precio:precio.toFixed(3)})
                await ingrediente.setPrecio(nuevoPrecio)
                console.log((await ingrediente.getPrecio()))
            }
            if(pizzaId){ 
                const pizza = await Pizza.findByPk(pizzaId); 
                if(!pizza){
                return res.status(404).json({message:"Pizza no encontrada"})
                }
                const nuevoPrecio = await Precios.create({precio:precio.toFixed(3)})
                await pizza.setPrecio(nuevoPrecio)
                console.log((await pizza.getPrecio()))

            }
            

            return res.status(201).json({message:"Nuevo precio creado con exito"});

        } catch (error) {
            return res.status(500).json({message:error.message});

        }


    
}
module.exports = {postPrecio};