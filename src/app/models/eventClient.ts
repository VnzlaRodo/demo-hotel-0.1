export interface EventClient{
	
	id: string,
    name: string,
    date?: Date,
	price: number,
    amount: number,
    avatar: string,
    status: string,
    type: Type,
    space: Space

}

interface Type{
    name: string,
    status?: string
}

interface Space{
    name: string,
    size?: number,
    amount?: number
}