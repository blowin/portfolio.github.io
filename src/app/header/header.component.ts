import { Component, OnInit } from '@angular/core';
import {LinkButton, LinkButtonService} from '../../services/link-button/link-button.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private linkButtonService: LinkButtonService) { }

  ngOnInit(): void {
  }

  getLinkButtons(): LinkButton[] {
    return this.linkButtonService.getAll();
  }

}
