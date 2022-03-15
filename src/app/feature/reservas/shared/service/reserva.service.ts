import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Reserva } from '../model/reserva';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(
    private http: HttpService
  ) { }

  public consultar() {
    return this.http.doGet<Reserva[]>(`${environment.urlReservas}${environment.endpointReservas}/reservas`, this.http.optsName('consultar reservas'));
  }

  public guardar(reserva: Reserva) {
    return this.http.doPost<Reserva, {valor: number}>(`${environment.urlReservas}${environment.endpointReservas}/reservas`, reserva,
                                                this.http.optsName('crear reservas'));
  }

  public eliminar(reserva: Reserva) {
    return this.http.doDelete<boolean>(`${environment.urlReservas}${environment.endpointReservas}/reservas/${reserva.id}`,
                                                 this.http.optsName('eliminar reserva'));
  }
}
