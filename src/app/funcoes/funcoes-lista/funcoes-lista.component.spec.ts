import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncoesListaComponent } from './funcoes-lista.component';

describe('FuncoesListaComponent', () => {
  let component: FuncoesListaComponent;
  let fixture: ComponentFixture<FuncoesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncoesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncoesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
