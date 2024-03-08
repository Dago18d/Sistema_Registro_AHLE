const Historial = require ('..//Model/historialAcademicoModel')

exports.historialDato = async (req, res) => {

    try {
        let historial;
        //Crea Registro
        historial = new Historial(req.body);

        await historial.save();
        res.send(historial);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getHistoriales = async (req, res) => {

    try {

        const historial = await Historial.find();
        res.json(historial);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.ediHistorial = async (req, res) => {

    try {

        const { nivelEducativo, ultimoGradoEscolar, institucionAnterior, AreaInteres } = req.body;
        let historial = await Registro.findById(req.params.id);

        if(!historial){
            res.status(404).json({msg:'Registro not found, try with other Registro'})
        }

        historial.nivelEducativo = nivelEducativo;
        historial.ultimoGradoEscolar = ultimoGradoEscolar;
        historial.institucionAnterior = institucionAnterior;
        historial.AreaInteres = AreaInteres;
        

        historial = await Historial.findOneAndUpdate({_id : req.params.id}, historial, {new:true})
        res.json(historial);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getHistorial = async (req, res) => {

    try {

        let historial = await Historial.findById(req.params.id);

        if(!historial){
            res.status(404).json({msg:'Registro not found, try with other Registro'})
        }

        res.json(historial);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}



exports.deleteHistorial = async (req, res) => {

    try {

        let historial = await Historial.findById(req.params.id);

        if(!historial){
            res.status(404).json({msg:'Registro not found, try with other Registro'})
        }

        await Historial.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Registro deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}