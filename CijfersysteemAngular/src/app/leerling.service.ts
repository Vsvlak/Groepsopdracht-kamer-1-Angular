import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeerlingDto } from './models/LeerlingDto'

@Injectable({
  providedIn: 'root'
})
export class LeerlingService {



  constructor(private http: HttpClient) { }
}

findLeerlingen(): Observable<LeerlingDto[]> {
  return this.http.get<LeerlingDto[]>('http://localhost:8082/api/leerlingOverzicht')
}
