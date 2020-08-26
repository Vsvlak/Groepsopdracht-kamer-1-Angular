import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocentCijfersDto } from '../models/DocentCijfersDto';

@Injectable({
  providedIn: 'root'
})
export class CijferService {

  constructor(private http: HttpClient) { }

  findCijfersVanLeerlingenVanDocentVak(docentid: number, vakid: number, klasid: number){
    return this.http.get<DocentCijfersDto[]>("http://localhost:8082/toonCijfersVan/" + docentid +"/" + vakid + "/" + klasid);
  }
}
