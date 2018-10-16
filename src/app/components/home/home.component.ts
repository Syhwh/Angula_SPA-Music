import { Component, OnInit } from '@angular/core';
import { MusiciansService, Musician} from '../../services/mucisians.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musicians: Musician[] = [];

  constructor( private _musiciansService: MusiciansService,
               private _router: Router) { }

  ngOnInit() {
    this.musicians = this._musiciansService.getMusicias();
  }

  moreMusician(idx: number) {
    console.log(idx);
    this._router.navigate(['/musician', idx]);
  }
}
