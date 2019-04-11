import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCowsPageComponent } from './show-cows-page.component';

describe('ShowCowsPageComponent', () => {
  let component: ShowCowsPageComponent;
  let fixture: ComponentFixture<ShowCowsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCowsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCowsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
