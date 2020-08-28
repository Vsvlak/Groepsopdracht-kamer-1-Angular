import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocentService } from '../../service/docent.service';
import { DocentDto } from '../../models/DocentDto';
import { VakDto } from '../../models/VakDto';

@Component({
  selector: 'app-docent-vakken-tabel',
  templateUrl: './docent-vakken-tabel.component.html',
  styleUrls: ['./docent-vakken-tabel.component.css']
})
export class DocentVakkenTabelComponent implements OnInit {

  vakken: VakDto[];

  constructor(private ds: DocentService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ds.findVakkenVanDocent(Number.parseInt(params.get("docentid"))).subscribe(vakkenlijst => {
        this.vakken = vakkenlijst;
      })
    })
  }
}
