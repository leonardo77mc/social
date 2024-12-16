import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTiktokComponent } from './buy-tiktok.component';

describe('BuyTiktokComponent', () => {
  let component: BuyTiktokComponent;
  let fixture: ComponentFixture<BuyTiktokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyTiktokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTiktokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
