import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocentDto } from '../models/DocentDto';
import { VakDto } from '../models/vakDto';


@Injectable({
  providedIn: 'root'
})
export class DocentService {



  constructor(private http: HttpClient) { }


  findDocenten(): Observable<DocentDto[]> {
    return this.http.get<DocentDto[]>('http://localhost:8082/docentOverzicht')
  }
  
  findDocentVakken(docentid: number): Observable<VakDto[]> {
    return this.http.get<VakDto[]>('http://localhost:8082/vakkenVanDocent/'+ docentid)

  }
}
