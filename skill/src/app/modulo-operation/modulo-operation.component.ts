import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Modulo } from '../../shared/modules/modulo';

@Component({
  selector: 'modulo-operation',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './modulo-operation.component.html',
  styleUrl: './modulo-operation.component.scss'
})
export class ModuloOperationComponent {
  numbers : Modulo[] = [
    new Modulo(5, 4),
    new Modulo(27, 14)
  ]

  moduloNumber(value : any) {
    this.numbers.push(new Modulo(parseFloat(value.target[0].value), parseFloat(value.target[1].value)))
    value.target[0].value = '';
    value.target[1].value = '';
  }
}
