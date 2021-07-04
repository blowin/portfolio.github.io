import { Component, OnInit } from '@angular/core';
import {LinkButton, LinkButtonService} from '../../services/link-button/link-button.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private linkButtonService: LinkButtonService) { }

  ngOnInit(): void {
  }

  getLinkButtons(): LinkButton[] {
    return this.linkButtonService.getAll();
  }
}
