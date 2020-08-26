import { Component, OnInit } from '@angular/core';
import { LeerlingService } from '../../Service/leerling.service';
import { LeerlingDto } from '../../models/LeerlingDto';

@Component({
  selector: 'app-leerlingtabel',
  templateUrl: './leerlingtabel.component.html',
  styleUrls: ['./leerlingtabel.component.css']
})
export class LeerlingTabelComponent implements OnInit {

  leerlingen: LeerlingDto[];

  constructor(private ls: LeerlingService) { }

  ngOnInit(): void {

    this.ls.findLeerlingen().subscribe( lijstVanLeerlingen => {
      this.leerlingen = lijstVanLeerlingen;
    });


  }

  maakTabelLeeg(){
    this.leerlingen = [];
  }

}
