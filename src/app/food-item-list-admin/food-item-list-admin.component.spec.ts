import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemListAdminComponent } from './food-item-list-admin.component';

describe('FoodItemListAdminComponent', () => {
  let component: FoodItemListAdminComponent;
  let fixture: ComponentFixture<FoodItemListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemListAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodItemListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
