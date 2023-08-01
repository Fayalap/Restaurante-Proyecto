const {User}=require("../DB_connection")


 async function putInfoUser(req,res) {

    const {nombre,numero,direccion,id}=req.body;
    console.log(req.body)
    try {
        const [actualizado, [usuarioActualizado]] = await User.update(req.body, {
            where: { id: id },
            returning: true // Devuelve el usuario actualizado
          });
          console.log(actualizado)
          console.log(usuarioActualizado)
          if (actualizado === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
          }
          const data={
            nombre:usuarioActualizado.nombre,
            direccion:usuarioActualizado.direccion,
            telefono:usuarioActualizado.telefono
         }
          res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });

    }
    
}
module.exports={putInfoUser};