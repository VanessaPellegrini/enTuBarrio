import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStockComponent } from './detail-stock.component';

describe('DetailStockComponent', () => {
  let component: DetailStockComponent;
  let fixture: ComponentFixture<DetailStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
