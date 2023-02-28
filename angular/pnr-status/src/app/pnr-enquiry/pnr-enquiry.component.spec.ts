import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrEnquiryComponent } from './pnr-enquiry.component';

describe('PnrEnquiryComponent', () => {
  let component: PnrEnquiryComponent;
  let fixture: ComponentFixture<PnrEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnrEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnrEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
