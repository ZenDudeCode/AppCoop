import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // permite hacer las peticiones a la REST API

import  {Cooperativa } from '../models/cooperativas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CooperativasService {

  
  API_URI = 'http://localhost:3000/cooperativas'; 
  constructor(private http: HttpClient) { }

  listarCooperativas(){
    return this.http.get(`${this.API_URI}`);
  }
  buscarCooperativa(cd_coop: string){
    return this.http.get(`${this.API_URI}/${cd_coop}`);
  }
  //se le va a pasar el tipo de dato cooperativa que esta en la carpeta models
  guardarCooperativa(cooperativa: Cooperativa){
    return this.http.post(`${this.API_URI}`,cooperativa);
  }
  eliminarCooperativa(cd_coop: string){
      return this.http.delete(`${this.API_URI}/${cd_coop}`);
  }
  actualizarCooperativa(cooperativa: Cooperativa, cd_coop: string): Observable <Cooperativa>{
    return this.http.put(`${this.API_URI}/${cd_coop}`,cooperativa);
  }
}
