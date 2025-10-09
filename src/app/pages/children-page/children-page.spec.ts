import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenPage } from './children-page';

describe('ChildrenPage', () => {
  let component: ChildrenPage;
  let fixture: ComponentFixture<ChildrenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
