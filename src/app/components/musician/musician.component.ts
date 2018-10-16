import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusiciansService } from '../../services/mucisians.services';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styles: []
})
export class MusicianComponent {

  musician: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
              private _musiciansService: MusiciansService) {
            this._activatedRoute.params.subscribe( params => {
                this.musician = this._musiciansService.getMusician(params['id']);
              });
            }



}
