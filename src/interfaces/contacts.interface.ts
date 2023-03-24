interface IContactReq {
    name: string
    email: string
    phone: string
}

interface IContactRes extends IContactReq{
    id: string
    created_At: Date
}