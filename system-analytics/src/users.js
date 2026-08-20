export const usuarios = [
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
    },
    {
        id: 4,
        nombre: 'Ana',
        rol: 'Usuario',
        estado: 'Activo'
    }
];

export function mostrarUsuarios() {

    console.log('\n--- USUARIOS DEL SISTEMA ---');

    console.table(usuarios);
}

export function buscarUsuario(id) {

    return usuarios.find(
        usuario => usuario.id === id
    );
}
