import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../shared/modules/wishItem';

const filters = [ //Easier than doing a If Else for filters
  (item : WishItem) => item,
  (item : WishItem) => item.isComplete,
  (item : WishItem) => !item.isComplete
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.scss'
})
export class WishFilterComponent {
  @Output() filter = new EventEmitter<any>();

  listFilter : any = '0';

  changeFilter(value : any) {
    this.filter.emit(filters[value]);
  }
}
