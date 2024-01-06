export class Trabajador{
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
        public Fecha_registro: Date,    
        public cargo?: {
            Id_cargo: string,
            Nombre_cargo: string,
            Status: string,
            Fecha_ingreso: string,
            Administrador_id_administrador: string,
            Fecha_registro: string
        }   ,
        public administrador?: {
            Id_administrador: string,
            Id_trabajador: string,
            Usuario_administrador: string,
            Password_administrador: string,
            Status_administrador: string,
            Fecha: Date,
            Id_cargo: string,
            Inicio_sesion: string,
            Fin_sesion: string,
            Pregunta_seguridad_1: string,
            Respuesta_seguridad_1: string,
            Pregunta_seguridad_2: string,
            Respuesta_seguridad_2: string
        }        
	){}
}