import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Air-demo';
  list$ = this.dataService.getData();
  cartItems$ = this.dataService.cartItems$;

  constructor(private readonly dataService: DataService) {}

  add(item: string) {
    this.dataService.addToCart(item);
  }
  remove(index) {
    this.dataService.removeFromcart(index);
  }
}
