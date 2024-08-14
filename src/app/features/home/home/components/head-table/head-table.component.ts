import {
  Component,
  DoCheck,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { AddNewPostDialogComponent } from '../add-new-post-dialog/add-new-post-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-head-table',
  templateUrl: './head-table.component.html',
  styleUrls: ['./head-table.component.scss'],
})
export class HeadTableComponent {
  @Input() keyword: string = '';
  @Output() keywordChange = new EventEmitter<string>();
  @Output() keywordChanged = new Subject<string>();
  @Output() onSubmitSuccess = new EventEmitter();
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(AddNewPostDialogComponent, {
      data: {
        title: 'Add new post',
        getApi: () => {
          this.onSubmitSuccess.emit();
        },
      },
      maxWidth: '60vh',
    });
  }

  onChange($event: any) {
    this.keywordChange.emit($event);
    this.keywordChanged.next($event);
  }
}
