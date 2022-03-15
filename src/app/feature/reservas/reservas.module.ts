import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasComponent } from './components/reserva/reservas.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ReservaService } from './shared/service/reserva.service';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';


@NgModule({
  declarations: [
    ReservasComponent,
    CrearReservaComponent,
    ListarReservaComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    SharedModule,
    CoreModule,
    
  ],
  providers: [ReservaService ]
})
export class ReservasModule { }
