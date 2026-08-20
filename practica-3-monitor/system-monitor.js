const os = require('os');

function mostrarInformacion() {

    console.clear();

    console.log('======================================');
    console.log('       MONITOR DEL SISTEMA');
    console.log('======================================');

    const memoriaTotal = os.totalmem();
    const memoriaLibre = os.freemem();
    const memoriaUsada = memoriaTotal - memoriaLibre;

    const porcentaje =
        ((memoriaUsada / memoriaTotal) * 100).toFixed(2);

    console.log('\n--- SISTEMA OPERATIVO ---');

    console.log('Sistema:', os.type());
    console.log('Plataforma:', os.platform());
    console.log('Arquitectura:', os.arch());
    console.log('Versión:', os.release());

    console.log('\n--- CPU ---');

    console.log('Cantidad de CPUs:', os.cpus().length);
    console.log('Modelo:', os.cpus()[0].model);

    console.log('\n--- MEMORIA ---');

    console.log(
        'Memoria total:',
        (memoriaTotal / 1024 / 1024 / 1024).toFixed(2),
        'GB'
    );

    console.log(
        'Memoria usada:',
        (memoriaUsada / 1024 / 1024 / 1024).toFixed(2),
        'GB'
    );

    console.log(
        'Memoria libre:',
        (memoriaLibre / 1024 / 1024 / 1024).toFixed(2),
        'GB'
    );

    console.log('Uso de memoria:', porcentaje + '%');

    console.log('\n--- SISTEMA ---');

    console.log(
        'Tiempo encendido:',
        (os.uptime() / 3600).toFixed(2),
        'horas'
    );

    console.log(
        'Fecha:',
        new Date().toLocaleString()
    );

    console.log('\nActualizando cada 3 segundos...');
    console.log('Presiona Ctrl + C para detener.');
}

mostrarInformacion();

const monitor = setInterval(
    mostrarInformacion,
    3000
);

process.on('SIGINT', () => {

    clearInterval(monitor);

    console.log('\nMonitor detenido correctamente.');

    process.exit(0);
});
