import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloOperationComponent } from './modulo-operation.component';

describe('ModuloOperationComponent', () => {
  let component: ModuloOperationComponent;
  let fixture: ComponentFixture<ModuloOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
