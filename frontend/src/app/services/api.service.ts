// Louvado seja o Senhor

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Veiculos, VeiculosAPI } from '../models/veiculo.model';
import { map, Observable } from 'rxjs';
import { response } from 'express';
import { Data } from '@angular/router';
import { CarByVin } from '../models/car-by-vin.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = "http://localhost:3001";
  private readonly http : HttpClient = inject(HttpClient);

  public getVehicles() : Observable<Veiculos>{
    return this.http.get<VeiculosAPI>(`${this.apiURL}/vehicles`).pipe(map((response) => response.vehicles));
  }

  public checkVinCode(code : string) : Observable<CarByVin>{
    return this.http.post<CarByVin>(`${this.apiURL}/vehicleData`, { vin: code });
  }

  public login(email : string, password : string) : Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiURL}/login`, { nome: email, senha: password });
  }
}
