import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ITablePost } from 'src/app/features/inter-faces/home-inter-face';

@Component({
  selector: 'app-table-post',
  templateUrl: './table-post.component.html',
  styleUrls: ['./table-post.component.scss'],
})
export class TablePostComponent
  // implements
  //   OnChanges,
  //   OnInit,
  //   DoCheck,
  //   AfterContentInit,
  //   AfterContentChecked,
  //   AfterViewInit,
  //   AfterViewChecked
{
  displayedColumns: string[] = ['id', 'title', 'author', 'description','action'];
  @Input() dataSource: ITablePost[] = [];
  @Output() handleDelete = new EventEmitter<number>()
  @ViewChild('tableChild') tableChild!: ElementRef;
  @ContentChild('tableParent') tableParent!: ElementRef;
  @ContentChild(TablePostComponent) tableComponent!: TablePostComponent
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('1', changes['dataSource']);
  // }
  // ngOnInit(): void {
  //   console.log('2');
  // }
  // ngDoCheck(): void {
  //   console.log('3');
  // }
  // ngAfterContentInit(): void {
  //   console.log(
  //     '4',
  //     'tableParent',
  //     this.tableParent,
  //     'table child',
  //     this.tableChild
  //   );
  //   console.log("8 parent", this.tableComponent?.dataSource)

  // }

  // ngAfterContentChecked(): void {
  //   console.log(
  //     '5',
  //     'tableParent',
  //     this.tableParent,
  //     'table child',
  //     this.tableChild
  //   );
  //   console.log("9 parent", this.tableComponent?.dataSource)

  // }
  // ngAfterViewInit(): void {
  //   console.log('6','tableParent',
  //     this.tableParent,
  //     'table child',
  //     this.tableChild);
  // }
  // ngAfterViewChecked(): void {
  //   console.log('7','tableParent',
  //     this.tableParent,
  //     'table child',
  //     this.tableChild);
  // }
}
