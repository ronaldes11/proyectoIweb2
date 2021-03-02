import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteProyectoComponent } from './reporte-proyecto.component';

describe('ReporteProyectoComponent', () => {
  let component: ReporteProyectoComponent;
  let fixture: ComponentFixture<ReporteProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
