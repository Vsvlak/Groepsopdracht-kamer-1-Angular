import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlasDto } from '../models/KlasDto';
import { LeerlingDto} from '../models/LeerlingDto';
import { LeerlingService } from './leerling.service';

@Injectable({
  providedIn: 'root'
})
export class KlasService {

  leerling: LeerlingDto;

  constructor(private http: HttpClient) { }


  findKlassen(): Observable<KlasDto[]> {
    return this.http.get<KlasDto[]>('http://localhost:8082/klassenOverzicht')
  }

  findKlas(klasid: number): Observable<KlasDto>{
    return this.http.get<KlasDto>("http://localhost:8082/klas/" + klasid);
  }

  
  maakKlasAan(klas: KlasDto): Observable<any> {
    console.log(klas.naam);
    console.log(klas.niveau);
    return this.http.post<any>('http://localhost:8082/api/maakKlas', klas);
  }



  voegLeerlingToe2(leerling: number): Observable<LeerlingDto>{
  console.log("aaa" + LeerlingDto);
  return this.http.post<any>('http://localhost:8082/api/voegLeerlingToe', leerling);
}
}
