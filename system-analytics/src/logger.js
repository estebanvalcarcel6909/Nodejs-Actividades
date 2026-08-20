import chalk from 'chalk';
import fs from 'fs';

const archivoLog = './system.log';

function guardarLog(tipo, mensaje) {

    const fecha = new Date().toLocaleString();

    const registro =
        `[${fecha}] [${tipo}] ${mensaje}\n`;

    fs.appendFileSync(
        archivoLog,
        registro,
        'utf8'
    );
}

export function logInfo(mensaje) {

    console.log(
        chalk.blue(`[INFO] ${mensaje}`)
    );

    guardarLog('INFO', mensaje);
}

export function logSuccess(mensaje) {

    console.log(
        chalk.green(`[OK] ${mensaje}`)
    );

    guardarLog('OK', mensaje);
}

export function logWarning(mensaje) {

    console.log(
        chalk.yellow(`[ADVERTENCIA] ${mensaje}`)
    );

    guardarLog('ADVERTENCIA', mensaje);
}

export function logError(mensaje) {

    console.log(
        chalk.red.bold(`[ERROR] ${mensaje}`)
    );

    guardarLog('ERROR', mensaje);
}

export function logAccess(usuario) {

    const mensaje =
        `El usuario ${usuario} ingresó al sistema`;

    console.log(
        chalk.green.bold(`[ACCESO] ${mensaje}`)
    );

    guardarLog('ACCESO', mensaje);
}
