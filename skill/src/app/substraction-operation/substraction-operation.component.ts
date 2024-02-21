import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Substraction } from '../../shared/modules/substraction';

@Component({
  selector: 'substraction-operation',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './substraction-operation.component.html',
  styleUrl: './substraction-operation.component.scss'
})
export class SubstractionOperationComponent {
  numbers : Substraction[] = [
    new Substraction(7, 9),
    new Substraction(856, 750)
  ]

  substractNumber(value : any) {
    this.numbers.push(new Substraction(parseFloat(value.target[0].value), parseFloat(value.target[1].value)))
    value.target[0].value = '';
    value.target[1].value = '';
  }
}
