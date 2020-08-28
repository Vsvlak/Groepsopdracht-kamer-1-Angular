import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocentDto } from '../models/DocentDto';
import { KlasDto } from '../models/KlasDto';

@Injectable({
  providedIn: 'root'
})
export class DocentService {

  constructor(private http: HttpClient) { }

  findDocenten(): Observable<DocentDto[]> {
    return this.http.get<DocentDto[]>('http://localhost:8082/docentOverzicht')
  }

  findDocent(docentid: number): Observable<DocentDto>{
    return this.http.get<DocentDto>("http://localhost:8082/docent/" + docentid);
  }

  findKlassenVanDocent(docentid: number): Observable<KlasDto[]>{
    return this.http.get<KlasDto[]>("http://localhost:8082/klassenVanDocent/" + docentid);
  }
}
