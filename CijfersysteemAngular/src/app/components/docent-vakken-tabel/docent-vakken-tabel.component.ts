import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocentService } from '../../service/docent.service';
import { VakDto } from '../../models/VakDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docent-vakken-tabel',
  templateUrl: './docent-vakken-tabel.component.html',
  styleUrls: ['./docent-vakken-tabel.component.css']
})
export class DocentVakkenTabelComponent implements OnInit {

  vakken: VakDto[];

  constructor(private ds: DocentService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedrouter.paramMap.subscribe(params => {
    //   this.ds.findVakkenVanDocent(Number.parseInt(params.get("docentid"))).subscribe(vakkenlijst => {
    //     this.vakken = vakkenlijst;
    //   })
    // })
  }

  bekijkKlassen(v: VakDto) {
    this.activatedrouter.paramMap.subscribe(params => {
      var docentid = Number.parseInt(params.get("docentid"));
      this.router.navigateByUrl('docent/' + docentid + '/vak/' + v.id + '/klassen');
    })
  }
}
