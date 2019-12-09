import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadaComponent } from './pada.component';

describe('PadaComponent', () => {
  let component: PadaComponent;
  let fixture: ComponentFixture<PadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
