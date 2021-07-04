import { Component } from '@angular/core';
import {WorkPlaceService} from '../services/work-place/work-place.service';
import {ProjectService} from '../services/project/project.service';
import {Place} from './data/place';
import {Project} from './data/project';

import {Link} from './data/link';
import {LinkButton, LinkButtonService} from '../services/link-button/link-button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
}
