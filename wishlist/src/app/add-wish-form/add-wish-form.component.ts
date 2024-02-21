import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../shared/modules/wishItem';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.scss'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = "";

  addNewWish() { 
      //Adds wish to items array and clear textBox
      //this.items.push(new WishItem(this.newWishText));
      this.addWish.emit(new WishItem(this.newWishText));
      this.newWishText = "";
    }
}
