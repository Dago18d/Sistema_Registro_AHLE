
const datosClinicos = require('..//Model/datosClinicosModel');

//Insertar

function crear (rq, res){


const datoMedico = new datosClinicos({

    alergias: req.body.alergias,
    padecimiento: req.body.padecimiento,
    medicamentos: req.body.medicamentos,
    contactoEmergencia: req.body.contactoEmergencia
    

})

    datoMedico.save().then(
        res.redirect('/')
    ).catch(err =>res.status(500).send({err}))

}


//Mostrar

function visualizar (req, res){


    datosClinicos.find({}).then(datosClinicos=>{

        if(datosClinicos.length) return res.render('index',{datosClinicos:datosClinicos})
        return res.status('204').send({message:'NO SE ENCONTRO CONTENIDO'});

    }).catch(err=> res.status(500).send({err}))
}


//Editar

function editar (req, res){

    const id = req.body.id_editar
    const alergias = req.body.alergias_editar
    const padecimiento = req.body.padecimiento_editar
    const medicamentos= req.body.medicamentos_editar
    const contactoEmergencia = req.body.contactoEmergencia_editar


    datosClinicos.findByIdAndUpdate(id,
        {
            alergias : alergias,
            padecimiento: padecimiento,
            medicamentos: medicamentos,
            contactoEmergencia: contactoEmergencia

            
           
        }).then(

            res.redirect('/')
        ).catch(err =>res.status(500).send({err}))

}



//Eliminar

function eliminar (req, res) {


    const id = req.params.id
    datosClinicos.findByIdAndDelete(id).then(

        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))



}


module.exports={

    visualizar,
    crear,
    editar,
    eliminar


}