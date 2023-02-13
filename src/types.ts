export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

export interface UserModel {
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: string
}

export interface ProductDB {
    id: string,
    name: string,
    price: number,
    created_at: string
}

// export interface ProductDBPost {
//     id: string,
//     name: string,
//     price: number
// }

export interface ProductModel {
    id: string,
    name: string,
    price: number,
    createdAt: string
}
