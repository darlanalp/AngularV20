export interface User  {
    name: string,
    id: number
}

//Tipo que exclui o id
export type UserPayload = Omit<User, 'id'>