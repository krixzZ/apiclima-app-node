const axios = require('axios');

const getClima = async(lat, lng) => {

    //let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados de clima para la lat ${lat} y long ${lng}`);
    }

    let temp = resp.data.main.temp;

    return temp;
};

module.exports = {
    getClima
}