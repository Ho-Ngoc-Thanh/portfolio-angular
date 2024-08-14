import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AboutsService } from '../../services/aboutsService/abouts.service';
import { Photo } from '../../inter-faces/about.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.scss'],
})
export class AboutsComponent implements OnInit, AfterViewInit {
  dataSource: Photo[] = [];
  loading: boolean = false;
  page: number = 0;
  @ViewChild('scrollAnchor') scrollAnchor!: ElementRef;

  constructor(private aboutsService: AboutsService) {}

  ngOnInit(): void {
    this.featchPhotoInit();
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.loadMoreData();
      }
    });

    observer.observe(this.scrollAnchor.nativeElement);
  }

  loadMoreData(): void {
    console.log('Tải thêm dữ liệu...');
    // Thực hiện việc tải thêm dữ liệu
    this.loading = false;
    forkJoin([this.aboutsService.getPhoto(++this.page)]).subscribe({
      next: (results) => {
        const [photos] = results;
        if (photos) {
          this.dataSource = [...this.dataSource, ...photos];
        }
      },
      complete: () => (this.loading = true),
    });
  }
  featchPhotoInit() {
    this.loading = false;
    forkJoin([this.aboutsService.getPhoto(this.page)]).subscribe({
      next: (results) => {
        const [photos] = results;
        if (photos) {
          this.dataSource = photos;
        }
      },
      complete: () => (this.loading = true),
    });
  }
}
