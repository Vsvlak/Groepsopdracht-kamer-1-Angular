import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocentDto } from '../models/DocentDto';
import { DocentService } from '../service/docent.service';
import { VakDto } from '../models/vakDto';

@Component({
  selector: 'app-view-docent-vak-page',
  templateUrl: './view-docent-vak-page.component.html',
  styleUrls: ['./view-docent-vak-page.component.css']
})
export class ViewDocentVakPageComponent implements OnInit {

  vakken: VakDto[];

  constructor(private activatedrouter: ActivatedRoute, private docentservice: DocentService) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params => {
      this.docentservice.findDocentVakken(Number.parseInt(params.get("id"))).subscribe(docentVakken => {
        this.vakken = docentVakken;
      });


    })
  }

}
