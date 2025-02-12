import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRegistroComponent } from './datos-registro.component';

describe('DatosRegistroComponent', () => {
  let component: DatosRegistroComponent;
  let fixture: ComponentFixture<DatosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
