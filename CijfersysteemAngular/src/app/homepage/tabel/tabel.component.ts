import { Component, OnInit } from '@angular/core';
import { PersonService } from '../leerling.service';
import { LeerlingDto } from '../models/LeerlingDto';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {

  leerlingen: LeerlingDto[];

  constructor() { }

  ngOnInit(): void {

    this.leerlingService.findLeerlingen().subscript( lijstVanLeerlingen => {
      this.leerlingen = lijstVanLeerlingen;
    });


  }

  maakTabelLeeg(){
    this.leerlingen = [];
  }

}
