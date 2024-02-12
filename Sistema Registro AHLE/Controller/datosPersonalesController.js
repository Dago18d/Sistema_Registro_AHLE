
const datosPersonales = require('..//Model/datosPersonalesModel');

//Insertar

function crear (rq, res){


const datosInternos = new datosPersonales({

    nombre: req.body.nombre,
    apellido: req.body.apellido,
    identidad: req.body.identidad,
    fecha_nacimiento: req.body.fecha_nacimiento,
    edad: req.body.edad,
    tallaRopa: req.body.tallaRopa,
    tallaZapato: req.body.tallaZapato,
    discapacidad: req.body.discapacidad

})

    datosInternos.save().then(
        res.redirect('/')
    ).catch(err =>res.status(500).send({err}))

}


//Mostrar

function visualizar (req, res){


    datosPersonales.find({}).then(datosPersonales=>{

        if(datosPersonales.length) return res.render('index',{datosPersonales:datosPersonales})
        return res.status('204').send({message:'NO SE ENCONTRO CONTENIDO'});

    }).catch(err=> res.status(500).send({err}))
}


//Editar

function editar (req, res){

    const id = req.body.id_editar

    const nombre = req.body.nombre_editar

    const apellido = req.body.apellido_editar
    const fecha_nacimiento = req.body.fecha_nacimiento_editar

    const edad = req.body.edad_editar

    const tallaRopa = req.body.tallaRopa_editar
    const tallaZapato = req.body.tallaZapato_editar

    const discapacidad= req.body.discapacidad_editar

    datosPersonales.findByIdAndUpdate(id,
        {
            nombre: nombre,
            apellido:apellido,
            identidad: identidad,
            fecha_nacimiento: fecha_nacimiento,
            edad: edad,
            tallaRopa: tallaRopa,
            tallaZapato: tallaZapato,
            discapacidad: discapacidad
        }).then(

            res.redirect('/')
        ).catch(err =>res.status(500).send({err}))

}



//Eliminar

function eliminar (req, res) {


    const id = req.params.id
    datosPersonales.findByIdAndDelete(id).then(

        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))



}


module.exports={

    visualizar,
    crear,
    editar,
    eliminar


}