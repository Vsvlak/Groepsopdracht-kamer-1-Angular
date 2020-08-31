import { Component, OnInit } from '@angular/core';
import { ToetsService } from '../../service/toets.service';
import { ToetsDto } from '../../models/ToetsDto';

@Component({
  selector: 'app-toets-tabel',
  templateUrl: './toets-tabel.component.html',
  styleUrls: ['./toets-tabel.component.css']
})
export class ToetsTabelComponent implements OnInit {

  toetsen: ToetsDto[];
  toets: ToetsDto = {
    datum : undefined,
    tijd : undefined,
    docent : undefined,
    vak : undefined,
    klas : undefined,
    id : undefined
  }

  constructor(private ts: ToetsService) { }

  ngOnInit(): void {
    this.ts.findToetsen().subscribe( toetsenLijst => {
      this.toetsen = toetsenLijst;
    })
  }

  maakTabelLeeg(){
    this.toetsen = [];
  }

  slaToetsOp(): void{
    this.toets.datum= (<HTMLInputElement>document.getElementById("datumInput")).value;
    this.toets.tijd = (<HTMLInputElement>document.getElementById("tijdInput")).value;
    this.toets.docent = (<HTMLInputElement>document.getElementById("docentInput")).value;
    this.toets.vak = (<HTMLInputElement>document.getElementById("vakInput")).value;
    this.toets.klas = (<HTMLInputElement>document.getElementById("klasInput")).value;
    this.ts.maakToetsAan(this.toets).subscribe( (toets) => console.log(toets));
  }
}
