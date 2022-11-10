import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerContentComponent } from './partner-content.component';

describe('PartnerContentComponent', () => {
  let component: PartnerContentComponent;
  let fixture: ComponentFixture<PartnerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
