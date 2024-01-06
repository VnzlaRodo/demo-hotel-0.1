export interface Habitation{
	
		id: string,        
		id_type_habitation: string,
        id_lodging: string,
        number: number,
        adults: number,
        children: number,
        description: string,
        status: string,
        type?: Type,		
        lodging?: any
}

interface Type{
    name: string
}

