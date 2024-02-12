
const datosEncargado = require('..//Model/datosEncargadoModel');

//Insertar

function crear (rq, res){


const encargado = new datosEncargado({

    nombre: req.body.nombre,
    telefono: req.body.telefono,
    edad: req.body.edad,
    correo: req.body.correo,
    profesion: req.body.profesion
    

})

    encargado.save().then(
        res.redirect('/')
    ).catch(err =>res.status(500).send({err}))

}


//Mostrar

function visualizar (req, res){


    datosEncargado.find({}).then(datosEncargado=>{

        if(datosEncargado.length) return res.render('index',{datosEncargado:datosEncargado})
        return res.status('204').send({message:'NO SE ENCONTRO CONTENIDO'});

    }).catch(err=> res.status(500).send({err}))
}


//Editar

function editar (req, res){

    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const telefono = req.body.telefono_editar
    const edad = req.body.edad_editar
    const correo = req.body.correo_editar
    const profesion = req.body.profesion_editar


    datosEncargado.findByIdAndUpdate(id,
        {
            nombre: nombre,
            telefono: telefono,
            edad: edad,
            correo: correo,
            profesion: profesion
            
           
        }).then(

            res.redirect('/')
        ).catch(err =>res.status(500).send({err}))

}



//Eliminar

function eliminar (req, res) {


    const id = req.params.id
    datosEncargado.findByIdAndDelete(id).then(

        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))



}


module.exports={

    visualizar,
    crear,
    editar,
    eliminar


}