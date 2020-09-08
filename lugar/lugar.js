const axios = require('axios');

const getLugarLatLng = async ( direccion ) => {

    const encodeUrl = encodeURI(direccion);

    console.log(encodeUrl)

    const params = {
    auth: '967946289576290734857x43046',
    locate: encodeUrl,
    json: '1'
}
    const resp = await axios.get('https://geocode.xyz', {params});

    if(resp.data.length === 0){
        throw new Error(`No hay resultados para la locación ${direccion}`)
    }

    const data = resp.data;
    const address = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}