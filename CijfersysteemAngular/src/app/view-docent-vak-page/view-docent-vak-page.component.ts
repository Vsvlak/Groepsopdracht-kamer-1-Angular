import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-docent-vak-page',
  templateUrl: './view-docent-vak-page.component.html',
  styleUrls: ['./view-docent-vak-page.component.css']
})
export class ViewDocentVakPageComponent implements OnInit {

  constructor(private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params => {
      alert(params.get("id"));
    })
  }

}
