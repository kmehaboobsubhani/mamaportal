import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { DataTablesComponent } from './items.component';
import { DataFilterPipe } from './items-filter.pipe';


describe('DataTablesComponent', () => {
  let component: DataTablesComponent;
  let fixture: ComponentFixture<DataTablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DataTablesComponent, DataFilterPipe],
      imports: [ HttpClientTestingModule, DataTableModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
