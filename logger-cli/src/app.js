const chalk = require('chalk');
const os = require('os');
const process = require('process');

console.clear();

console.log(
    chalk.blue.bold('======================================')
);

console.log(
    chalk.blue.bold('             LOGGER CLI')
);

console.log(
    chalk.blue.bold('======================================')
);

function registrarAcceso(usuario) {

    console.log(
        chalk.green(
            `[ACCESO] Usuario "${usuario}" ingresó correctamente.`
        )
    );
}

function registrarAdvertencia(mensaje) {

    console.log(
        chalk.yellow(
            `[ADVERTENCIA] ${mensaje}`
        )
    );
}

function registrarError(mensaje) {

    console.log(
        chalk.red.bold(
            `[ERROR] ${mensaje}`
        )
    );
}

registrarAcceso('Carlos');
registrarAcceso('Maria');
registrarAcceso('Pedro');

registrarAdvertencia(
    'El usuario Pedro tiene permisos limitados.'
);

registrarError(
    'No fue posible conectar con la base de datos.'
);

console.log(
    chalk.cyan.bold('\n--- USUARIOS ---')
);

const usuarios = [
    {
        id: 1,
        nombre: 'Carlos',
        rol: 'Administrador',
        estado: 'Activo'
    },
    {
        id: 2,
        nombre: 'Maria',
        rol: 'Editor',
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

console.log(
    chalk.magenta.bold('\n--- INFORMACIÓN DEL SISTEMA ---')
);

console.log('Sistema:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Node.js:', process.version);
console.log('PID:', process.pid);

console.log(
    chalk.green.bold('\nLogger ejecutado correctamente.')
);
