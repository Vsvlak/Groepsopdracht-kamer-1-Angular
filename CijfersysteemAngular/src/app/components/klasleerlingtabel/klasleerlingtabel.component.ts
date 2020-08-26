import { Component, OnInit } from '@angular/core';
import { LeerlingDto } from 'src/app/models/LeerlingDto';
import { LeerlingService } from 'src/app/service/leerling.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-klasleerlingtabel',
  templateUrl: './klasleerlingtabel.component.html',
  styleUrls: ['./klasleerlingtabel.component.css']
})
export class KlasleerlingtabelComponent implements OnInit {

leerlingen: LeerlingDto[];

  constructor(private ls: LeerlingService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedrouter.paramMap.subscribe(params =>{
      this.ls.findLeerlingenVanKlas(Number.parseInt(params.get("klasid"))).subscribe(leerlingenlijst => {
        this.leerlingen = leerlingenlijst;
      });
    })


  }

}
