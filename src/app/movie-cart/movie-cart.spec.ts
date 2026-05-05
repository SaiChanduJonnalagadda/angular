import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCart } from './movie-cart';

describe('MovieCart', () => {
  let component: MovieCart;
  let fixture: ComponentFixture<MovieCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCart],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
