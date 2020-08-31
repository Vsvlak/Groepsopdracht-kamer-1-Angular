import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocentDto } from '../models/DocentDto';

@Injectable({
  providedIn: 'root'
})
export class DocentService {



  constructor(private http: HttpClient) { }


  findDocenten(): Observable<DocentDto[]> {
    return this.http.get<DocentDto[]>('http://localhost:8082/docentOverzicht')
  }

  maakDocentAan(docent: DocentDto): Observable<any> {
    console.log(docent.voornaam);
    console.log(docent.achternaam);
    // console.log(docent.id);
    return this.http.post<any>('http://localhost:8082/api/maakDocent', docent);
  }
}
