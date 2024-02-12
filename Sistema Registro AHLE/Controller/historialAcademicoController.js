
const historialAcademico = require('..//Model/historialAcademicoModel');

//Insertar

function crear (rq, res){


const historial = new historialAcademico({

    
    nivelEducativo: req.body.nivelEducativo,
    ultimoGradoEscolar: req.body.ultimoGradoEscolar,
    institucionAnterior: req.body.institucionAnterior,
    areaInteres: req.body.areaInteres

    

})

    historial.save().then(
        res.redirect('/')
    ).catch(err =>res.status(500).send({err}))

}


//Mostrar

function visualizar (req, res){


    historialAcademico.find({}).then(historialAcademico=>{

        if(historialAcademico.length) return res.render('index',{historialAcademico:historialAcademico})
        return res.status('204').send({message:'NO SE ENCONTRO CONTENIDO'});

    }).catch(err=> res.status(500).send({err}))
}


//Editar

function editar (req, res){

    const id = req.body.id_editar
    const nivelEducativo= req.body.nivelEducativo_editar
    const ultimoGradoEscolar =req.body.ultimoGradoEscolar_editar
    const institucionAnterior =req.body.institucionAnterior_editar
    const areaInteres =req.body.areaInteres_editar


    historialAcademico.findByIdAndUpdate(id,
        {
            nivelEducativo: nivelEducativo,
            ultimoGradoEscolar: ultimoGradoEscolar,
            institucionAnterior: institucionAnterior,
            areaInteres: areaInteres
            
           
        }).then(

            res.redirect('/')
        ).catch(err =>res.status(500).send({err}))

}



//Eliminar

function eliminar (req, res) {


    const id = req.params.id
    historialAcademico.findByIdAndDelete(id).then(

        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))



}


module.exports={

    visualizar,
    crear,
    editar,
    eliminar


}