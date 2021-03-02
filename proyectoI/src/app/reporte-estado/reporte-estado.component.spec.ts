import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEstadoComponent } from './reporte-estado.component';

describe('ReporteEstadoComponent', () => {
  let component: ReporteEstadoComponent;
  let fixture: ComponentFixture<ReporteEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
