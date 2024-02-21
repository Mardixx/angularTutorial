import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Multiplication } from '../../shared/modules/multiplication';

@Component({
  selector: 'multiplication-operation',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './multiplication-operation.component.html',
  styleUrl: './multiplication-operation.component.scss'
})
export class MultiplicationOperationComponent {
  numbers : Multiplication[] = [
    new Multiplication(5, 4),
    new Multiplication(27, 14)
  ]

  multiplyNumber(value : any) {
    this.numbers.push(new Multiplication(parseFloat(value.target[0].value), parseFloat(value.target[1].value)))
    value.target[0].value = '';
    value.target[1].value = '';
  }
}
