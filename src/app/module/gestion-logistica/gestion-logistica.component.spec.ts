import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLogisticaComponent } from './gestion-logistica.component';

describe('GestionLogisticaComponent', () => {
  let component: GestionLogisticaComponent;
  let fixture: ComponentFixture<GestionLogisticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionLogisticaComponent]
    });
    fixture = TestBed.createComponent(GestionLogisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
