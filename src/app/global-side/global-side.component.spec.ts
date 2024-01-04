import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSideComponent } from './global-side.component';

describe('GlobalSideComponent', () => {
  let component: GlobalSideComponent;
  let fixture: ComponentFixture<GlobalSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalSideComponent]
    });
    fixture = TestBed.createComponent(GlobalSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
