import { Component, EventEmitter, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  CreateNewPost,
  DialogData,
} from 'src/app/features/inter-faces/home-inter-face';
import { HeadTableComponent } from '../head-table/head-table.component';
import { HomeService } from 'src/app/features/services/homeService/home.service';
import { SnackbarService } from 'src/app/features/services/snackBar/snackbar.service';

@Component({
  selector: 'app-add-new-post-dialog',
  templateUrl: './add-new-post-dialog.component.html',
  styleUrls: ['./add-new-post-dialog.component.scss'],
})
export class AddNewPostDialogComponent {
  readonly dialogRef = inject(MatDialogRef<HeadTableComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  formPost: CreateNewPost = {
    author: '',
    title: '',
    description: '',
  };

  constructor(
    private homeService: HomeService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    console.log(this.data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.homeService.createPost(this.formPost).subscribe({
      next: () => {
        this.snackbar.openSnackBar({ message: 'add new post success' });
        this.data.getApi();
      },
      error: () => {
        this.snackbar.openSnackBar({ message: 'add new post failed' });
      },
      complete: () => this.onNoClick(),
    });
  }
}
