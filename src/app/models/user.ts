export interface User {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    fecha_creado?: string;
    roles?: string;
}

export interface Roles {
    usuario?: boolean;
    admin?: boolean;
}