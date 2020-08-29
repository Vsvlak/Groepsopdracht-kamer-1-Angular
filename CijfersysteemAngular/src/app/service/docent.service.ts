import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocentDto } from '../models/DocentDto';
import { KlasDto } from '../models/KlasDto';
import { VakDto } from '../models/VakDto';

@Injectable({
  providedIn: 'root'
})
export class DocentService {

  constructor(private http: HttpClient) { }

  findDocenten(): Observable<DocentDto[]> {
    return this.http.get<DocentDto[]>('http://localhost:8082/docentOverzicht');
  }
  
  findDocentVakken(vakid: number): Observable<VakDto[]> {
    return this.http.get<VakDto[]>('http://localhost:8082/vakkenVanDocent/'+ vakid);

  }

  findDocent(docentid: number): Observable<DocentDto>{
    return this.http.get<DocentDto>("http://localhost:8082/docent/" + docentid);
  }

  findKlassenVanDocent(docentid: number): Observable<KlasDto[]>{
    return this.http.get<KlasDto[]>("http://localhost:8082/klassenVanDocent/" + docentid);
  }

  findVakkenVanDocent(docentid: number): Observable<VakDto[]>{
    return this.http.get<VakDto[]>("http://localhost:8082/vakkenVanDocent/" + docentid);
  }

  findKlassenVanDocentVak(docentid: number, vakid: number): Observable<KlasDto[]>{
    return this.http.get<KlasDto[]>("http://localhost:8082/klassenVanDocentEnVak/" + docentid + "/" + vakid);
  }
}
