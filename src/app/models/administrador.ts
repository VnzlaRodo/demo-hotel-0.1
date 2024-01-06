export class Administrador{
	constructor(
		public Id_administrador: string,        
		public Id_cargo: string,
		public Id_trabajador: string,
        public Usuario_administrador: string,
        public Password_administrador: string,
        public Fecha: Date,
        public Status_administrador: string,
        public Inicio_sesion?: string,
        public Fin_sesion?: string,        
	){}
}