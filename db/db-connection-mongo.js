const mongoose = require('mongoose');

const getConnection = async () => {
    
    try{
        const url = 'mongodb://user_bd:TI3EJBI26mbUCz6f@ac-xrkhaeh-shard-00-00.kmiqz20.mongodb.net:27017,ac-xrkhaeh-shard-00-01.kmiqz20.mongodb.net:27017,ac-xrkhaeh-shard-00-02.kmiqz20.mongodb.net:27017/inventarios-app?ssl=true&replicaSet=atlas-r0uack-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongoose.connect(url);

        console.log('Conexión exitosa');
    } catch (error){
        console.log(error);
    }    

}

module.exports ={
    getConnection,
}