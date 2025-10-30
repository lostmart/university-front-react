export type TFullUser = {
	firstName: string
	lastName: string
	email: string
	logged: boolean
	role: string
	phone?: string
	image?: string
	isVerified?: boolean
}



export type BackendUser = {
	first_name: string
	last_name: string
	email: string
	phone?: string
	role: string
	is_verified?: number
	created_at?: string
}