import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Order.PageComponent } from './order.page.component';

describe('Order.PageComponent', () => {
  let component: Order.PageComponent;
  let fixture: ComponentFixture<Order.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Order.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Order.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
