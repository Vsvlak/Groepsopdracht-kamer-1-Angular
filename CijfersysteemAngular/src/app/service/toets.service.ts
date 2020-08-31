import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToetsDto } from '../models/ToetsDto';
import { environment } from '../../environments/environment';

 

@Injectable({
  providedIn: 'root'
})
export class ToetsService {

  constructor(private http: HttpClient) { }

  findToetsen(): Observable<ToetsDto[]> {
    return this.http.get<ToetsDto[]>(`${environment.apiURL}/toetsOverzicht`);
  }

  findToetsenVanVakken(vakid: number): Observable<ToetsDto[]> {
    return this.http.get<ToetsDto[]>(`${environment.apiURL}/toonToetsenVanVak/` + vakid);
  }

  findKlasToetsen(klasid: number): Observable<ToetsDto[]>{
    return this.http.get<ToetsDto[]>(`${environment.apiURL}/toonToetsenVanKlas/` + klasid);
  }
  
  maakToetsAan(toets: ToetsDto): Observable<any> {
    console.log(toets.datum);
    console.log(toets.tijd);
    console.log(toets.docent);
    console.log(toets.vak);
    console.log(toets.klas);
    console.log(toets.id + "///////////////////");
    return this.http.post<any>(`${environment.apiURL}/api/maakToets`, toets);
  }
}
