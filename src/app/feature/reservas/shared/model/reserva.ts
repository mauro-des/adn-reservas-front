export class Reserva {
    id: number;
    idHospedaje: number;
    nombreCliente: string;
    identificacionCliente: string;
    fechaInicio: Date;
    fechaFin: Date;
    cantidadPersonas: number;
    valorReserva: number;
    estado: string;
    activo: string;

    constructor(id: number, idHospedaje: number,  nombreCliente: string, identificacionCliente: string, fechaInicio: Date,
        fechaFin: Date, cantidadPersonas: number, valorReserva: number, estado: string, activo: string)
    {
          
        this.id = id;
        this.idHospedaje = idHospedaje;
        this.nombreCliente = nombreCliente;
        this.identificacionCliente = identificacionCliente;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.cantidadPersonas = cantidadPersonas;
        this.valorReserva = valorReserva;
        this.activo = activo;
        this.estado = estado;
    }
}