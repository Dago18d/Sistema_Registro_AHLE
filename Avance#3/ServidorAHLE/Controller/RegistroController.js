const Registro = require ('../Model/RegistroModel')

exports.registroDato = async (req, res) => {

    try {
        let registro;
        //Crea Registro
        registro = new Registro(req.body);

        await registro.save();
        res.send(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getRegistros = async (req, res) => {

    try {

        const registro = await Registro.find();
        res.json(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}








exports.updateRegistro = async (req, res) => {

    try {

        const { nombre, apellido, motivo, referencias, encargado, ubicacion } = req.body;
        let registro = await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({msg:'Registro not found, try with other Registro'})
        }

        registro.nombre = nombre;
        registro.apellido = apellido;
        registro.motivo = motivo;
        registro.referencias = referencias;
        registro.encargado= encargado;
        registro.ubicacion= ubicacion

        registro = await Registro.findOneAndUpdate({_id : req.params.id}, registro, {new:true})
        res.json(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.getRegistro = async (req, res) => {

    try {

        let registro = await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({msg:'Registro not found, try with other Registro'})
        }

        res.json(registro);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}



exports.deleteRegistro = async (req, res) => {

    try {

        let registro = await Registro.findById(req.params.id);

        if(!registro){
            res.status(404).json({msg:'Registro not found, try with other Registro'})
        }

        await Registro.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Registro deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}