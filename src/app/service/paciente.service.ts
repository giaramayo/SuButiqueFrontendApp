import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Paciente } from '../interfaces/paciente.interfaces';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {

  private nodeURL = environment.nodeURL;
  private pacienteURL = this.nodeURL + '/pacientes'
  private localidadURL = this.nodeURL + '/barrios'
  private antecedenteURL = this.nodeURL + '/antecedente'

  constructor( private readonly http: HttpClient ) { }

  getPacientes(): Observable<any> {
    return this.http.get(this.pacienteURL)
  }

  eliminar(documento: number): Observable<any> {
    return this.http.delete(this.pacienteURL + '/borrar/' + documento)
  }

  eliminarPorId( id: number): Observable<any> {
    return this.http.delete(this.pacienteURL + '/borrarPorID/' + id)
  }

  getLocalidad() : Observable<any> {
    return this.http.get(this.localidadURL);
  }

  getLocalidadId( id: number) : Observable<any> {
    return this.http.get(this.localidadURL + '/buscar/' + id);
  }
 // postFiltrarPaciente( nombre: string, apellido: string, dni: number ) : Observable<any>{
 //   let params = new HttpParams().set('nombre', nombre).set('apellido', apellido).set('dni', dni);
 //   return this.http.post(this.pacienteURL + '/filtrar', {params});
 // }

 agregarPaciente(paciente: Paciente) {
  return this.http.post(this.pacienteURL + '/crear', paciente);
 }

 consultarPaciente( id: number ): Observable<any>{
   return this.http.get(this.pacienteURL + '/buscar/' + id);
 }

 consultarAntecedentes( id: number ): Observable<any>{
  return this.http.get(this.antecedenteURL + '/buscar/' + id);
}

}
