
const Registro_Ingreso = require('../Model/Informacion_IngresoModel');


//Insertar

function crear (req, res){

    const RegistroIngreso = new Registro_Ingreso({

    
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    motivo: req.body.motivo,
    referencias: req.body.referencias,
    encargado: req.body.encargado,
    ubicacion: req.body.ubicacion
    
    
        
    })

        RegistroIngreso.save().then(T=>{

        
            
            return res.redirect('/')

 } ).catch(err=>res.status(500).send({err}))

}

    //Mostrar 

    visualizar = async (req, res) => {
        try {
            const interno = await Registro_Ingreso.find();
            console.log('Se ejecuto el visualizar')
            res.json(interno)
        }catch (error) {
            console.log(error)
            res.status(500).send({error: error});
        }
    }


    //Editar

    function editar (req, res){

        const id= req.body.id_editar
        const nombre = req.body.nombre_editar
        const apellido = req.body.apellido_editar
        const motivo = req.body.motivo_editar
        const referencia = req.body.referencia_editar 
        const encargado = req.body.encargado_editar
        const ubicacion = req.body.ubicacion_editar
        
        
        Registro_Ingreso.findByIdAndUpdate(id,{nombre:nombre,
            apellido:apellido,
            motivo:motivo,
            referencia:referencia,
            encargado:encargado,
            ubicacion:ubicacion}).then(
                
                res.redirect('/')

        
        ).catch(err=> res.status(500).send({err}))

    }

    // Eliminar 

    function eliminar(res, req){

        const id = req.params.id
        Registro_Ingreso.findByIdAndDelete(id).then(
            res.redirect('/')
        ).catch(err=> res.status(500).send({err}))
    }


    module.exports = {

        visualizar,
        crear,
        editar,
        eliminar

    }