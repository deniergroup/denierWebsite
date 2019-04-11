import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsMothersPageComponent } from './cows-mothers-page.component';

describe('CowsMothersPageComponent', () => {
  let component: CowsMothersPageComponent;
  let fixture: ComponentFixture<CowsMothersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowsMothersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowsMothersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
