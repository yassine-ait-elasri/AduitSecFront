import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAuditComponent } from './security-audit.component';

describe('SecurityAuditComponent', () => {
  let component: SecurityAuditComponent;
  let fixture: ComponentFixture<SecurityAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityAuditComponent]
    });
    fixture = TestBed.createComponent(SecurityAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
