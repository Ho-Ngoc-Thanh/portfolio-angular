import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-resume',
  templateUrl: './portfolio-resume.component.html',
  styleUrls: ['./portfolio-resume.component.scss'],
})
export class PortfolioResumeComponent {
  workSkil: string[] = [
    'NEXT.js',
    'React.js',
    'HTML 5',
    'CSS 3',
    'Tailwind CSS',
    'Figma ',
    'JavaScript',
    'Angular',
    'Mongo DB',
  ];

  softSkil: string[] = [
    'Time Management',
    'Mentorship',
    'Impeccable Communication',
    'Research',
    'Flexibility',
    'Writing',
  ];
}
