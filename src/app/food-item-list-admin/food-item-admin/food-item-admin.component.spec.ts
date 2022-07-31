import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemAdminComponent } from './food-item-admin.component';

describe('FoodItemAdminComponent', () => {
  let component: FoodItemAdminComponent;
  let fixture: ComponentFixture<FoodItemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodItemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
