import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly cartItemsSubject = new BehaviorSubject<string[]>([]);
  readonly cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  getData(): Observable<string[]> {
    return this.http.get<string[]>('/assets/test-data/wine-list.json');
  }
  addToCart(item: string) {
    this.cartItemsSubject.next([...this.cartItemsSubject.getValue(), item]);
  }
  removeFromCart(removeIndex: number) {
    // Option 1
    // const cartItemsClone = [...this.cartItemsSubject.getValue()];
    // cartItemsClone.splice(index, 1);
    // this.cartItemsSubject.next(cartItemsClone);

    // Option 2
    this.cartItemsSubject.next(
      this.cartItemsSubject
        .getValue()
        .filter((_, index) => index != removeIndex)
    );
  }
}
