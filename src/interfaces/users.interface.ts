export interface IUserRequest {
    name: string
    email: string
    phone: string
}

export interface IUserResponse extends IUserRequest{
    id: string
    created_at: string  
}