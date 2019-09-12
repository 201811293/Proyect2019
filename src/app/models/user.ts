export interface User {
    id?: string;
    name?: string;
    email?: string;
    password?: string
    photoUrl?: string;
    fecha_inicio?: string;
    roles: Roles;
    
}

export interface Roles {
    usuario?: boolean;
    admin?: boolean;
  }