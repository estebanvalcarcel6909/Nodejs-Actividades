const os = require('os');
const process = require('process');

const comando = process.argv[2];

console.log('======================================');
console.log('          NODE.JS CLI TOOL');
console.log('======================================');

switch (comando) {

    case 'hola':

        console.log('¡Hola! Bienvenido a la herramienta CLI.');

        console.log(
            'Usuario:',
            os.userInfo().username
        );

        break;

    case 'tiempo':

        console.log('Tiempo de actividad del sistema:');

        console.log(
            (os.uptime() / 3600).toFixed(2),
            'horas'
        );

        break;

    case 'procesos':

        console.log('--- INFORMACIÓN DEL PROCESO ---');

        console.log('PID:', process.pid);
        console.log('Node.js:', process.version);
        console.log('Plataforma:', process.platform);

        console.log('\nMemoria utilizada:');

        console.log(process.memoryUsage());

        break;

    case 'sistema':

        console.log('--- INFORMACIÓN DEL SISTEMA ---');

        console.log('Sistema:', os.type());
        console.log('Plataforma:', os.platform());
        console.log('Arquitectura:', os.arch());
        console.log('CPU:', os.cpus().length);

        break;

    case 'ayuda':

        console.log(`
Comandos disponibles:

  hola        Mostrar un saludo
  tiempo      Mostrar tiempo de actividad
  procesos    Mostrar información del proceso
  sistema     Mostrar información del sistema
  ayuda       Mostrar los comandos disponibles
        `);

        break;

    default:

        console.log('Comando no reconocido.');

        console.log(
            'Escribe: node practica-2-cli/cli-tool.js ayuda'
        );

        break;
}
