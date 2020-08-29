import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeerlingDto } from '../models/LeerlingDto';

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
  maakLeerlingAanService(leerlingDto: LeerlingDto): Observable<void> {
    return this.http.post<void>('http:///localhost:8082/api/maakLeerling', leerlingDto)
  }
}
