import { Component, OnInit } from '@angular/core';
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
  klassen: KlasDto[];

  constructor(private ls: LeerlingService, private router: Router) { }

  ngOnInit(): void {
    this.ls.findLeerlingen().subscribe( lijstVanLeerlingen => {
      this.leerlingen = lijstVanLeerlingen;
    });
  }

  maakTabelLeeg(){
    this.leerlingen = [];
  }

  bekijkKlas(l : LeerlingDto){
    this.ls.findKlassenVanLeerling(l.id).subscribe(klassenlijst =>{
      this.klassen = klassenlijst;
      this.router.navigateByUrl('/klas/' + this.klassen[0].id);
    })
  }
}
