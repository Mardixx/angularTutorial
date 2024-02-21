import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationOperationComponent } from './multiplication-operation.component';

describe('MultiplicationOperationComponent', () => {
  let component: MultiplicationOperationComponent;
  let fixture: ComponentFixture<MultiplicationOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicationOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiplicationOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
