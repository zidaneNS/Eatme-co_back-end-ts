export type RolesType = 'user' | 'admin' | 'guest'

export interface UserType {
    user_name: string,
    password: string,
    roles: RolesType
}

export interface FoodType {
    name: string,
    description: string,
    price: number
}