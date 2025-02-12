import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideObservadosComponent } from './side-observados.component';

describe('SideObservadosComponent', () => {
  let component: SideObservadosComponent;
  let fixture: ComponentFixture<SideObservadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideObservadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideObservadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
