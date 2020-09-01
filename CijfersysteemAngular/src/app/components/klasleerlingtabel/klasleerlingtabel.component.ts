import { Component, OnInit } from '@angular/core';
import { LeerlingDto } from 'src/app/models/LeerlingDto';
import { LeerlingService } from 'src/app/service/leerling.service';
import { KlasService } from 'src/app/service/klas.service';
import { ActivatedRoute } from '@angular/router';
import { ViewLeerlingenPageComponent } from 'src/app/view-leerlingen-page/view-leerlingen-page.component';


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

    // this.maakLeerlingenDropdown();

  }

  maakLeerlingenDropdown(){ 
    console.log("ik ben hier");
    // this.activatedrouter.paramMap.subscribe(params =>{
      this.ls.findLeerlingen().subscribe(leerlingenlijst2 => {
        this.leerlingenDrop = leerlingenlijst2;
        for (let i = 0 ; i < leerlingenlijst2.length; i++){ 
          document.getElementById("kiesleerling").innerHTML += "<option>" + leerlingenlijst2[i].id + ". " + leerlingenlijst2[i].voornaam + " " + leerlingenlijst2[i].achternaam + "</option>";
          // }
          // let v = (<HTMLInputElement> document.getElementById('kiesleerling')).value;
        }
      });
    // })
  }

  voegLeerlingToe1(){ 
   var NieuweLeerlingInKlas = (<HTMLInputElement> document.getElementById('kiesleerling')).value;
   var idNieuweLeerlingInKlas =  NieuweLeerlingInKlas.split(".")[0];
   console.log(NieuweLeerlingInKlas + " eerste ");
   console.log(idNieuweLeerlingInKlas);

     
  this.ks.voegLeerlingToe2(parseInt(idNieuweLeerlingInKlas)).subscribe((value)=> 
  this.leerling = value);

       
      //  this.ks.voegLeerlingToe2(this.leerlingenDrop[i]).subscribe(() => 
      //  console.log(LeerlingDto +  " hier2"));
    }
  

  

  //  this.ks.voegLeerlingToe2(parseInt(idNieuweLeerlingInKlas)).subscribe(idNieuweLeerlingInKlas=> 
  //   { this.leerling.id = idNieuweLeerlingInKlas});
  // }

} 
