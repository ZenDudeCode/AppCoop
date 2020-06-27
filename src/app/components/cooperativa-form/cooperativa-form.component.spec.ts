import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativaFormComponent } from './cooperativa-form.component';

describe('CooperativaFormComponent', () => {
  let component: CooperativaFormComponent;
  let fixture: ComponentFixture<CooperativaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
