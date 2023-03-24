export interface IUserRequest {
    name: string
    email: string
    password: string
    phone: string
}

export interface IUserResponse extends IUserRequest{
    id: string
    created_at: string  
}

export interface IUserLogin {
    email: string
    password: string
}