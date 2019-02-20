//require
const fs = require('fs');
const colors = require('colors');

//se podría crear de dos formas el archivo colocando
//module.exports.crearArchivo=... y el contenido de la función

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        //validamos si el dato ingresado no es un número, si es así
        //mandamos el reject y retornamos para que salga de la función.
        if (!Number(base)) {
            reject(`El valor introducido: ${base} no es un número`);
            return;
        }

        let data = '';



        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        //el primer campo es la ruta y el nombre que le vamos a dar al archivo
        //el segundo es la data que le voy a mandar al archivo
        //el tercero es un error en caso no pueda generarlo
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`)
        });
    });
}

let listarTabla = (base, limite = 10) => {
    console.log('======================'.green);
    console.log(`tabla de ${base}`);
    console.log('======================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`);
    }

}


//o tambien podemos hacerlo bajo un objeto que almacene en todas sus propiedades
//lo que se va a exportar
module.exports = {
    crearArchivo,
    listarTabla
}