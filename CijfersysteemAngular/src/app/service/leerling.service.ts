import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeerlingDto } from '../models/LeerlingDto';
<<<<<<< HEAD
import { KlasDto } from '../models/KlasDto';
import { LeerlingTabelComponent } from '../components/leerlingtabel/leerlingtabel.component';
=======
>>>>>>> featureRana

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 

@Injectable({
  providedIn: 'root'
})
export class LeerlingService {

<<<<<<< HEAD
  lc : LeerlingTabelComponent;
  leerlingDto : LeerlingDto;
=======

>>>>>>> featureRana

  constructor(private http: HttpClient) { }


  findLeerlingen(): Observable<LeerlingDto[]> {
    return this.http.get<LeerlingDto[]>('http://localhost:8082/leerlingOverzicht');
  }

  findLeerlingenVanKlas(klasid: number): Observable<LeerlingDto[]> {
    return this.http.get<LeerlingDto[]>("http://localhost:8082/leerlingenInKlas/" + klasid);
  }

<<<<<<< HEAD
  maakLeerlingAan(leerling: LeerlingDto): Observable<void> {
    return this.http.post<void>('http://localhost:8082/api/maakLeerling', leerling);
  }



  findKlassenVanLeerling(leerlingid: number): Observable<KlasDto[]>{
    return this.http.get<KlasDto[]>("http://localhost:8082/klassenVanLeerling/" + leerlingid);
=======
  maakLeerlingAan(leerling: LeerlingDto): Observable<any> {
    console.log(leerling.voornaam);
    console.log(leerling.achternaam);
    console.log(leerling.geboortedatum);
    return this.http.post<any>('http://localhost:8082/api/maakLeerling', leerling);
   
>>>>>>> featureRana
  }

}
