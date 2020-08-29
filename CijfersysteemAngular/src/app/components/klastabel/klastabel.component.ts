import { Component, OnInit } from '@angular/core';
import { KlasDto } from '../../models/KlasDto';
import { KlasService } from '../../service/klas.service'

@Component({
  selector: 'app-klastabel',
  templateUrl: './klastabel.component.html',
  styleUrls: ['./klastabel.component.css']
})
export class KlastabelComponent implements OnInit {

  klassen: KlasDto[];
  
  constructor(private ks: KlasService) { }

  ngOnInit(): void {

    this.ks.findKlassen().subscribe( lijstVanKlassen => {
      this.klassen = lijstVanKlassen;
    });
  }

}
