import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyImstragramComponent } from './buy-imstragram.component';

describe('BuyImstragramComponent', () => {
  let component: BuyImstragramComponent;
  let fixture: ComponentFixture<BuyImstragramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyImstragramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyImstragramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
