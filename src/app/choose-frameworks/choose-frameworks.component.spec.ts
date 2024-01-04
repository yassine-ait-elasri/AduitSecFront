import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFrameworksComponent } from './choose-frameworks.component';

describe('ChooseFrameworksComponent', () => {
  let component: ChooseFrameworksComponent;
  let fixture: ComponentFixture<ChooseFrameworksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseFrameworksComponent]
    });
    fixture = TestBed.createComponent(ChooseFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
