export interface IContactReq {
    name: string
    email: string
    phone: string
}

export interface IContactRes extends IContactReq{
    id: string
    created_At: Date
}

export interface IContactUpdate {
    name?: string
    email?: string
    phone?: string
}