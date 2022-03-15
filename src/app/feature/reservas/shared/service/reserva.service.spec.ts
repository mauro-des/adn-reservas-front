import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';
import { ReservaService } from './reserva.service';
import { ACTIVO, ESTADOS_RESERVA } from '@shared/constantes/Constantes';

describe('ReservaService', () => {
  let service: ReservaService;
  let httpMock: HttpTestingController;
  const apiEndpoiniReservas = `${environment.urlReservas}${environment.endpointReservas}/reservas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar reservas', () => {
    const IdReservaDummy = 999;

    service.consultar().subscribe(reservas => {
      expect(reservas.length).toBeGreaterThan(0);
      expect(reservas[0].id).toEqual(IdReservaDummy);
    });
    const req = httpMock.expectOne(apiEndpoiniReservas);
    expect(req.request.method).toBe('GET');
  });

  it('deberia crear una reserva', () => {
    const dummyReserva = new Reserva(1, 1, "Mauricio", "1088123", new Date(2022, 3, 15), new Date(2022, 3, 17),4, 50000, ESTADOS_RESERVA.PENDIENTE, ACTIVO.SI);
    service.guardar(dummyReserva).subscribe((respuesta) => {
      expect(respuesta).toBeTruthy();
    });
    const req = httpMock.expectOne(apiEndpoiniReservas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar una reserva', () => {
    const dummyReserva = new Reserva(1, 1, "Mauricio", "1088123", new Date(2022, 3, 15), new Date(2022, 3, 17),4, 50000, ESTADOS_RESERVA.PENDIENTE, ACTIVO.SI);
    service.eliminar(dummyReserva).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpoiniReservas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
  
});
