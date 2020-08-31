import { Component, OnInit, NgModule } from '@angular/core';
import { LeerlingService } from '../../service/leerling.service';
import { LeerlingDto } from '../../models/LeerlingDto';
import { Router } from '@angular/router';
import { KlasDto } from '../../models/KlasDto';


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
  klassen: KlasDto[];

  constructor(private ls: LeerlingService, private router: Router) { }

  ngOnInit(): void {
    this.ls.findLeerlingen().subscribe( lijstVanLeerlingen => {
      this.leerlingen = lijstVanLeerlingen;
    });
  }


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
    })
  }
}
