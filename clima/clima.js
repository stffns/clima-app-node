const axios  = require('axios');

const getClima = async (lat,lng) => {

   const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=19a87965d4c6e0ac4a46dabcda156ac1&units=metric`)

        return clima.data.main.temp;

}


module.exports = {

    getClima

}

