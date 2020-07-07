export interface Student {
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
    email: string,
    date: string,
    faculty: Faculties,
    group: string,
    id?: number
}
export enum Faculties {
    IT, Engineering, Math, Economic
}