import { Component, OnInit } from '@angular/core';
import { ToetsService } from '../../service/toets.service';
import { ToetsDto } from '../../models/ToetsDto';

@Component({
  selector: 'app-toets-tabel',
  templateUrl: './toets-tabel.component.html',
  styleUrls: ['./toets-tabel.component.css']
})
export class ToetsTabelComponent implements OnInit {

  toetsen: ToetsDto[];

  constructor(private ts: ToetsService) { }

  ngOnInit(): void {
    this.ts.findToetsen().subscribe( toetsenLijst => {
      this.toetsen = toetsenLijst;
    })
  }

  maakTabelLeeg(){
    this.toetsen = [];
  }
}
