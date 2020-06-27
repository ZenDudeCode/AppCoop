import { Component, OnInit, HostBinding } from '@angular/core';
import { Cooperativa } from 'src/app/models/cooperativas';

import {CooperativasService} from '../../services/cooperativas.service';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-cooperativa-form',
  templateUrl: './cooperativa-form.component.html',
  styleUrls: ['./cooperativa-form.component.css']
})
export class CooperativaFormComponent implements OnInit {

 // @HostBinding('class') classes = 'row';

  cooperativa: Cooperativa = {
        cd_coop: '',
        cd_nacion: '',
        nu_rif: 0,
        nm_coop: '',
        de_direccion: '',
        tp_coop: 0,
        tp_actividad: '',
        fe_suscripcion: new Date(),
        st_status: 0,
        fe_status: new Date(),
        fe_registro: new Date()
  };
  constructor(private cooperativaService: CooperativasService) { }

  ngOnInit(): void {
  }

  guardarNuevaCooperativa(){
    //delete this.cooperativa.fe_registro;
    this.cooperativaService.guardarCooperativa(this.cooperativa).subscribe(
      res =>{
          console.log(res);
      }
      ,err => console.log(err)
    );
  }

}
