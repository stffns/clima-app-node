const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const direccion = {
        alias: 'd',
        desc: 'Dirección d ela ciudad para obtener el clima',
        demand: true
};

const argv = require('yargs').options({direccion}).argv;

const getInfo = async (direccion)=> {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp}.`;
    } catch (e) {
       return `No se pudo determinar el clima de  ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);








