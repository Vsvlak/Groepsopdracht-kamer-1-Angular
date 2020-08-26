import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlasDto } from '../models/KlasDto';

@Injectable({
  providedIn: 'root'
})
export class KlasService {



  constructor(private http: HttpClient) { }


  findKlassen(): Observable<KlasDto[]> {
    return this.http.get<KlasDto[]>('http://localhost:8082/klassenOverzicht')
  }
}
