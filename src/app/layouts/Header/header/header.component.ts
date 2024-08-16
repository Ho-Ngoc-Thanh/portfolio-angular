import { Component, DoCheck, OnInit } from '@angular/core';
import { NavItem } from '../../layout-interface/layout.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerList: NavItem[] = [
    {
      title: 'home',
      link: '/',
      icon: 'home',
    },
    {
      title: 'resume',
      link: '/resume',
      icon: 'description',
    },
    {
      title: 'work',
      link: '/work',
      icon: 'work',
    },
    {
      title: 'contact',
      link: '/contact',
      icon: 'mail',
    },
    {
      title: 'Demo',
      link: '/login',
      icon: 'smoking_rooms',
    },
  ];
  activeUrl: string = '';
  constructor(private route: Router) {}

  getActiveUrl(link: string): boolean {
    return this.route.url === link;
  }
}
