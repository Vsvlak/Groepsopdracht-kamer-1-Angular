import { Component, OnInit } from '@angular/core';
import { DocentService } from '../../service/docent.service';
import { DocentDto } from '../../models/DocentDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docenttabel',
  templateUrl: './docenttabel.component.html',
  styleUrls: ['./docenttabel.component.css']
})
export class DocenttabelComponent implements OnInit {

 
  docenten: DocentDto[];

  constructor(private ds: DocentService, private router: Router) { }

  ngOnInit(): void {

    this.ds.findDocenten().subscribe( lijstVanDocenten => {
      this.docenten = lijstVanDocenten;
    });
  }

  maakTabelLeeg(){
    this.docenten = [];
  }

  bekijkDocentVakken(d: DocentDto){ 
 

    this.router.navigateByUrl('/docent/'+ d.id);

  }
}
