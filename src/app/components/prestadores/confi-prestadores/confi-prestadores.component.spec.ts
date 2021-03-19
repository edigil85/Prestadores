import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiPrestadoresComponent } from './confi-prestadores.component';

describe('ConfiPrestadoresComponent', () => {
  let component: ConfiPrestadoresComponent;
  let fixture: ComponentFixture<ConfiPrestadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiPrestadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiPrestadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
