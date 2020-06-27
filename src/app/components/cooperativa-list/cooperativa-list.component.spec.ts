import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativaListComponent } from './cooperativa-list.component';

describe('CooperativaListComponent', () => {
  let component: CooperativaListComponent;
  let fixture: ComponentFixture<CooperativaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
