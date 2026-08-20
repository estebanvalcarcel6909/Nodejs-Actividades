const os = require('os');
const process = require('process');

console.log('====================================');
console.log('   REGISTRO Y DEPURACIÓN AVANZADA');
console.log('====================================');

console.log('\n--- INFORMACIÓN DEL SISTEMA ---');

console.log('Sistema operativo:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('CPU:', os.cpus()[0].model);
console.log('Número de CPUs:', os.cpus().length);
console.log('Memoria total:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Memoria libre:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Tiempo encendido:', os.uptime(), 'segundos');

console.log('\n--- INFORMACIÓN DEL PROCESO ---');

console.log('PID:', process.pid);
console.log('Versión de Node:', process.version);
console.log('Directorio actual:', process.cwd());
console.log('Plataforma:', process.platform);
console.log('Argumentos:', process.argv);

console.log('\n--- REGISTRO DE USUARIOS ---');

const usuarios = [
    {
        id: 1,
        nombre: 'Carlos',
        rol: 'Administrador',
        estado: 'Activo'
    },
    {
        id: 2,
        nombre: 'María',
        rol: 'Usuario',
        estado: 'Activo'
    },
    {
        id: 3,
        nombre: 'Pedro',
        rol: 'Usuario',
        estado: 'Inactivo'
    }
];

console.table(usuarios);

console.log('\n--- CONTADOR DE ACCESOS ---');

console.count('Acceso al sistema');
console.count('Acceso al sistema');
console.count('Acceso al sistema');

console.log('\n--- ADVERTENCIAS ---');

console.warn('ADVERTENCIA: El usuario Pedro está inactivo.');

console.log('\n--- ERRORES ---');

console.error('ERROR DE PRUEBA: Este es un mensaje de error.');

console.log('\n--- MEDICIÓN DEL PROCESO ---');

console.time('Tiempo de procesamiento');

for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
}

console.timeEnd('Tiempo de procesamiento');

console.log('\n====================================');
console.log('       PROCESO FINALIZADO');
console.log('====================================');
