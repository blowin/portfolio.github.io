import { Injectable } from '@angular/core';

export interface LinkButton {
  iconClass: string;
  href: string;
}

@Injectable({
  providedIn: 'root'
})
export class LinkButtonService {

  constructor() { }

  public getAll(): LinkButton[] {
    return [
      { iconClass: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/dmitry-sushchevsky/' },
      { iconClass: 'fab fa-instagram', href: 'https://www.instagram.com/icyicebrrg/' },
      { iconClass: 'fab fa-github', href: 'https://github.com/blowin' },
      { iconClass: 'fab fa-telegram', href: 'https://t.me/kolvice/' }
    ];
  }
}
