import { Component } from '@angular/core';
import { WorkItem } from '../../inter-faces/portfolio.interface';

@Component({
  selector: 'app-portfolio-work',
  templateUrl: './portfolio-work.component.html',
  styleUrls: ['./portfolio-work.component.scss'],
})
export class PortfolioWorkComponent {
  workList: WorkItem[] = [
    {
      title: 'Smart Bank App',
      description: 'App Development',
      img: '/assets/svgs/portfolio/work1.svg',
    },
    {
      title: 'NEXT.js',
      description: 'Blog',
      img: '/assets/svgs/portfolio/work2.svg',
    },
    {
      title: 'Rental ',
      description: 'UI/UX',
      img: '/assets/svgs/portfolio/work3.svg',
    },
    {
      title: 'Tech Mentor',
      description: 'Mentorship',
      img: '/assets/svgs/portfolio/work4.svg',
    },
    {
      title: 'IdeaFlow',
      description: 'Web Development',
      img: '/assets/svgs/portfolio/work5.svg',
    },
  ];
}
