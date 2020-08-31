import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlasDto } from '../models/KlasDto';
import { LeerlingDto} from '../models/LeerlingDto';

@Injectable({
  providedIn: 'root'
})
export class KlasService {

  constructor(private http: HttpClient) { }


  findKlassen(): Observable<KlasDto[]> {
    return this.http.get<KlasDto[]>('http://localhost:8082/klassenOverzicht')
  }

  findKlas(klasid: number): Observable<KlasDto>{
    return this.http.get<KlasDto>("http://localhost:8082/klas/" + klasid);
  }

  
  maakKlasAan(klas: KlasDto): Observable<any> {
    return this.http.post<any>('http://localhost:8082/api/maakKlas', klas);
  }



  voegLeerlingToeService(leerling: LeerlingDto): Observable<void>{
    return this.http.post<void>('http://localhost:8082/api/voegLeerlingToe', leerling);
  }
}
// /api/voegLeerlingToe