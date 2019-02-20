//en este ejemplo lo que hacemos es reducir código y distribuir en
//archivos todo el config de yargs

//importamos los js de los otros archivos
const argv = require('./config/yargs').argv
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const colors = require('colors');

//guardamos la primera posición del arreglo '_' que es la posición donde guarda los
//comandos
let comando = argv._[0];

//con un switch validamos el arreglo '_' que se encuentra en yargs que es donde
//guarda los comandos
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}