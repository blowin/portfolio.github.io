import { Component, OnInit } from '@angular/core';

interface NavLink {
  content: string;
  rout: string;
}

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
  links: NavLink[];

  constructor() {
    this.links = [
      { content: 'Главная страница', rout: '/' },
      { content: 'Проекты', rout: '/project' },
    ];
  }

  ngOnInit(): void {
  }

}

