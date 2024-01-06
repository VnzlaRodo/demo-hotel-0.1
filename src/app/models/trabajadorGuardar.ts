export class TrabajadorGuardar{
	constructor(
		public Id_trabajador: string,        
		public Id_cargo: string,
		public Cedula_trabajador: string,
        public Nombre_trabajador: string,
        public Apellido_trabajador: string,
        public Status_trabajador: string,
        public Email_trabajador: string,
        public Telf_trabajador: string,
        public Fecha_nacimiento: Date,
        public Id_administrador: string,
        public Administrador_id_administrador: string,
        public Fecha_registro: string,    
           
	){}
}