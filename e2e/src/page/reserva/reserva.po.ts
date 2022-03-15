import { by, element } from 'protractor';

export class ReservaPage {
    private linkCrearReserva = element(by.id('linkCrearReserva'));
    private linkListarReservas = element(by.id('linkListarReserva'));
    private idHospedaje = element(by.id('idHospedaje'));
    private nombreCliente = element(by.id('nombreCliente'));
    private identificacionCliente = element(by.id('identificacionCliente'));
    private fechaInicio = element(by.id('fechaInicio'));
    private fechaFin = element(by.id('fechaFin'));
    private cantidadPersonas = element(by.id('cantidadPersonas'));
    private botonCrear = element(by.id('botonCrearReserva'));
    private formularioReserva = element(by.id('formCrearReserva'));

    
   
    private listaReservas = element.all(by.css('.divReservas ul.reservas li'));

    async clickBotonCrearReservas() {
        await this.linkCrearReserva.click();
    }

    async clickBotonListarReservas() {
        await this.linkListarReservas.click();
    }

    async clickBotonCrear() {
        await this.botonCrear.click();
    }

    async ingresarIdHospedaje(idHospedaje) {
        await this.idHospedaje.sendKeys(idHospedaje);
    }

    async ingresarNombreCliente(nombreCliente) {
        await this.nombreCliente.sendKeys(nombreCliente);
    }

    async ingresarIdentificacionCliente(identificacionCliente) {
        await this.identificacionCliente.sendKeys(identificacionCliente);
    }

    async ingresarFechaInicio(fechaInicio) {
        await this.fechaInicio.sendKeys(fechaInicio);
    }

    async ingresarFechaFin(fechaFin) {
        await this.fechaFin.sendKeys(fechaFin);
    }

    async ingresarCantidadPersonas(cantidadPersonas) {
        await this.cantidadPersonas.sendKeys(cantidadPersonas);
    }

    async contarReservas() {
        return this.listaReservas.count();
    }

    async getTextoRespuestaCrear() {
        //return browser.wait(until.elementLocated(by.id('divMensajeRespuesta'), 2000
        return await element(by.id('divMensajeRespuesta')).getText();
    }

    async formularioReservaSubmit() {
        //return browser.wait(until.elementLocated(by.id('divMensajeRespuesta'), 2000
        await this.formularioReserva.submit();
    }

    
}
 