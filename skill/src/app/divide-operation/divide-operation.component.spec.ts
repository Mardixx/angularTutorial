import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideOperationComponent } from './divide-operation.component';

describe('DivideOperationComponent', () => {
  let component: DivideOperationComponent;
  let fixture: ComponentFixture<DivideOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivideOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivideOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
