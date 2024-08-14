import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPostDialogComponent } from './add-new-post-dialog.component';

describe('AddNewPostDialogComponent', () => {
  let component: AddNewPostDialogComponent;
  let fixture: ComponentFixture<AddNewPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPostDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
