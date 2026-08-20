import chalk from 'chalk';

import {
    obtenerInformacionSistema,
    obtenerInformacionProceso
} from './system.js';

import {
    logInfo,
    logSuccess,
    logWarning,
    logError,
    logAccess
} from './logger.js';

import {
    mostrarUsuarios,
    buscarUsuario
} from './users.js';

console.clear();

console.log(
    chalk.cyan.bold(
        '=========================================='
    )
);

console.log(
    chalk.cyan.bold(
        '            SYSTEM ANALYTICS'
    )
);

console.log(
    chalk.cyan.bold(
        '=========================================='
    )
);

function mostrarInfo() {

    const sistema = obtenerInformacionSistema();
    const proceso = obtenerInformacionProceso();

    console.log(
        chalk.magenta.bold(
            '\n--- INFORMACIÓN DEL SISTEMA ---'
        )
    );

    console.log('Sistema:', sistema.sistema);
    console.log('Plataforma:', sistema.plataforma);
    console.log('Arquitectura:', sistema.arquitectura);
    console.log('Versión:', sistema.version);
    console.log('CPU:', sistema.cpu);
    console.log('Cantidad de CPU:', sistema.cantidadCPU);

    console.log(
        'Memoria total:',
        sistema.memoriaTotalGB,
        'GB'
    );

    console.log(
        'Memoria usada:',
        sistema.memoriaUsadaGB,
        'GB'
    );

    console.log(
        'Memoria libre:',
        sistema.memoriaLibreGB,
        'GB'
    );

    console.log(
        'Tiempo encendido:',
        sistema.uptimeHoras,
        'horas'
    );

    console.log(
        chalk.magenta.bold(
            '\n--- INFORMACIÓN DEL PROCESO ---'
        )
    );

    console.log('PID:', proceso.pid);
    console.log('Node.js:', proceso.node);
    console.log('Plataforma:', proceso.plataforma);
    console.log('Directorio:', proceso.directorio);
}

function registrarActividad() {

    console.log(
        chalk.magenta.bold(
            '\n--- REGISTRO DE ACTIVIDADES ---'
        )
    );

    logAccess('Carlos');

    logAccess('Maria');

    logWarning(
        'Pedro intentó acceder con permisos limitados.'
    );

    logError(
        'No se detectaron errores críticos.'
    );

    logSuccess(
        'Registro de actividades completado.'
    );
}

function mostrarMenu() {

    console.log(`
==========================================

Comandos disponibles:

  info       Información del sistema
  usuarios   Mostrar usuarios
  actividad  Mostrar actividades
  monitor    Activar monitor
  buscar     Buscar usuario
  ayuda      Mostrar ayuda

==========================================
    `);
}

function iniciarMonitor() {

    console.log(
        chalk.green(
            'Monitor iniciado. Actualización cada 3 segundos.'
        )
    );

    const intervalo = setInterval(() => {

        const sistema = obtenerInformacionSistema();

        console.clear();

        console.log(
            chalk.cyan.bold(
                '========== SYSTEM MONITOR =========='
            )
        );

        console.log(
            'Fecha:',
            new Date().toLocaleString()
        );

        console.log(
            'Memoria total:',
            sistema.memoriaTotalGB,
            'GB'
        );

        console.log(
            'Memoria usada:',
            sistema.memoriaUsadaGB,
            'GB'
        );

        console.log(
            'Memoria libre:',
            sistema.memoriaLibreGB,
            'GB'
        );

        console.log(
            'CPU:',
            sistema.cantidadCPU
        );

        console.log(
            'Uptime:',
            sistema.uptimeHoras,
            'horas'
        );

        console.log(
            chalk.gray(
                '\nPresiona Ctrl+C para detener.'
            )
        );

    }, 3000);

    process.on('SIGINT', () => {

        clearInterval(intervalo);

        console.log(
            chalk.yellow(
                '\nMonitor detenido correctamente.'
            )
        );

        process.exit(0);
    });
}

function buscar() {

    const id = Number(process.argv[3]);

    if (!id) {

        logWarning(
            'Debes indicar el ID del usuario.'
        );

        console.log(
            'Ejemplo: node src/app.js buscar 2'
        );

        return;
    }

    const usuario = buscarUsuario(id);

    if (!usuario) {

        logError(
            `No existe un usuario con ID ${id}.`
        );

        return;
    }

    logSuccess(
        `Usuario encontrado: ${usuario.nombre}`
    );

    console.table([usuario]);
}

const comando = process.argv[2];

switch (comando) {

    case 'info':
        mostrarInfo();
        break;

    case 'usuarios':
        mostrarUsuarios();
        break;

    case 'actividad':
        registrarActividad();
        break;

    case 'monitor':
        iniciarMonitor();
        break;

    case 'buscar':
        buscar();
        break;

    case 'ayuda':
        mostrarMenu();
        break;

    default:
        mostrarMenu();
        break;
}
