import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialAComponent } from './historial-a.component';

describe('HistorialAComponent', () => {
  let component: HistorialAComponent;
  let fixture: ComponentFixture<HistorialAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
