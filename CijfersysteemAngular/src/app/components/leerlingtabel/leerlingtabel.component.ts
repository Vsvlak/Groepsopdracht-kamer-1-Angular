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
<<<<<<< HEAD

  
=======
>>>>>>> featureRana
  leerling: LeerlingDto = {
    voornaam : undefined,
    achternaam : undefined,
    geboortedatum : undefined,
    id : undefined
  }

<<<<<<< HEAD
  tempsIds : number[];
  klassen: KlasDto[];
=======
  // tempsIds : number[]; voor editten later
>>>>>>> featureRana

  constructor(private ls: LeerlingService) { }

  ngOnInit(): void {

    this.ls.findLeerlingen().subscribe( lijstVanLeerlingen => {
      this.leerlingen = lijstVanLeerlingen;
    });


  }

<<<<<<< HEAD

  slaLeerlingOp(): void{
    this.leerling.voornaam = (<HTMLInputElement>document.getElementById("voornaamInput")).value;
    this.leerling.achternaam = (<HTMLInputElement>document.getElementById("achternaamInput")).value;
    this.leerling.geboortedatum = (<HTMLInputElement>document.getElementById("geboortedatumInput")).value;
    this.ls.maakLeerlingAan(this.leerling).subscribe((leerling) => console.log(leerling));
    window.location.reload();
  }
  
  bekijkKlas(l : LeerlingDto){
    this.ls.findKlassenVanLeerling(l.id).subscribe(klassenlijst =>{
      this.klassen = klassenlijst;
      this.router.navigateByUrl('/klas/' + this.klassen[0].id);
=======
  maakTabelLeeg(){
    this.leerlingen = [];
  }
  refreshTabel(){ 
    this.ls.findLeerlingen().subscribe( lijstVanLeerlingen =>{
      this.leerlingen = lijstVanLeerlingen;
>>>>>>> featureRana
    })
  }

/*
  saveIds(clickedLeerling : LeerlingService){
    this.tempIds = [];
    this.tempIds.push(clickedLeerling.)
  }
*/

  slaLeerlingOp(): void{
    // this.leerling.id = parseInt((<HTMLInputElement>document.getElementById("leerlingnrInput")).value);
    this.leerling.voornaam = (<HTMLInputElement>document.getElementById("voornaamInput")).value;
    this.leerling.achternaam = (<HTMLInputElement>document.getElementById("achternaamInput")).value;
    this.leerling.geboortedatum = (<HTMLInputElement>document.getElementById("geboortedatumInput")).value;
    this.ls.maakLeerlingAan(this.leerling).subscribe( (leerling) => console.log(leerling));
    this.refreshTabel();
  }
}
