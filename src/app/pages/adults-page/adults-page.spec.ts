import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultsPage } from './adults-page';

describe('AdultsPage', () => {
  let component: AdultsPage;
  let fixture: ComponentFixture<AdultsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdultsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
