const datosPsicologicos = require('..//Model/datosPsicologicosModel');

//insertar 

function crear (req, res){

const datosPsico = new datosPsicologicos({

    
    comportamientos: req.body.comportamientos,
    enfermedad_trastorno: req.body.enfermedad_trastorno
    
    

})

    datosPsico.save().then(
        res.redirect('/')

    ).catch(err=>res.status(500).send({err}))

}


//Mostrar

function visualizar (req, res){
    datosPsicologicos.find({}).then(datosPsicologicos=>{

        if(datosPsicologicos.length ) return res.render('index', {datosPsicologicos:datosPsicologicos})
        return res.status('204').send({message: 'NO CONTENT'});



    }).catch(err=>res.status(500).send({err}))
}


//Editar

function editar (req, res){

    const id = req.body.id_editar

    const comportamientos = req.body.comportamientos_editar

    const enfermedad_trastorno = req.body.enfermedad_trastorno_editar

    datosPsicologicos.findByIdAndUpdate(id, {comportamientos: comportamientos, enfermedad_trastorno: enfermedad_trastorno}).then(

        res.redirect('/')

    ).catch(err => res.status(500).send({err}))

}


//Eliminar

function eliminar (req, res){

const id = req.params.id
datosPsicologicos.findByIdAndDelete(id).then(
    res.redirect('/')
).catch(err => res.status(500).send({err}))


}


module.exports = {

    visualizar,
    crear,
    editar,
    eliminar

}