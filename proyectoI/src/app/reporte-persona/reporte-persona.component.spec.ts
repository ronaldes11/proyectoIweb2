import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePersonaComponent } from './reporte-persona.component';

describe('ReportePersonaComponent', () => {
  let component: ReportePersonaComponent;
  let fixture: ComponentFixture<ReportePersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
