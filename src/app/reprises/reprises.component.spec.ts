import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprisesComponent } from './reprises.component';

describe('ReprisesComponent', () => {
  let component: ReprisesComponent;
  let fixture: ComponentFixture<ReprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
