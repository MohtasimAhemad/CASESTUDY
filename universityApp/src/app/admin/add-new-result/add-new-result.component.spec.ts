import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewResultComponent } from './add-new-result.component';

describe('AddNewResultComponent', () => {
  let component: AddNewResultComponent;
  let fixture: ComponentFixture<AddNewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
