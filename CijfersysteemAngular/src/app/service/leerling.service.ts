import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeerlingDto } from '../models/LeerlingDto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 

@Injectable({
  providedIn: 'root'
})
export class LeerlingService {



  constructor(private http: HttpClient) { }


  findLeerlingen(): Observable<LeerlingDto[]> {
    return this.http.get<LeerlingDto[]>('http://localhost:8082/leerlingOverzicht');
  }

  findLeerlingenVanKlas(klasid: number): Observable<LeerlingDto[]> {
    return this.http.get<LeerlingDto[]>("http://localhost:8082/leerlingenInKlas/" + klasid);
  }
  maakLeerlingAanService(leerling: LeerlingDto): Observable<void> {
    console.log(leerling.id);
    console.log(leerling.voornaam);
    console.log(leerling.achternaam);
    console.log(leerling.geboortedatum);
    return this.http.post<void>('http://localhost:8082/api/maakLeerling', leerling);
  }
}
