export class Vendor{
	constructor(
		public Id_proveedor: string,
		public Nombre_proveedor: string,
		public Apellido_proveedor: string,
        public Status: string,
        public Email_proveedor: string,
        public Telf_proveedor: string,
        public Direccion_proveedor: string,
        public nombre_Producto: string,
        public cantidad_Producto: number,
        public Administrador_id_administrador: string,
        public descripcion_Producto?: string,
        public Empresa?: string,
        public Fecha_registro?: Date
	){}
}