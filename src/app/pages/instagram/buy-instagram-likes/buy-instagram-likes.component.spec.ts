import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyInstagramLikesComponent } from './buy-instagram-likes.component';

describe('BuyInstagramLikesComponent', () => {
  let component: BuyInstagramLikesComponent;
  let fixture: ComponentFixture<BuyInstagramLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyInstagramLikesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyInstagramLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
