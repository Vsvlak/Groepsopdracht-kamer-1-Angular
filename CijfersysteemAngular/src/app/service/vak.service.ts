import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VakDto } from '../models/VakDto';

@Injectable({
  providedIn: 'root'
})
export class VakService {

  constructor(private http: HttpClient) { }

  findVakken(): Observable<VakDto[]> {
    return this.http.get<VakDto[]>('http://localhost:8082/vakkenOverzicht')
  }

  findVakkenVanKlas(klasid: Number): Observable<VakDto[]>{
    return this.http.get<VakDto[]>("http://localhost:8082/vakkenVanKlas/"+ klasid);
  }
}
