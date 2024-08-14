import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../services/homeService/home.service';
import {
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  Subject,
  takeUntil,
} from 'rxjs';
import { ITablePost } from '../../inter-faces/home-inter-face';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DeletePostComponent } from './components/delete-post/delete-post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  dataSurce: ITablePost[] = [];
  keyword: string = '';
  keywordChanged = new Subject<string>();
  $unsubscribe = new Subject();
  length = 0;
  pageSize = 20;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  readonly dialog = inject(MatDialog);

  constructor(
    private homeSevice: HomeService,
  ) {}

  ngOnInit(): void {
    this.featchPosts();
    this.handleSearchInput();
    this._featchPostsInit();
  }
  _featchPostsInit() {
    forkJoin([
      this.homeSevice.getPost({
        page: 1,
        pageSize: 1000,
      }),
    ]).subscribe({
      next: (results) => {
        const [total] = results;
        if (total) {
          this.length = total?.length;
        }
      },
      error: (errr) => console.log(errr),
      complete() {
        'get data success';
      },
    });
  }
  featchPosts() {
    forkJoin([
      this.homeSevice.getPost({
        keyword: this.keyword,
        page: this.pageIndex + 1,
        pageSize: this.pageSize,
      }),
    ]).subscribe({
      next: (results) => {
        const [posts] = results;

        if (posts) {
          this.dataSurce = posts;
        }
      },
      error: (errr) => console.log(errr),
      complete() {
        'get data success';
      },
    });
  }

  handleSearchInput() {
    this.keywordChanged
      .pipe(
        takeUntil(this.$unsubscribe),
        distinctUntilChanged(),
        debounceTime(300)
      )
      .subscribe({
        next: () => {
          this.featchPosts();
        },
      });
  }

  handleCreateSuccess() {
    this.featchPosts();
    this._featchPostsInit();
  }

  handleDelete(id: number) {
    this.dialog.open(DeletePostComponent, {
      width: '300px',
      data: {
        id: id,
        getApi: () => {
          this.featchPosts();
          this._featchPostsInit();
        },
      },
    });


  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.featchPosts();
  }
  ngOnDestroy(): void {
    console.log('destroy');
    this.$unsubscribe.next(null);
    this.$unsubscribe.complete();
    // throw new Error('Method not implemented.');
  }
}
