import { Component, OnInit } from '@angular/core';

import { CooperativasService } from '../../services/cooperativas.service';

@Component({
  selector: 'app-cooperativa-list',
  templateUrl: './cooperativa-list.component.html',
  styleUrls: ['./cooperativa-list.component.css']
})
export class CooperativaListComponent implements OnInit {

  cooperativas: any =[];

  constructor(private cooperativasService: CooperativasService) { }

  ngOnInit(): void {
    this.cooperativasService.listarCooperativas().subscribe(
      res => {
        this.cooperativas = res;
      },
      err => console.log(err)
    );
  }

}
