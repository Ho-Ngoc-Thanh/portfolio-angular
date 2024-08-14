import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { ITablePost } from 'src/app/features/inter-faces/home-inter-face';
import { HomeService } from 'src/app/features/services/homeService/home.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  postById: ITablePost = {
    id: 1,
    author: '',
    title: '',
  };
  constructor(
    private router: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.getInforPost();
  }

  getInforPost() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.homeService.getPostById(id).subscribe({
      next: (results) => {
        const [postId] = results;
        if (postId) {
          this.postById = postId;
        }
      },
    });
  }
}
