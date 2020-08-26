import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToetsDto } from '../models/ToetsDto';

@Injectable({
  providedIn: 'root'
})
export class ToetsService {

  constructor(private http: HttpClient) { }

  findToetsen(): Observable<ToetsDto[]> {
    return this.http.get<ToetsDto[]>("http://localhost:8082/toetsOverzicht");
  }
}
