export class Service{
	constructor(
		public id: string,
		public name: string,
        public icono: string,
        public imagenes: string[],
		public price: number,
        public status: string,
        public Descripcion: string,
        public id_Admin: string,
        public fecha_registro?: Date
		){}
}