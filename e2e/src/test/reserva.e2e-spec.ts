import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ReservaPage } from '../page/reserva/reserva.po';

describe('workspace-project Reserva', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let reserva: ReservaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        reserva = new ReservaPage();
    });

    it('Deberia crear una reserva', () => {
        const ID_HOSPEDAJE = 1;
        const NOMBRE_CLIENTE = 'Ernesto Pérez';
        const IDENTIFICACION_CLIENTE = "123456";
        const FECHA_INICIO = [3, 16, 2022].join('-'); 
        const FECHA_FIN =  [3, 20, 2022].join('-'); 
        const CANTIDAD_PERSONAS = 4;

        page.navigateTo();
        navBar.clickBotonReservas();
        reserva.clickBotonCrearReservas();
        reserva.ingresarIdHospedaje(ID_HOSPEDAJE);
        reserva.ingresarNombreCliente(NOMBRE_CLIENTE);
        reserva.ingresarIdentificacionCliente(IDENTIFICACION_CLIENTE);
        reserva.ingresarFechaInicio(FECHA_INICIO);
        reserva.ingresarFechaFin(FECHA_FIN);
        reserva.ingresarCantidadPersonas(CANTIDAD_PERSONAS);

        reserva.clickBotonCrear();

        expect(reserva.getTextoRespuestaCrear()).toEqual('Proceso Correcto');
    });
    
    it('Deberia listar reservas', () => {
        page.navigateTo();
        navBar.clickBotonReservas();
        reserva.clickBotonListarReservas();

        expect(reserva.contarReservas()).toBeGreaterThan(0);
    });
    
});
