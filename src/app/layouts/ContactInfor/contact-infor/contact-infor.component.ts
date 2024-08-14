import { Component } from '@angular/core';
import { Social } from '../../layout-interface/layout.interface';

@Component({
  selector: 'app-contact-infor',
  templateUrl: './contact-infor.component.html',
  styleUrls: ['./contact-infor.component.scss'],
})
export class ContactInforComponent {
  socials: Social[] = [
    {
      icon: 'public',
      link: '',
      title: '',
      color: '#1877F2',
    },
    {
      icon: 'people',
      link: '',
      title: '',
      color: '#0077B5',
    },
    {
      icon: 'share',
      link: '',
      title: '',
      color: '#1DA1F2',
    },
    {
      icon: 'school',
      link: '',
      title: '',
      color: '#0B0909',
    },
  ];
}
