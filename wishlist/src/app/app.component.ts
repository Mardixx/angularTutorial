import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItem';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Start learning Angular', true),
    new WishItem('Get an internship'),
    new WishItem('Find grass that cuts intself')
  ]
  title = 'trying to work';

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
    
  }
}


