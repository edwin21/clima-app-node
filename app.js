const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion).then(console.log);


// clima.getClima('21.53726', '-104.87529')
//     .then(console.log)
//     .catch(console.log);


//Esta es la solucion del video
const getInfo = async(direccion) => {

    try {

        const cords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(cords.lat, cords.lng);

        console.log(`El clima de ${direccion} es de ${temp}`);

    } catch (error) {

        console.log(`No se pudo determinar el clima de ${direccion}`);

    }


};

// //Esta solucion la hice sin ver el video.
// const getInfo = (direccion) => {

//     lugar.getLugarLatLng(argv.direccion)
//         .then(lugar => {

//             clima.getClima(lugar.lat, lugar.lng)
//                 .then(resp => {
//                     console.log(`El clima de ${direccion} es de ${resp}`);
//                 }).catch(err => {
//                     console.log(`No se pudo determinar el clima de ${direccion}`);
//                 });

//         })
//         .catch(err => {
//             console.log(`No se pudo determinar el clima de ${direccion}`);
//         });

// };

getInfo(argv.direccion);