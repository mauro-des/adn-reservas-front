import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/service/reserva.service';
import { ACTIVO, ESTADOS_RESERVA } from '@shared/constantes/Constantes';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  reservas: Observable<Reserva[]>;
  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.consultarReservas();
  }

  onEliminar(reserva: Reserva):void {
    this.reservaService.eliminar(reserva).subscribe(() => {
      this.consultarReservas();      
    });
  }

  consultarReservas(): void{
    this.reservas = this.reservaService.consultar();
  }

  getEstadosReserva() {
    return ESTADOS_RESERVA;
  }

  getActivo() {
    return ACTIVO;
  }

}
