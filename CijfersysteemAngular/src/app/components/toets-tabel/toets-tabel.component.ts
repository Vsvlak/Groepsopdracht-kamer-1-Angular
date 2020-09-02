import { Component, OnInit } from '@angular/core';
import { ToetsService } from '../../service/toets.service';
import { ToetsDto } from '../../models/ToetsDto';
import { DocentService } from 'src/app/service/docent.service';
import { DocentDto } from 'src/app/models/DocentDto';
import { VakService } from 'src/app/service/vak.service';
import { VakDto } from 'src/app/models/VakDto';
import { KlasService } from 'src/app/service/klas.service';
import { KlasDto } from 'src/app/models/KlasDto';
import { DocentVakService } from '../../service/docent-vak.service';

@Component({
  selector: 'app-toets-tabel',
  templateUrl: './toets-tabel.component.html',
  styleUrls: ['./toets-tabel.component.css']
})
export class ToetsTabelComponent implements OnInit {

  toetsen: ToetsDto[];
  toets = new ToetsDto();
  docent = new DocentDto();
  docenten: DocentDto[];
  docent = new DocentDto();
  vakken: VakDto[];
  klassen: KlasDto[];

  constructor(private dvs: DocentVakService, private ts: ToetsService, private ds: DocentService, private vs: VakService,
    private ks: KlasService) { }

  ngOnInit(): void {
    this.ts.findToetsen().subscribe(toetsenLijst => {
      this.toetsen = toetsenLijst;
      console.log(this.toetsen);
    })
    this.ds.findDocenten().subscribe(docentenLijst => {
      this.docenten = docentenLijst;
    })
    this.vs.findVakken().subscribe(vakkenLijst => {
      this.vakken = vakkenLijst;
    })
    this.ks.findKlassen().subscribe(klassenLijst => {
      this.klassen = klassenLijst;
    })

  }

  maakTabelLeeg() {
    this.toetsen = [];
  }

  slaToetsOp(): void {
    this.ts.maakToetsAan(this.toets).subscribe();
  }

  dropDownVakkenVanDocent() {
    var docentid = Number.parseInt((<HTMLInputElement>document.getElementById("kiesdocent")).value);
    this.ds.findVakkenVanDocent(docentid).subscribe(vakkenVanDocent => {
      this.vakken = vakkenVanDocent;
      this.ds.findKlassenVanDocentVak(docentid, this.vakken[0].id).subscribe(klassen => {
        this.klassen = klassen;
      });
    })
  }

  dropdownKlassenVanDocentVak() {
    var docentid = Number.parseInt((<HTMLInputElement>document.getElementById("kiesdocent")).value);
    var vakid = Number.parseInt((<HTMLInputElement>document.getElementById("kiesvak")).value);
    this.ds.findKlassenVanDocentVak(docentid, vakid).subscribe(klassen => {
      this.klassen = klassen;
    })
  }
}
