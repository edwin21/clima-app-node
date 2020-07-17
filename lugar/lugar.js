const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    //console.log(encodeUrl);
    //console.log(`https://geocode.xyz/${encodeUrl}?json=1`);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeUrl}?json=1`,
        //  timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' }
    });

    const resp = await instance.get();

    if (resp.data.error != undefined) {

        throw new Error(`No hay resultados para ${direccion}`);

    }

    const nombre = resp.data.standard.city;
    const lat = resp.data.latt;
    const lng = resp.data.longt;

    return {
        nombre,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLng
};