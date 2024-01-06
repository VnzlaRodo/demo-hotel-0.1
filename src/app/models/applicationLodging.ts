export interface ApplicationLodging {
    tipoIdentidad: string,
    cedula: string,
    name: string,
    lastname: string,
    phone: string,
    email: string,
    address?: string,
    avatar?: string,
    checkin: string,
    checkout: string,
    adults: number,
    children?: number
}