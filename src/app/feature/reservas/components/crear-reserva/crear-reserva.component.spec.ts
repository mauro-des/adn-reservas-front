import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ReservaService } from '../../shared/service/reserva.service';
import { of } from 'rxjs';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { CrearReservaComponent } from './crear-reserva.component';

describe('CrearReservaComponent', () => {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;
  let reservaService: ReservaService;
  let respuestaEsperada = {valor:1};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReservaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule
      ],
      providers: [ReservaService, HttpService, MatDialog],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'guardar').and.returnValue(
      of(respuestaEsperada)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando tiene campos vacíos', () => {
    expect(component.reservaForm.valid).toBeFalsy();
  });
/*
  it('Registrar Reserva', () => {
    expect(component.reservaForm.valid).toBeFalsy();
    component.reservaForm.controls.idHospedaje.setValue('1');
    component.reservaForm.controls.nombreCliente.setValue('Usuario Test');
    component.reservaForm.controls.identificacionCliente.setValue('1088123');
    component.reservaForm.controls.fechaInicio.setValue('2022-03-15');
    component.reservaForm.controls.fechaFin.setValue('2022-03-17');
    component.reservaForm.controls.cantidadPersonas.setValue('3');
    component.reservaForm.controls.valorReserva.setValue('50000.0');
    expect(component.reservaForm.valid).toBeTruthy();
    expect(component.crear()).toHaveBeenCalledTimes(1);
    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });*/
});
