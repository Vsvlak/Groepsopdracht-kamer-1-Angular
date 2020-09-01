import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VakDto } from '../models/VakDto';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VakService {

  constructor(private http: HttpClient) { }

  findVakken(): Observable<VakDto[]> {
    return this.http.get<VakDto[]>(`${environment.apiURL}/vakkenOverzicht`)
  }

  findVakkenVanKlas(klasid: Number): Observable<VakDto[]>{
    return this.http.get<VakDto[]>(`${environment.apiURL}/vakkenVanKlas/`+ klasid);
  }
  
  findVak(vakid: number): Observable<VakDto>{
    return this.http.get<VakDto>("http://localhost:8082/vak/" + vakid);
  }
}
