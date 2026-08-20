# Actividades de Node.js

Repositorio correspondiente a las actividades de implementación y uso de módulos en Node.js.

## Autor

TU NOMBRE

---

## Requisitos

Para ejecutar las actividades se necesita tener instalado:

- Node.js
- npm
- Git

Para comprobar la instalación de Node.js:

```bash
node -v
```

Para comprobar npm:

```bash
npm -v
```

Para comprobar Git:

```bash
git --version
```

---

# Estructura del proyecto

```text
nodejs-actividades/
│
├── .gitignore
├── README.md
│
├── practica-1-registro/
│   └── registro-sistema.js
│
├── practica-2-cli/
│   └── cli-tool.js
│
├── practica-3-monitor/
│   └── system-monitor.js
│
├── logger-cli/
│   ├── package.json
│   ├── package-lock.json
│   └── src/
│       └── app.js
│
└── system-analytics/
    ├── package.json
    ├── package-lock.json
    └── src/
        ├── app.js
        ├── system.js
        ├── logger.js
        └── users.js
```

---

# Instrucciones de instalación

## 1. Clonar el repositorio

Desde una terminal ejecutar:

```bash
git clone https://github.com/TU-USUARIO/nodejs-actividades.git
```

Entrar a la carpeta:

```bash
cd nodejs-actividades
```

---

# Práctica 1 - Registro y depuración avanzada

## Descripción

Esta práctica utiliza diferentes herramientas de Node.js para mostrar información del sistema y del proceso.

Se utilizan los módulos `os` y `process`, además de diferentes métodos de `console`.

## Ejecución

Desde la carpeta principal del proyecto ejecutar:

```bash
node practica-1-registro/registro-sistema.js
```

El programa muestra:

- Sistema operativo
- Arquitectura
- CPU
- Número de CPUs
- Memoria total
- Memoria libre
- Tiempo de actividad
- PID del proceso
- Versión de Node.js
- Directorio actual
- Tabla de usuarios
- Contador de accesos
- Advertencias
- Errores
- Tiempo de procesamiento

---

# Práctica 2 - Herramienta CLI

## Descripción

Esta práctica implementa una herramienta de línea de comandos utilizando `process.argv`.

## Mostrar ayuda

```bash
node practica-2-cli/cli-tool.js ayuda
```

## Mostrar saludo

```bash
node practica-2-cli/cli-tool.js hola
```

## Mostrar tiempo de actividad

```bash
node practica-2-cli/cli-tool.js tiempo
```

## Mostrar información del proceso

```bash
node practica-2-cli/cli-tool.js procesos
```

## Mostrar información del sistema

```bash
node practica-2-cli/cli-tool.js sistema
```

---

# Práctica 3 - Monitor del sistema

## Descripción

Esta práctica implementa un monitor básico del sistema utilizando el módulo `os` y temporizadores de Node.js.

El programa actualiza la información del sistema cada 3 segundos.

## Ejecución

```bash
node practica-3-monitor/system-monitor.js
```

## Detener el monitor

Para detener el programa:

```text
Ctrl + C
```

---

# Laboratorio - Logger CLI

## Descripción

Este proyecto implementa un sistema básico de registro utilizando Node.js y la librería `chalk`.

El programa muestra mensajes de diferentes tipos utilizando colores:

- Accesos
- Advertencias
- Errores
- Información del sistema
- Usuarios

## Instalar dependencias

Entrar en la carpeta del proyecto:

```bash
cd logger-cli
```

Instalar las dependencias:

```bash
npm install
```

## Ejecutar

```bash
node src/app.js
```

Para volver a la carpeta principal:

```bash
cd ..
```

---

# Desafío final - System Analytics

## Descripción

`system-analytics` es el proyecto integrador de las actividades.

Utiliza diferentes módulos y funcionalidades de Node.js:

- `console`
- `process`
- `os`
- `fs`
- Timers
- `chalk`
- `import/export`
- Módulos propios
- `process.argv`

## Instalar dependencias

Entrar a la carpeta:

```bash
cd system-analytics
```

Instalar las dependencias:

```bash
npm install
```

---

## Comandos disponibles

### Mostrar ayuda

```bash
node src/app.js ayuda
```

### Mostrar información del sistema

```bash
node src/app.js info
```

Este comando muestra información como:

- Sistema operativo
- Plataforma
- Arquitectura
- Versión
- CPU
- Cantidad de CPUs
- Memoria total
- Memoria utilizada
- Memoria libre
- Tiempo de actividad
- PID
- Versión de Node.js

### Mostrar usuarios

```bash
node src/app.js usuarios
```

Muestra una tabla con los usuarios registrados.

### Registrar actividades

```bash
node src/app.js actividad
```

Este comando muestra:

- Accesos
- Advertencias
- Errores
- Mensajes de éxito

Los registros también se guardan en:

```text
system.log
```

El archivo `system.log` no se sube al repositorio porque está incluido en `.gitignore`.

### Buscar un usuario

Para buscar un usuario se debe indicar su ID.

Ejemplo:

```bash
node src/app.js buscar 2
```

También se pueden utilizar otros IDs:

```bash
node src/app.js buscar 1
```

```bash
node src/app.js buscar 3
```

```bash
node src/app.js buscar 4
```

### Ejecutar el monitor

```bash
node src/app.js monitor
```

El monitor actualiza la información del sistema cada 3 segundos.

Para detenerlo:

```text
Ctrl + C
```

---

# Comandos de ejecución rápida

Desde la carpeta principal del proyecto:

## Práctica 1

```bash
node practica-1-registro/registro-sistema.js
```

## Práctica 2

```bash
node practica-2-cli/cli-tool.js ayuda
```

```bash
node practica-2-cli/cli-tool.js hola
```

```bash
node practica-2-cli/cli-tool.js tiempo
```

```bash
node practica-2-cli/cli-tool.js procesos
```

```bash
node practica-2-cli/cli-tool.js sistema
```

## Práctica 3

```bash
node practica-3-monitor/system-monitor.js
```

## Logger CLI

```bash
cd logger-cli
npm install
node src/app.js
cd ..
```

## System Analytics

```bash
cd system-analytics
npm install
node src/app.js ayuda
```

Para consultar información del sistema:

```bash
node src/app.js info
```

Para mostrar usuarios:

```bash
node src/app.js usuarios
```

Para registrar actividades:

```bash
node src/app.js actividad
```

Para buscar un usuario:

```bash
node src/app.js buscar 2
```

Para iniciar el monitor:

```bash
node src/app.js monitor
```

Para detener el monitor:

```text
Ctrl + C
```

---

# Tecnologías utilizadas

- Node.js
- JavaScript
- npm
- Git
- GitHub
- Chalk
- Módulo `os`
- Módulo `process`
- Módulo `fs`
- Timers
- Console
- ES Modules
- `import/export`
- Módulos propios

---

# Git

Para consultar el estado del repositorio:

```bash
git status
```

Para agregar los cambios:

```bash
git add .
```

Para crear un commit:

```bash
git commit -m "feat: completar actividades de Node.js"
```

Para subir los cambios a GitHub:

```bash
git push
```

---

# Autor

TU NOMBRE
