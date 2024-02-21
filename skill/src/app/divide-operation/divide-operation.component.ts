import { Component } from '@angular/core';
import { Division } from '../../shared/modules/division';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'divide-operation',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './divide-operation.component.html',
  styleUrl: './divide-operation.component.scss'
})
export class DivideOperationComponent {
  numbers : Division[] = [
    new Division(6, 8),
    new Division(85, 20)
  ]

  divideNumber(value : any) {
    this.numbers.push(new Division(parseFloat(value.target[0].value), parseFloat(value.target[1].value)))
    value.target[0].value = '';
    value.target[1].value = '';
  }
}
