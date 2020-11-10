import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReprisesComponent } from './manage-reprises.component';

describe('ManageReprisesComponent', () => {
  let component: ManageReprisesComponent;
  let fixture: ComponentFixture<ManageReprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageReprisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageReprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
