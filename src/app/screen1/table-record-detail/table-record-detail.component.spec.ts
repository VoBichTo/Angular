import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecordDetailComponent } from './table-record-detail.component';

describe('TableRecordDetailComponent', () => {
  let component: TableRecordDetailComponent;
  let fixture: ComponentFixture<TableRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
