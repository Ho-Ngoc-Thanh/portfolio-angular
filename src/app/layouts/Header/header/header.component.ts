import { Component, DoCheck, OnInit } from '@angular/core';
import { NavItem } from '../../layout-interface/layout.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  headerList: NavItem[] = [
    {
      title: 'home',
      link: '/home',
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

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.activeUrl = window.location.pathname;
    console.log(this.activeUrl);
  }

  getActiveUrl(link: string): boolean {
    console.log(link, this.route.url === link);
    return this.route.url === link;
  }
}
