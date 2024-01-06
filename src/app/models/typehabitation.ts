export class TypeHabitation{
	constructor(
		public id: string,
		public name: string,
		public price: number,
        public images: string[],
		public description: string,
        public status: number
        
		){}
}