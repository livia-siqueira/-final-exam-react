
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export interface Usuario {
    name: string,
    email: string,
    password: string
}


export interface UsuarioState{
    users: Usuario[],
}
