import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogDataDelete } from 'src/app/features/inter-faces/home-inter-face';
import { HomeService } from 'src/app/features/services/homeService/home.service';
import { ModelService } from 'src/app/features/services/homeService/model.service';
import { SnackbarService } from 'src/app/features/services/snackBar/snackbar.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss'],
})
export class DeletePostComponent {
  readonly dialogRef = inject(MatDialogRef<DeletePostComponent>);
  readonly data = inject<DialogDataDelete>(MAT_DIALOG_DATA);
  constructor(
    private homeService: HomeService,
    private snackbar: SnackbarService,
  ) {}
  handleDeletePost() {
    this.homeService.deletePost(this.data.id).subscribe({
      next: () => {
        this.data.getApi();
        this.dialogRef.close()
      },
      error: () => {
        this.snackbar.openSnackBar({ message: 'Delete this post falied' });
      },
      complete: () => {
        this.snackbar.openSnackBar({ message: 'Delete this post success' });
      },
    });
  }
}
