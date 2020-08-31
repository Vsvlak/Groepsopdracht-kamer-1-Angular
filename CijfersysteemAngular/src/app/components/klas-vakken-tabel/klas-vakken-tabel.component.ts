import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VakDto } from '../../models/VakDto';
import { VakService } from '../../service/vak.service';

@Component({
  selector: 'app-klas-vakken-tabel',
  templateUrl: './klas-vakken-tabel.component.html',
  styleUrls: ['./klas-vakken-tabel.component.css']
})
export class KlasVakkenTabelComponent implements OnInit {

  vakken: VakDto[];

  constructor(private vs: VakService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.vs.findVakkenVanKlas(Number.parseInt(params.get("klasid"))).subscribe(vakkenlijst => {
        this.vakken = vakkenlijst;
      })
    })
  }

}
