import { Component, OnInit } from '@angular/core';
import { LeerlingDto } from 'src/app/models/LeerlingDto';
import { LeerlingService } from 'src/app/service/leerling.service';
import { KlasService } from 'src/app/service/klas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-klasleerlingtabel',
  templateUrl: './klasleerlingtabel.component.html',
  styleUrls: ['./klasleerlingtabel.component.css']
})
export class KlasleerlingtabelComponent implements OnInit {

leerling: LeerlingDto;
leerlingen: LeerlingDto[];
leerlingenDrop: LeerlingDto[];
ks: KlasService;

  constructor(private ls: LeerlingService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedrouter.paramMap.subscribe(params =>{
      this.ls.findLeerlingenVanKlas(Number.parseInt(params.get("klasid"))).subscribe(leerlingenlijst => {
        this.leerlingen = leerlingenlijst;
      });
    })

  }


  maakLeerlingenDropdown(){ 
      this.ls.findLeerlingen().subscribe(leerlingenlijst2 => {
        this.leerlingenDrop = leerlingenlijst2;
        for (let i = 0 ; i < leerlingenlijst2.length; i++){ 
          document.getElementById("kiesleerling").innerHTML += "<option>" + leerlingenlijst2[i].id + ". " + leerlingenlijst2[i].voornaam + " " + leerlingenlijst2[i].achternaam + "</option>";
        }
      });
  }

  /*voegLeerlingToe(){ 
   var NieuweLeerlingInKlas = (<HTMLInputElement> document.getElementById('kiesleerling')).value;
   var idNieuweLeerlingInKlas =  NieuweLeerlingInKlas.split(".")[0];
   for(var i=0; i<this.leerlingenDrop.length; i++){
     if (this.leerlingenDrop[i].id == parseInt(idNieuweLeerlingInKlas)){
        this.leerling = this.leerlingenDrop[i];      
        this.ks.voegLeerlingToeService(leerling)).subscribe((leerling) => 
        alert(leerling));
     }
   }
   
  }*/

} 
