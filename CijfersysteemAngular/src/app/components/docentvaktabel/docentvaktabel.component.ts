import { Component, OnInit } from '@angular/core';
import { DocentService } from '../../service/docent.service';
import { DocentDto } from '../../models/DocentDto';
import { VakService } from '../../service/vak.service';
import { VakDto } from '../../models/vakDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docentvaktabel',
  templateUrl: './docentvaktabel.component.html',
  styleUrls: ['./docentvaktabel.component.css']
})
export class DocentvaktabelComponent implements OnInit {

  docenten: DocentDto[];
  vakken: VakDto[];

  constructor(private ds: DocentService, private vs: VakService, private router: Router) { }

  ngOnInit(): void {
    this.ds.findDocenten().subscribe( lijstVanDocenten => {
      this.docenten = lijstVanDocenten;
    });

    this.vs.findVakken().subscribe( lijstVanVakken => {
      this.vakken = lijstVanVakken;
    });

    
  }

  maakTabelLeeg(){
    this.docenten = [];
    this.vakken = [];

  }

}
