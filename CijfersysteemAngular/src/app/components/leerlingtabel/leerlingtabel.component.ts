import { Component, OnInit, NgModule } from '@angular/core';
import { LeerlingService } from '../../service/leerling.service';
import { LeerlingDto } from '../../models/LeerlingDto';


@Component({
  selector: 'app-leerlingtabel',
  templateUrl: './leerlingtabel.component.html',
  styleUrls: ['./leerlingtabel.component.css']
})

export class LeerlingTabelComponent implements OnInit {

  leerlingen: LeerlingDto[];
  leerling: LeerlingDto = {
    voornaam : undefined,
    achternaam : undefined,
    geboortedatum : undefined,
    id : undefined
  }

  tempsIds : number[];

  constructor(private ls: LeerlingService) { }

  ngOnInit(): void {

    this.ls.findLeerlingen().subscribe( lijstVanLeerlingen => {
      this.leerlingen = lijstVanLeerlingen;
    });


  }

  maakTabelLeeg(){
    this.leerlingen = [];
  }
/*
  saveIds(clickedLeerling : LeerlingService){
    this.tempIds = [];
    this.tempIds.push(clickedLeerling.)
  }
*/

  slaLeerlingOp(): void{
    this.leerling.id = parseInt((<HTMLInputElement>document.getElementById("leerlingnrInput")).value);
    this.leerling.voornaam = (<HTMLInputElement>document.getElementById("voornaamInput")).value;
    this.leerling.achternaam = (<HTMLInputElement>document.getElementById("achternaamInput")).value;
    this.leerling.geboortedatum = (<HTMLInputElement>document.getElementById("geboortedatumInput")).value;
    this.ls.maakLeerlingAan(this.leerling);
  }
}
