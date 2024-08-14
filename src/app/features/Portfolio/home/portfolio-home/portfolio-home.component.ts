import { Component } from '@angular/core';
import { CanDo } from 'src/app/features/inter-faces/portfolio.interface';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss'],
})
export class PortfolioHomeComponent {
  description =
    "Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.";

  homeList: CanDo[] = [
    {
      title: 'Web Development',
      icon: 'whatshot',
      description:
        "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into newprojects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
    },
    {
      title: 'App Development',
      icon: 'add_a_photo',
      description:
        "With a focus on user-centric design andcutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people's lives. Let's turn ideas into reality and shape the future together.",
    },
    {
      title: 'UI/UX Designing',
      icon: 'pages',
      description:
        "Crafting visually appealing and intuitive userinterfaces that offer a delightful user experience is something I'm truly fanatic about.",
    },
    {
      title: 'Mentorship',
      icon: 'group_add',
      description:
        'I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career. ',
    },
  ];
}
