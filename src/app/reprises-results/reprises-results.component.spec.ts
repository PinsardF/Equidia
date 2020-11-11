import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprisesResultsComponent } from './reprises-results.component';

describe('ReprisesResultsComponent', () => {
  let component: ReprisesResultsComponent;
  let fixture: ComponentFixture<ReprisesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprisesResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprisesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
