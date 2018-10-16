import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-musician-card',
  templateUrl: './musician-card.component.html',
  styleUrls: ['./musician-card.component.css']
})
export class MusicianCardComponent implements OnInit {
  @Input () musician: any = {};
  @Input () index: number;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  moreMusician(){
    this._router.navigate(['/musician', this.index]);
  }
}
