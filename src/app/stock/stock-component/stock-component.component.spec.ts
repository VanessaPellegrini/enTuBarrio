import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponentComponent } from './stock-component.component';

describe('StockComponentComponent', () => {
  let component: StockComponentComponent;
  let fixture: ComponentFixture<StockComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
