import { Component, OnInit } from '@angular/core';
import { VakService } from '../../service/vak.service';
import { VakDto } from '../../models/vakDto';

@Component({
  selector: 'app-vaktabel',
  templateUrl: './vaktabel.component.html',
  styleUrls: ['./vaktabel.component.css']
})
export class VaktabelComponent implements OnInit {

  vakken: VakDto[];

  constructor(private vs: VakService) { }

  ngOnInit(): void {

    this.vs.findVakken().subscribe( lijstVanVakken => {
      this.vakken = lijstVanVakken;
    });
  }

  maakTabelLeeg(){
    this.vakken = [];
  }

}
