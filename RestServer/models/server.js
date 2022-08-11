const express = require('express')
var cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.middleware();
        this.UserPath = '/user';
        this.routes();
    }

    //Para enviarle un end point que es codigo segmentado
    routes() {
        this.app.use(this.UserPath, require('../routes/user'));


    }

    //Para enviar la ruta de un html que esta en public 
    middleware() {
        //CORS significa Cross-Origin Resource Sharing, y es una política a nivel de navegador web que se aplica para prevenir que el dominio A evite acceder a recursos del dominio B usando solicitudes del tipo AJAX como cuando usamos fetch() o XMLHttpRequest.
        this.app.use(cors());
        this.app.use(express.static('public'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Run server', this.port);
        })
    }

}

module.exports = Server;