import os from 'os';
import process from 'process';

export function obtenerInformacionSistema() {

    const memoriaTotal = os.totalmem();
    const memoriaLibre = os.freemem();
    const memoriaUsada = memoriaTotal - memoriaLibre;

    return {
        sistema: os.type(),
        plataforma: os.platform(),
        arquitectura: os.arch(),
        version: os.release(),
        cpu: os.cpus()[0].model,
        cantidadCPU: os.cpus().length,

        memoriaTotalGB:
            (memoriaTotal / 1024 / 1024 / 1024).toFixed(2),

        memoriaLibreGB:
            (memoriaLibre / 1024 / 1024 / 1024).toFixed(2),

        memoriaUsadaGB:
            (memoriaUsada / 1024 / 1024 / 1024).toFixed(2),

        uptimeHoras:
            (os.uptime() / 3600).toFixed(2)
    };
}

export function obtenerInformacionProceso() {

    return {
        pid: process.pid,
        node: process.version,
        plataforma: process.platform,
        directorio: process.cwd()
    };
}
