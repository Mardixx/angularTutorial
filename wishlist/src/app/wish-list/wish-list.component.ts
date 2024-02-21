import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../shared/modules/wishItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
  @Input() wishes : WishItem[] = [];
  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
  }
}
