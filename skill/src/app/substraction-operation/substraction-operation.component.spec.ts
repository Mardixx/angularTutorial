import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractionOperationComponent } from './substraction-operation.component';

describe('SubstractionOperationComponent', () => {
  let component: SubstractionOperationComponent;
  let fixture: ComponentFixture<SubstractionOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubstractionOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubstractionOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
