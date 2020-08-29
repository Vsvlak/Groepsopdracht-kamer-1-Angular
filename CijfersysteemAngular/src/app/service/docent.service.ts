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
}
