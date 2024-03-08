
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/AHLEregistro';

const DBconnection = async () => {

    try {

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD Conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }

}

module.exports = DBconnection
