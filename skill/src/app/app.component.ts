import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Addition } from '../shared/modules/addition';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiplicationOperationComponent } from './multiplication-operation/multiplication-operation.component';
import { DivideOperationComponent } from './divide-operation/divide-operation.component';
import { SubstractionOperationComponent } from './substraction-operation/substraction-operation.component';
import { ModuloOperationComponent } from './modulo-operation/modulo-operation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, MultiplicationOperationComponent, DivideOperationComponent, SubstractionOperationComponent, ModuloOperationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  numbers : Addition[] = [
    new Addition(2, 5),
    new Addition(80, 55)
  ]

  addNumber(number : any) {
    this.numbers.push(new Addition(parseFloat(number.target[0].value),parseFloat( number.srcElement[1].value)));
    number.target[0].value = '';
    number.target[1].value = '';
  }
}
