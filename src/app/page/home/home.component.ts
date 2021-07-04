import { Component, OnInit } from '@angular/core';
import {Place} from '../../data/place';
import {Project} from '../../data/project';
import {WorkPlaceService} from '../../../services/work-place/work-place.service';
import {ProjectService} from '../../../services/project/project.service';
import {Link} from '../../data/link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  places: Place[];

  constructor(private placeService: WorkPlaceService) {
    placeService.getPlaces().subscribe((data: Place[]) => {
      this.places = data.map((it) => {
        const place = new Place();
        place.company = it.company;
        place.description = it.description;
        place.endDate = it.endDate != null ? new Date(Date.parse(it.endDate.toString())) : null;
        place.isWork = it.isWork;
        place.technologies = it.technologies;
        place.startDate = new Date(Date.parse(it.startDate.toString()));
        return place;
      });
    });
  }

  getCurrentJob(): Place {
    if (this.places == null) {
      return null;
    }

    const result = this.places.find((place) => !place.getOptionalEndDate().HasValue);
    return result === undefined ? null : result;
  }
}
