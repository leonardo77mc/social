import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTiktokLikesComponent } from './buy-tiktok-likes.component';

describe('BuyTiktokLikesComponent', () => {
  let component: BuyTiktokLikesComponent;
  let fixture: ComponentFixture<BuyTiktokLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyTiktokLikesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTiktokLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
