import { StocksComponent } from './stocks.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { DataFilterPipe } from './stocks-filter.pipe';

describe('ItemTestComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksComponent, DataFilterPipe ],
      imports: [ HttpClientTestingModule, DataTableModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
