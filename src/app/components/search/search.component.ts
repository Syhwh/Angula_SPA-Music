import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusiciansService } from '../../services/mucisians.services';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
musicians: any[] = [];
term: string;
  constructor( private _activatedRoute: ActivatedRoute,
              private _musicianService: MusiciansService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.term = params['text'];
      this.musicians = this._musicianService.searchMusicians(params['text']);
    });
  }

}
