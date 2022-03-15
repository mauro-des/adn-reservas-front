import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReservaService } from '../../shared/service/reserva.service';



@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

  reservaForm: FormGroup;
  mensajeRespuesta?:string = " ";
  tipoAlerta?: string = "light";

  constructor(
    protected reservaService: ReservaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.construirFormulario();
    this.reservaForm.get('fechaInicio').patchValue(this.formatDate(new Date()));
    this.reservaForm.get('fechaFin').patchValue(this.formatDate(new Date()));
  }

  crear() {
      this.reservaService.guardar(this.reservaForm.value).subscribe(() => {
        this.mensajeRespuesta = "Proceso Correcto";
        this.tipoAlerta = "success";
        this.reservaForm.reset();
      },(data) => { 
        console.warn("Error controlado", data);
        this.mensajeRespuesta =  data.error.mensaje;
        this.tipoAlerta = "danger";
      });
  }

  private construirFormulario() {
    this.reservaForm = this.formBuilder.group({
      idHospedaje:  new FormControl('', [Validators.required]),
      nombreCliente:  new FormControl('', [Validators.required, Validators.maxLength(200)]),
      identificacionCliente: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      cantidadPersonas: new FormControl('', [Validators.required])
    });
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  descartarAlerta(): void {
    this.mensajeRespuesta = null;
  }

}
